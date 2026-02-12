import React from "react";

const SearchRowSkeleton = () => {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="w-[70px] h-[70px] rounded-lg shimmer"></div>

      <div className="flex-1 space-y-2">
        <div className="h-4 w-1/2 rounded shimmer"></div>
        <div className="h-3 w-1/3 rounded shimmer"></div>
        <div className="h-3 w-1/4 rounded shimmer"></div>
      </div>
    </div>
  );
};

const SearchHeaderSkeleton = () => {
  return (
    <div className="w-full sticky top-0 bg-white z-10 pb-4">
      <div className="h-[48px] w-full rounded-xl shimmer"></div>

      <div className="flex gap-3 mt-4">
        <div className="h-8 w-20 rounded-full shimmer"></div>
        <div className="h-8 w-24 rounded-full shimmer"></div>
        <div className="h-8 w-16 rounded-full shimmer"></div>
      </div>
    </div>
  );
};

const SearchShimmer = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 pt-6">
      <SearchHeaderSkeleton />

      {/* Results */}
      <div className="mt-6">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <SearchRowSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default SearchShimmer;
