"use client"
import KhoaHocLienQuan from '@/components/KhoaHocLienQuan';
import { getKhoaHocTheoDanhMucThunk } from '@/redux/reducers/khoaHocReducer';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function DanhMucKhoaHoc({params}) {
  const searchParams = useSearchParams();
  const danhmuc = searchParams.get('danhmuc');
    // const {danhmuc} = useParams();
    console.log("🚀 ~ danhmuc:", danhmuc)
    
    const dispatch = useDispatch();
    const {khoaHocTheoDanhMuc} = useSelector(state => state.khoaHocReducer);
    console.log("🚀 ~ khoaHocTheoDanhMuc:", khoaHocTheoDanhMuc)

    const getDanhMucTheoKhoaHoc =  async (danhmuc) => {
        dispatch(getKhoaHocTheoDanhMucThunk(danhmuc))
    }
    useEffect(() => {
      getDanhMucTheoKhoaHoc(danhmuc)
    },[])
  return (
    <div className='danhMucKhoaHoc'>
        <div className='title  bg-yellow-400 text-white p-10'>
            <h1 className='text-2xl font-semibold'>KHÓA HỌC THEO DANH MỤC</h1>
            <span className='text-sm'>HÃY CHỌN KHÓA HỌC MONG MUỐN </span>
           
        </div>
        <KhoaHocLienQuan title={danhmuc} data={khoaHocTheoDanhMuc}/>
    </div>
  )
}

export default DanhMucKhoaHoc