import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    danhSachKhoaHoc : [],
    chiTietKhoaHoc : {}
}

const khoaHocReducer = createSlice({
    name: "khoaHocReducer",
    initialState,
    reducers:{
        setDanhSachKhoaHoc: (state,action) => {
            state.danhSachKhoaHoc = action.payload
        },
        setChiTietKhoaHoc : (state,action) => {
            state.chiTietKhoaHoc = action.payload
        }
    }
})

export const {setDanhSachKhoaHoc,setChiTietKhoaHoc} = khoaHocReducer.actions;
export default khoaHocReducer.reducer


///-----------action thunk --------------

// lấy danh sách khóa học bằng API 
export const getDanhSachKhoaHocThunk = () => {
    return async (dispatch) => {
        const res = await axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        })
        dispatch(setDanhSachKhoaHoc(res.data))
    }
}
export const getChiTietKhoaHocThunk = (id) => {
    return async (dispatch) => {
        const res = await axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        })
       const data = res.data.find(item => item.maKhoaHoc === id)
       dispatch(setChiTietKhoaHoc(data))
       
    }
}