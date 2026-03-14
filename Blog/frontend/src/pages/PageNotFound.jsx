import React from 'react'

const PageNotFound = () => {
  return (
    <div>
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 md:py-24">
        <div className="max-w-[640px] w-full flex flex-col items-center text-center">
          <div className="relative w-full aspect-[16/10] mb-8 overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <span className="text-[120px] md:text-[180px] font-black text-primary/20 leading-none select-none">
                404
              </span>
              <div className="absolute flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-8xl md:text-9xl">
                  search_off
                </span>
              </div>
            </div>
            <div
              className="w-full h-full absolute top-0 left-0 bg-center bg-no-repeat bg-cover opacity-20 pointer-events-none"
              data-alt="Abstract minimal geometric pattern with soft blue colors"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB448l5L6pmPIl8FfRzfUPGjB_ZqfpjAXopuT1y2umc3mqW3AKWZbW0bXRK0O400NdzMxWKOFZ83UCFmGbarqLhACxcP7-ZhSzsScWYs61Ylj_7GKFpO9Q3M232at9OHw_BLgoKPjcu35n4THUhsOTMpgzi6CyuHzfGdcV377i798SpsJKAApC-YPdFfwmksiSdldyhqGle0RpJ7NRtbO-KPYhSaHevVGnUkV-hOoh9R3UGeXfD7DJRI2-aQnQBrCv2DtJSNg18rVw")',
              }}
            ></div>
          </div>
          <div className="space-y-4">
            <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl md:text-4xl font-bold leading-tight">
              Oops! Page not found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-normal leading-relaxed max-w-md mx-auto">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full justify-center">
            <a
              className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              href="/"
            >
              Back to Home
            </a>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-slate-200/80 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              Contact Support
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
              <span className="material-symbols-outlined text-primary mb-2">
                help_outline
              </span>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Help Center
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Browse our guides
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
              <span className="material-symbols-outlined text-primary mb-2">
                article
              </span>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Documentation
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Read the api docs
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
              <span className="material-symbols-outlined text-primary mb-2">
                rss_feed
              </span>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Recent Posts
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Check our latest news
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto py-8 px-6 text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © 2024 Design Studio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default PageNotFound




