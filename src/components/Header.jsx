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

              <FlayoutLink href="#" title="Danh Mục" FlyoutContent icon={<MenuIcon/>} datas={datas}/>
              <FlayoutLink href="#" title="Khóa Học" />
              <a href="#">Blog</a>
              <a href="#">Sự Kiện</a>
              <a href="#">Thông Tin</a>
            </div>
            <button className='bg-[#f6ba35] p-2 text-white text-sm font-medium hover:scale-95 transiton duration-300'>ĐĂNG NHẬP</button>
        </div>
    </div>
  )
}


// drop down menu
// const FlayoutLink = (props) => {
//   const [open,setOpen] = useState(false)
//  const {title,href} = props
//   return (
//     <div className='relative h-fit w-fit' onMouseEnter={() =>setOpen(true)} onMouseLeave={() => setOpen(false)}>
//       <a href={href} className='relative text-black'>
//         {title}
//         <span style={{transform:open ? "scaleX(1)" : "scaleX(0)"}} className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-in-out'></span>
//       </a>
//     </div>
//   )
// }
export default Header