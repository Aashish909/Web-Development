export function MenuShimmer() {
  return (
    <div className="w-full bg-white">
      {/* Restaurant Info Skeleton */}
      <div className="max-w-[800px] mx-auto px-4 pt-6">
        <div className="h-7 w-1/2 rounded shimmer mb-3"></div>
        <div className="h-4 w-1/3 rounded shimmer mb-6"></div>

        <div className="h-[120px] w-full rounded-xl shimmer mb-8"></div>
      </div>

      {/* Menu Items Grid (2 Column like Swiggy Web) */}
      <div
        className="
        max-w-[800px] 
        mx-auto 
        px-4 
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-x-10 
        gap-y-8
      "
      >
        {Array(8)
          .fill("")
          .map((_, index) => (
            <MenuItemSkeleton key={index} />
          ))}
      </div>
    </div>
  );
}


const MenuItemSkeleton = () => {
  return (
    <div className="flex gap-4 w-full border-b pb-6">
      {/* Left Text Section */}
      <div className="flex-1 space-y-3">
        <div className="h-5 w-2/3 rounded shimmer"></div>
        <div className="h-4 w-1/2 rounded shimmer"></div>
        <div className="h-4 w-1/3 rounded shimmer"></div>

        <div className="h-3 w-full rounded shimmer"></div>
        <div className="h-3 w-5/6 rounded shimmer"></div>
      </div>

      {/* Right Image */}
      <div className="w-[120px] h-[100px] rounded-xl shimmer"></div>
    </div>
  );
};
