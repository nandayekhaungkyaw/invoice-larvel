import React from 'react'

const SkeletonLoading = () => {
  return (
    <tr className="animate-pulse odd:bg-white even:bg-gray-50 border-b">
  {/* Skeleton for ID */}
  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
    <div className="h-4 w-6 bg-gray-300 rounded"></div>
  </th>

  {/* Skeleton for Product Name */}
  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
    <div className="h-4 w-24 bg-gray-300 rounded"></div>
  </td>

  {/* Skeleton for Price */}
  <td className="px-6 py-4 text-end ml-auto">
    <div className="h-4 w-12 bg-gray-300 rounded"></div>
  </td>

  {/* Skeleton for Date and Time */}
  <td className="px-6 py-4 text-end ml-auto">
    <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
    <div className="h-4 w-16 bg-gray-300 rounded"></div>
  </td>

  {/* Skeleton for Action Buttons */}
  <td className="px-6 py-4 text-end flex flex-row gap-[4px] justify-end">
    <div className="h-8 w-8 bg-gray-300 rounded"></div>
    <div className="h-8 w-8 bg-gray-300 rounded"></div>
  </td>
</tr>

  )
}

export default SkeletonLoading
