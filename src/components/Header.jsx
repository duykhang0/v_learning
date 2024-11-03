import React from 'react'
// Icon material
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FlayoutLink from './FlayoutLink';

function Header() {
  const datas = {
    danhmuc: [{
      title: "LẬP TRÌNH BACKEND",
      href: 'BackEnd'
    },{
      title:"THIẾT KẾ WEB",
      href: "Design"
    },{
      title:"LẬP TRÌNH DI ĐỘNG",
      href: "DiDong"
    },{
      title:"LẬP TRÌNH FRONT END",
      href: "FrontEnd"
    },{
      title:"LẬP TRÌNH FULLSTACK",
      href: "FullStack"
    },{
      title:"TƯ DUY LẬP TRÌNH",
      href: "TuDuy"
    }],
    suKien: [
      {
        title: "SỰ KIỆN SALE CUỐI NĂM",
        href: "#"
      },
      {
        title : "SỰ KIỆN GIÁNG SINH ",
        href :"#"
      },
      {
        title: "SỰ KIỆN NOEL",
        href: "#"
      },]
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

              <FlayoutLink href="/" title="Danh Mục" FlyoutContent icon={<MenuIcon/>} childrenMenu={datas.danhmuc}/>
              <FlayoutLink href="/khoahoc" title="Khóa Học" FlyoutContent/>
              <FlayoutLink href="/blog" title="Blog" FlyoutContent/>
              <FlayoutLink href="/sukien" title="Sự Kiện" FlyoutContent childrenMenu={datas.suKien}/>
              <FlayoutLink href="thongtin" title="Thông Tin" FlyoutContent/>

             
            </div>
            <button className='bg-[#f6ba35] p-2 text-white text-sm font-medium hover:scale-95 transiton duration-300'>ĐĂNG NHẬP</button>
        </div>
    </div>
  )
}



export default Header