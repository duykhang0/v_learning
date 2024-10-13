import React from 'react'
// Icon material
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FlayoutLink from './FlayoutLink';

function Header() {
  const datas = {
    danhmuc: ["LẬP TRÌNH BACKEND","THIẾT KẾ WEB","LẬP TRÌNH DI ĐỘNG","LẬP TRÌNH FRONT END","LẬP TRÌNH FULLSTACK","TƯ DUY LẬP TRÌNH"],
    suKien: ["SỰ KIỆN SALE CUỐI NĂM","SỰ KIỆN GIÁNG SINH ","SỰ KIỆN NOEL"]
  }
  return (
    <div className="header ">
        <div className="container flex items-center justify-between">
            <div className="logo flex items-center gap-5">
                <img src="https://demo2.cybersoft.edu.vn/logo.png" alt="logo" width={250} />
                <div className="search focus-within:border-2 focus-within:border-[#41b294]  p-1 rounded">
                    <input type="text" placeholder="Tìm kiếm" className='outline-none ' />
                    <SearchIcon/>
                </div>
            </div>
            <div className="menu flex  gap-4 font-semibold text-base">

              <FlayoutLink href="#" title="Danh Mục" FlyoutContent icon={<MenuIcon/>} childrenMenu={datas.danhmuc}/>
              <FlayoutLink href="#" title="Khóa Học" FlyoutContent/>
              <FlayoutLink href="#" title="Blog" FlyoutContent/>
              <FlayoutLink href="#" title="Sự Kiện" FlyoutContent childrenMenu={datas.suKien}/>
              <FlayoutLink href="#" title="Thông Tin" FlyoutContent/>

             
            </div>
            <button className='bg-[#f6ba35] p-2 text-white text-sm font-medium hover:scale-95 transiton duration-300'>ĐĂNG NHẬP</button>
        </div>
    </div>
  )
}



export default Header