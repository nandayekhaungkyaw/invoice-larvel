import React from 'react'

const SkeletonLoadingEdit = () => {
  return (
    <div>
    <div className="flex flex-col gap-[16px] mt-[26px] md:w-1/2 w-full">
      <div className="h-6 bg-gray-300 rounded w-2/3 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
    </div>
    <form className="mt-[26px] flex flex-col gap-[16px]">
      <div className="max-w-sm">
        <div className="h-5 bg-gray-300 rounded w-1/4 mb-2 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full animate-pulse"></div>
      </div>
  
      <div className="max-w-sm">
        <div className="h-5 bg-gray-300 rounded w-1/4 mb-2 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full animate-pulse"></div>
      </div>
  
      <div className="flex flex-row items-center mt-6 gap-3">
        <div className="h-4 w-4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-5 bg-gray-300 rounded w-2/3 animate-pulse"></div>
      </div>
  
      <div className="flex flex-row gap-[26px] mt-6">
        <div className="py-3 px-6 bg-gray-300 rounded-lg w-24 animate-pulse"></div>
        <div className="py-3 px-6 bg-gray-300 rounded-lg w-32 animate-pulse"></div>
      </div>
    </form>
  </div>
  
  )
}

export default SkeletonLoadingEdit
