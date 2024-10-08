"use client"
import React,{ useState } from "react";
const FlayoutLink = (props) => {
    const [open,setOpen] = useState(false)
   const {title,href,FlyoutContent,icon,datas} = props
   const showFlyout = open && FlyoutContent;
    return (
      <div className='relative h-fit w-fit' onMouseEnter={() =>setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <div className="flex items-center gap-1"> 
            {icon ? icon : ""}
            <a href={href} className='relative text-black'>
        
            {title}
            <span style={{transform: showFlyout ? "scaleX(1)" : "scaleX(0)"}} className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-in-out'></span>
            </a>
        </div>
        
        {showFlyout && (
            <div className="menu absolute   left-1/2 -translate-x-1/2 top-8  bg-slate-400  animate-dropdown  transition duration-500">
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
                <div className="shadow-xl flex flex-col w-max   ">
                    <a href="" className="bg-red-400 px-3 hover:bg-green-300 ">Lập trình</a>
                    <a href="">Lập trình</a>
                    <a href="">Lập trình</a>
                    <a href="">Lập trình</a>
                </div>
            </div>
        )}
      </div>
    )
  }


  export default FlayoutLink