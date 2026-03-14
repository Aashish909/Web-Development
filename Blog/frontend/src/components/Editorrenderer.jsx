
import React from 'react'

const EditorRenderer = ({ content }) => {
  if (!content) return null;

  let parsedContent;
  try {
    parsedContent = typeof content === "string" ? JSON.parse(content) : content;
  } catch {
    // Fallback: plain text
    return (
      <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
        {content}
      </p>
    );
  }

  const blocks = parsedContent?.blocks ?? [];
  if (!blocks.length) return null;

  const renderBlock = (block) => {
    switch (block.type) {
      /* ── Paragraph ── */
      case "paragraph":
        return (
          <p
            key={block.id}
            className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );

      /* ── Headers ── */
      case "header": {
        const Tag = `h${block.data.level}`;
        const sizeMap = {
          1: "text-4xl font-black",
          2: "text-3xl font-bold",
          3: "text-2xl font-bold",
          4: "text-xl font-semibold",
          5: "text-lg font-semibold",
          6: "text-base font-semibold",
        };
        return (
          <Tag
            key={block.id}
            className={`${sizeMap[block.data.level] ?? "text-2xl font-bold"} text-slate-900 dark:text-slate-100 tracking-tight`}
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );
      }

      /* ── List (ordered / unordered, supports nested) ── */
      case "list": {
        const renderItems = (items, style) => {
          const Tag = style === "ordered" ? "ol" : "ul";
          const markerClass =
            style === "ordered" ? "list-decimal" : "list-disc";
          return (
            <Tag className={`${markerClass} pl-6 space-y-1`}>
              {items.map((item, i) => (
                <li
                  key={i}
                  className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed"
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: item.content ?? item }}
                  />
                  {/* Nested items */}
                  {item.items?.length > 0 && renderItems(item.items, style)}
                </li>
              ))}
            </Tag>
          );
        };
        return (
          <div key={block.id}>
            {renderItems(block.data.items, block.data.style)}
          </div>
        );
      }

      /* ── Checklist ── */
      case "checklist":
        return (
          <ul key={block.id} className="space-y-2 not-prose">
            {block.data.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-1 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    item.checked
                      ? "bg-primary border-primary"
                      : "border-slate-300 dark:border-slate-600"
                  }`}
                >
                  {item.checked && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span
                  className={`text-lg leading-relaxed ${
                    item.checked
                      ? "line-through text-slate-400 dark:text-slate-500"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </li>
            ))}
          </ul>
        );

      /* ── Quote ── */
      case "quote":
        return (
          <blockquote
            key={block.id}
            className="border-l-4 border-primary pl-5 py-1 my-2"
          >
            <p
              className="text-xl italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
            {block.data.caption && (
              <cite className="block mt-2 text-sm text-slate-500 dark:text-slate-400 not-italic">
                — {block.data.caption}
              </cite>
            )}
          </blockquote>
        );

      /* ── Code block ── */
      case "code":
        return (
          <div key={block.id} className="relative group not-prose">
            <pre className="bg-slate-950 rounded-xl overflow-x-auto p-5 text-sm leading-relaxed border border-slate-800">
              <code className="text-emerald-400 font-mono whitespace-pre">
                {block.data.code}
              </code>
            </pre>
            {/* Copy button */}
            <button
              onClick={() => navigator.clipboard.writeText(block.data.code)}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-md font-mono"
            >
              copy
            </button>
          </div>
        );

      /* ── Delimiter ── */
      case "delimiter":
        return (
          <div
            key={block.id}
            className="flex items-center justify-center gap-3 my-2"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/50"
              />
            ))}
          </div>
        );

      /* ── Embed (YouTube, Twitter, CodePen…) ── */
      case "embed":
        return (
          <div key={block.id} className="not-prose">
            {block.data.caption && (
              <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-2">
                {block.data.caption}
              </p>
            )}
            <div
              className="relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={block.data.embed}
                title={block.data.caption || "Embedded content"}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        );

      /* ── Image (if you add @editorjs/image later) ── */
      case "image":
        return (
          <figure key={block.id} className="not-prose">
            <img
              src={block.data.file?.url}
              alt={block.data.caption || ""}
              className={`w-full rounded-xl object-cover ${
                block.data.withBorder
                  ? "border border-slate-200 dark:border-slate-700"
                  : ""
              } ${block.data.stretched ? "max-w-none -mx-8" : ""}`}
            />
            {block.data.caption && (
              <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                {block.data.caption}
              </figcaption>
            )}
          </figure>
        );

      /* ── Unknown block type — skip gracefully ── */
      default:
        return null;
    }
  };

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none space-y-6">
      {blocks.map(renderBlock)}
    </article>
  );
};

export default EditorRenderer;
