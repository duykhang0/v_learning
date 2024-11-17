"use client"
import React, { useEffect, useRef, useState } from 'react'

function TabsComponent({items}) {
    const firstBtnRef = useRef();
    const [selectedTab,setSeletedTab] = useState(0);
    useEffect(() => {
       firstBtnRef.current.focus();  
    },[])
  return (
    <div className=' flex justify-center items-center '>
        <div className=' flex flex-col gap-y-2 w-full  '>
            <div className=' flex justify-between items-center gap-x-2 font-bold text-white  w-max' >
                {items.map((item,index) => (
                    <button key={index} className={`outline-none border-none w-full p-2  text-black text-center ${selectedTab === index ? "ring-2 bg-primary_tailwind text-white" : ""} text-base w-max`} ref={index === 0 ? firstBtnRef : null}
                    onClick={() => setSeletedTab(index)}
                    >{item.title}</button>
                ))}
            </div>
            <div className='bg-white p-2 rounded-xl'>
                {
                    items.map((item,index) => (
                        <div className={`${selectedTab === index ? "" : "hidden"}`}>
                            {item.content}
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default TabsComponent