import React from 'react'

export default function AlertComponent() {
  return (
    <div className='flex justify-center items-center my-4 text-red-500'>
          <img src="/icons/notic.svg" className="h-4 w-4 mr-2" />      
          <h1>Vui lòng lưu lại sau mổi thao tác thay đổi dữ liệu!</h1>
    </div>
  )
}
