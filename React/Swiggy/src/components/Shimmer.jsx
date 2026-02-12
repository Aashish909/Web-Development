// import React from 'react'

// const Shimmer = () => {
//   return (
//     <div className="w-full">
//       <div className="w-full bg-slate-900 h-[350px] text-white flex justify-center items-center flex-col">
//         <div className="relative">
//           <img
//             className="w-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
//             alt=""
//           />
//           <span className="loader "></span>
//         </div>
//         <h1 className="text-2xl">Looking for great food near you...</h1>
//       </div>

//       <div className="w-[70%] mx-auto flex flex-wrap gap-8">
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//         <div className="min-w-[265px] h-[152px] bg-gray-300 rounded-md"></div>
//       </div>
//     </div>
//   );
// }

// export default Shimmer

import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-full sm:w-[260px]">
      <div className="h-[160px] w-full rounded-xl shimmer"></div>

      <div className="mt-3 space-y-2">
        <div className="h-4 w-3/4 rounded shimmer"></div>
        <div className="h-4 w-1/2 rounded shimmer"></div>
        <div className="h-4 w-1/3 rounded shimmer"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-slate-900 h-[300px] text-white flex justify-center items-center flex-col">
        <div className="relative">
          <img
            className="w-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
            alt=""
          />
          <span className="loader"></span>
        </div>
        <h1 className="text-2xl mt-4">Looking for great food near you...</h1>
      </div>

      {/* Skeleton Grid */}
      <div
        className="w-[90%] xl:w-[75%] mx-auto mt-10 
                      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8"
      >
        {Array(15)
          .fill("")
          .map((_, index) => (
            <CardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;



