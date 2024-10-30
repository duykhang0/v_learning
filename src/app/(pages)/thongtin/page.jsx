import React from 'react'

const thongtin = () => {
  return (
    <div className="container">
            <div className="carouThongTin ">
                    <div className="bgThongTin position-relative">
                        <img src="https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png" alt="" />
                    </div>
                    <div className="contentThongTin position-absolute text-success top-50 start-50 translate-middle text-align-center">
                        <p className='text-info fw-medium fs-5'>V LEARNING LÀ VUI</p>
                        <h6 className='text-warning fs-2 fw-semibold'>Cùng nhau khám phá nhưng điều mới mẻ</h6>
                        <p className='text-light fs-5'>Học đi đôi với hành</p>
                    </div>
            </div>
    </div>
  )
}

export default thongtin