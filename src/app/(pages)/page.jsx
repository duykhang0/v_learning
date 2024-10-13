import Image from "next/image";
export default function Home() {
  return (
   <div className="home ">
        <div className='carousel container h-screen flex items-center justify-between'>
            <div className='sloganBox pl-20 flex flex-col gap-2 relative'>
                <h1 className="text-6xl font-semibold">Chào mừng </h1>
                <h1 className="text-6xl font-semibold">đến với môi trường</h1>
                <h1 className="text-6xl font-semibold w-max  overflow-hidden whitespace-nowrap tracking-wide relative py-1 animate-typewriter text-primary_tailwind">
                  <span className="absolute right-0 border-r-4 border-primary_tailwind z-10 w-1 h-full animate-caret"></span>
                  <span className="font-extrabold">V</span>learning.
                </h1>
                <img src="https://demo2.cybersoft.edu.vn/static/media/paper_plane.93dfdbf5.png " alt="" className="w-[30%] absolute right-[5%] -top-[40%] " />
                <button className="mt-4 w-max bg-sub text-white px-3 py-2">BẮT ĐẦU NÀO</button>
            </div>
            <div className='imageCarousel relative'>
                <img src="https://demo2.cybersoft.edu.vn/static/media/slider2.f170197b.png" alt="" className="w-[678px]"/>
                <img src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png" alt="" className="w-[15%] absolute top-[10%] animate-cloud-move" />
                <img src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png" alt="" className="w-[15%] absolute top-[30%] left-[10%] animate-cloud-move delay-[1000]" />
                <img src="https://demo2.cybersoft.edu.vn/static/media/clouds.15eb556c.png" alt="" className="w-[15%] absolute top-[35%] animate-cloud-move" />
                <img src="https://demo2.cybersoft.edu.vn/static/media/message_slider.6835c478.png" alt="" className="w-[15%] absolute top-[42%] left-[40%]   animate-swing"/>
            </div>
        </div>
   </div>
  );
}
