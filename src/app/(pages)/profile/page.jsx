import SkillBar from '@/components/SkillBar';
import TabsComponent from '@/components/TabsComponent';
// icon
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'

function profile() {
  return (
    <div className='khoaHoc '>
        <div className='title  bg-yellow-400 text-white p-10'>
            <h1 className='text-2xl font-semibold'>Thông Tin Cá Nhân </h1>
            <span className='text-sm'>Thông Tin Học Viên</span>
        </div>
       <div className='container flex gap-2'>
            <div className='avatar  h-screen w-[25%] flex flex-col gap-2 text-center'>
                <img src="https://i.pinimg.com/736x/85/1c/63/851c632044d7dda30effc733db7a825a.jpg" alt="" className='w-[150px] h-[150px] object-cover rounded-full mx-auto' />
                <h1 className='font-semibold'>Robert Nguyễn</h1>
                <span>Lập Trình Viên Frontend</span>
                <button className='text-white bg-primary_tailwind w-max p-2 mx-auto rounded-2xl'>Hồ sơ cá nhân</button>
            </div>
            <div className='info w-[70%]'>
              <TabsComponent items = {items}/>
            </div>
       </div>
        
    </div>
  )
}

export default profile;
const items = [
  {
    title:"Thông Tin Cá Nhân", 
    content: (
      <div>
        <div className='info flex '>
            <div className="left w-1/2 flex flex-col gap-3">
              <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>Email : </h1>
                <p>sugar@gmail.com</p>
              </div>
              <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>Họ và tên : </h1>
                <p>Nguyễn Sugar</p>
              </div>
              <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>Số điện thoại : </h1>
                <p>0353616182</p>
              </div>
            </div>
            <div className="right flex flex-col gap-3">
              <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>Tài khoản : </h1>
                <p>sugar baby</p>
              </div>
              <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>Nhóm : </h1>
                <p>GP01</p>
              </div>
              <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>Đối tượng : </h1>
                <p>Học viên</p>
              </div>
              <button className='w-max bg-yellow-400 text-white p-2'>CẬP NHẬT</button>
            </div>
        </div>
        <div className='skill'>
          <h1 className='py-3 text-2xl'>KỸ NĂNG CỦA TÔI</h1>
          <div className='flex'>
            <div className='left w-[60%] flex flex-col gap-2'>
              <SkillBar skill={"HTML"} level={9} background = {"orange"}/>
              <SkillBar skill={"CSS"} level={7} background = {"green"}/>
              <SkillBar skill={"JS"} level={8} background = {"yellow"}/>
              <SkillBar skill={"REACT"} level={10} background = {"blue"}/>
            </div>
            <div className="right  w-[40%] flex justify-between flex-wrap px-3  " >
                <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                  <AccessTimeFilledIcon className='my-auto'/>
                  <div className='text-base'>
                    <h1>Giờ học</h1>
                    <h1>80</h1>
                  </div>
                </div>
                <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                  <AutoAwesomeIcon className='my-auto'/>
                  <div className='text-base'>
                    <h1>Tổng điểm</h1>
                    <h1>80</h1>
                  </div>
                </div>
                <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                  <AutoStoriesIcon className='my-auto'/>
                  <div className='text-base'>
                    <h1>Buổi học</h1>
                    <h1>40</h1>
                  </div>
                </div>
                <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                  <CatchingPokemonIcon className='my-auto'/>
                  <div className='text-base'>
                    <h1>Cấp độ </h1>
                    <h1>Trung cấp</h1>
                  </div>
                </div>
                <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                  <CelebrationIcon className='my-auto'/>
                  <div className='text-base'>
                    <h1>Học Lực </h1>
                    <h1>Khá</h1>
                  </div>
                </div>

                <div className="flex gap-2 h-max w-[45%] bg-primary_tailwind text-white py-3 px-4 rounded-xl justify-center"> 
                  <ColorLensIcon className='my-auto'/>
                  <div className='text-base'>
                    <h1>Bài tập  </h1>
                    <h1>100</h1>
                  </div>
                </div>
                
            </div>
          </div>
         
          
        </div>
     </div>
    )
  },
  {
    title:"Khóa Hóc", 
    content: (
      <div className=''>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold'>KHÓA HỌC CỦA TÔI </h1>
            <div className="search w-max focus-within:border-2 focus-within:border-[#41b294]  p-1 rounded">
                <input type="text" placeholder="Tìm kiếm" className='outline-none ' />
                <SearchIcon/>
            </div>
        </div>
      </div>
    )
  },
 
]