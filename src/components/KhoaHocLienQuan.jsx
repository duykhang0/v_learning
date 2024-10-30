import React, { useState } from 'react'
// Import icon material

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
function KhoaHocLienQuan(props) {
    const {title,data} = props;
    const [open,setOpen] = useState(false)
  return (
    <div className='khoa_hoc_tham_khao container'>
            <h1 className='my-10 font-semibold text-lg' >{title}</h1>
            <div className='container_box flex justify-between relative' >
                {data.map((item, index) => {
                    
                   return (
                    <div className='box w-[280px] shadow-box relative hover:-translate-y-1 transition duration-300 cursor-pointer group' key={index}>
                        <img src={item.hinhAnh} alt="" className='h-[185px] w-full object-contain' />
                        <div className='px-3'>
                        <h1 className='title text-base font-semibold my-3'>{item.tenKhoaHoc}</h1>
                        <div className='time flex justify-between mb-4'>
                            <div className='flex items-center gap-1'><AccessTimeIcon/>8 giờ</div>
                            <div className='flex items-center gap-1'><CalendarMonthIcon/>4 tuần</div>
                            <div className='flex items-center gap-1'><SignalCellularAltIcon/>tất cả</div>
                        </div>
                        <div className='author_price flex items-center justify-between py-3'>
                            <div className="author flex items-center gap-1 text-gray-400">
                            <img src="https://i.pinimg.com/control/564x/94/47/36/9447365f451b94fd53c2ac2a91d8c39f.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-[50%]' />My name
                            </div>
                            <div className='price relative'>
                                <h1 className='text-gray-400 line-through text-sm'>800.000 đ</h1>
                                <h1 className='text-primary_tailwind font-semibold pr-4 '>400.000 đ</h1>
                                <LocalOfferIcon className='absolute top-[50%] -right-[10px] text-red-500'/>
                            </div>

                        </div>
                        </div>
                        <h1 className='bg-primary_tailwind text-white w-max p-2 absolute left-0 top-[45%]'>Javascript</h1>
                        <h1 className='bg-red-500 text-white w-max p-2 absolute top-0 -left-[10px] custom-after custom-before'>Yêu thích</h1>
                            {
                            <div className={`absolute  bg-white top-0  group-hover:opacity-100 group-hover:w-[300px] group-hover:h-full`}>
                                
                            </div>
                            }
                    </div>
                    )
                    })}
                   
                     
            </div>
           
            </div>
  )
}

export default KhoaHocLienQuan