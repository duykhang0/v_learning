import React from 'react'
// Icon material
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FlayoutLink from './FlayoutLink';

function Header() {
  const datas = {
    danhmuc: [{
      title: "LẬP TRÌNH BACKEND",
      href: 'backend'
    },{
      title:"THIẾT KẾ WEB",
      href: "design"
    },{
      title:"LẬP TRÌNH DI ĐỘNG",
      href: "didong"
    },{
      title:"LẬP TRÌNH FRONT END",
      href: "frontend"
    },{
      title:"LẬP TRÌNH FULLSTACK",
      href: "fullstack"
    },{
      title:"TƯ DUY LẬP TRÌNH",
      href: "tuduy"
    }],
    suKien: ["SỰ KIỆN SALE CUỐI NĂM","SỰ KIỆN GIÁNG SINH ","SỰ KIỆN NOEL"]
  }
  return (
    <div className="header ">
        <div className="container flex items-center justify-between py-3">
            <div className="logo flex items-center gap-5">
                <img src="https://demo2.cybersoft.edu.vn/logo.png" alt="logo" width={250} />
                <div className="search focus-within:border-2 focus-within:border-[#41b294]  p-1 rounded">
                    <input type="text" placeholder="Tìm kiếm" className='outline-none ' />
                    <SearchIcon/>
                </div>
            </div>
            <div className="menu flex  gap-4 font-semibold text-base">

<<<<<<< HEAD
              <FlayoutLink href="/" title="Danh Mục" FlyoutContent icon={<MenuIcon/>} childrenMenu={datas.danhmuc}/>
              <FlayoutLink href="/khoahoc" title="Khóa Học" FlyoutContent/>
              <FlayoutLink href="/blog" title="Blog" FlyoutContent/>
              <FlayoutLink href="/sukien" title="Sự Kiện" FlyoutContent childrenMenu={datas.suKien}/>
              <FlayoutLink href="thongtin" title="Thông Tin" FlyoutContent/>
=======
              <FlayoutLink href="#" title="Danh Mục" FlyoutContent icon={<MenuIcon/>} childrenMenu={datas.danhmuc}/>
              <FlayoutLink href="#" title="Khóa Học" FlyoutContent/>
              <FlayoutLink href="#" title="Blog" FlyoutContent/>
              <FlayoutLink href="/sukien" title="Sự Kiện" FlyoutContent childrenMenu={datas.suKien}/>
              <FlayoutLink href="#" title="Thông Tin" FlyoutContent/>
>>>>>>> e8a64057bb58bd0f331ad0ad9b14d917129cb8d0

             
            </div>
            <button className='bg-[#f6ba35] p-2 text-white text-sm font-medium hover:scale-95 transiton duration-300'>ĐĂNG NHẬP</button>
        </div>
    </div>
  )
}



export default Header