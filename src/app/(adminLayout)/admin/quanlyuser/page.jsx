"use client"
import React, { useEffect } from 'react'




import TableDanhSachNguoiDung from './TableDanhSachNguoiDung';
import ThemUser from './ThemUser';
function page() {
 
  return (
    <div className='quanly_khoahoc p-4 '>
        <div className='header flex justify-between'>
            <h1 className='text-2xl font-semibold'>Quản lý User</h1>
            <ThemUser/>
        </div>
        <TableDanhSachNguoiDung/>
        
    </div>
  )
}

export default page