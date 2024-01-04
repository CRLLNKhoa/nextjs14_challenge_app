import React from 'react'

export default function AlertComponent() {
  return (
    <div className='flex justify-center items-center my-4 text-red-500 bg-red-100 border border-red-500 py-2 rounded-lg'>
          <img src="/icons/notic.svg" className="h-4 w-4 mr-2 hidden lg:block" />      
          <h1>Vui lòng lưu lại sau mổi thao tác thay đổi dữ liệu!</h1>
    </div>
  )
}
