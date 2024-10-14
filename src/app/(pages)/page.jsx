// Import icon material
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
export default function Home() {
  return (
   <div className="home mb-3">
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
        <div className="infoCourseBox ">
            <div className="container  grid grid-cols-3 gap-4">
              <div className="bg-blue-500 row-span-2 p-3 text-white flex flex-col gap-2 relative box_glass">
                <h1 className='text-2xl font-semibold'>KHÓA HỌC</h1>
                <p><span className='font-semibold'>Học qua dự án thực tế</span>, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</p>
                <span className='flex gap-2'><CheckIcon/>Hơn 1000 bài tập và dự án thực tế</span>
                <span className='flex gap-2'><CheckIcon/>Công nghệ cập nhật mới nhất</span>
                <span className='flex gap-2'><CheckIcon/>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
                <span className='flex gap-2'><CheckIcon/>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
                <span className='flex gap-2'><CheckIcon/>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</span>
                <span className='flex gap-2'><CheckIcon/>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</span>
                <img src="" alt="" />
              </div>
              <div className="bg-red-500 p-3 text-white flex flex-col gap-2 relative box_glass">
                <h1 className='text-2xl font-semibold'>LỘ TRÌNH PHÙ HỢP</h1>
                <span className='flex gap-2'><CheckIcon/>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span>
                <span className='flex gap-2'><CheckIcon/>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
                <span className='flex gap-2'><CheckIcon/>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</span>
              </div>
              <div className="bg-green-500 p-3 text-white flex flex-col gap-2 relative box_glass">
                <h1 className='text-2xl font-semibold'>HỆ THỐNG HỌC TẬP</h1>
                <span className='flex gap-2'><CheckIcon/>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</span>
                <span className='flex gap-2'><CheckIcon/>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span>
                <span className='flex gap-2'><CheckIcon/>Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</span>

              </div>
              <div className="bg-yellow-500 p-3 text-white flex flex-col gap-2 relative box_glass">
                <h1 className='text-2xl font-semibold'>GIẢNG VIÊN</h1>
                <span className='flex gap-2'><CheckIcon/>Tương tác cùng mentor và giảng viên qua phần thảo luận</span>
                <span className='flex gap-2'><CheckIcon/>Review code và đưa ra các nhận xét góp ý</span>
                <span className='flex gap-2'><CheckIcon/>Chấm điểm tương tác thảo luận giữa các học viên</span>
              </div>
              <div className="bg-orange-500 p-3 text-white  flex flex-col gap-2 relative box_glass">
                <h1 className='text-2xl font-semibold'>CHỨNG NHẬN</h1>
                <span className='flex gap-2'><CheckIcon/>Chấm bài và có thể vấn đáp trực tuyến để review</span>
                <span className='flex gap-2'><CheckIcon/>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</span>
                <span className='flex gap-2'><CheckIcon/>Kết nối CV của bạn đến với các đối tác của V learning</span>
              </div>
            </div>
        </div>
        <div className='khoa_hoc_pho_bien container'>
            <h1 className='my-10 text-yellow-500 font-semibold text-lg'>Khóa học phổ biến</h1>
            <div className='container_box'>
                <div className='box w-[280px] shadow-box relative hover:-translate-y-1 transition duration-300  '>
                    <img src="https://i.pinimg.com/control/564x/7e/84/b3/7e84b305d081b8669dffbb84b4b4efca.jpg" alt="" className='h-[185px] w-full object-contain' />
                    <div className='px-3'>
                    <h1 className='title text-base font-semibold my-4'>Lập trình hiện đang là xu hướng của cả thế giới</h1>
                    <div className='author flex items-center gap-2 text-gray-500 mb-4'>
                        <img src="https://i.pinimg.com/control/564x/94/47/36/9447365f451b94fd53c2ac2a91d8c39f.jpg" alt="avatar" className='w-[40px] h-[40px] object-cover rounded-[50%]'/>
                        <span className='name'>name</span>
                    </div>
                    <div className='price_rating flex justify-between items-center'>
                        <div className='price'>
                            <p className='original_price line-through text-gray-400'>800</p>
                            <p className='price_reduced text-primary_tailwind font-semibold'>400</p>
                        </div>
                        <div className='rating flex items-center text-yellow-400'>
                            <StarIcon/>4.9
                            <span className='text-gray-400'>(7840)</span>
                        </div>
                    </div>
                    </div>
                    <h1 className='bg-primary_tailwind text-white w-max p-2 absolute left-0 top-[45%]'>Javascript</h1>
                </div>
            </div>
        </div>
        <div className='khoa_hoc_tham_khao container'>
            <h1 className='my-10 font-semibold text-lg' >Khóa học tham khảo</h1>
            <div className='container_box'>
                <div className='box w-[280px] shadow-box relative hover:-translate-y-1 transition duration-300  '>
                    <img src="https://i.pinimg.com/control/564x/7e/84/b3/7e84b305d081b8669dffbb84b4b4efca.jpg" alt="" className='h-[185px] w-full object-contain' />
                    <div className='px-3'>
                    <h1 className='title text-base font-semibold my-3'>Lập trình hiện đang là xu hướng của cả thế giới</h1>
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
                </div>
            </div>
        </div>
   </div>
  );
}

