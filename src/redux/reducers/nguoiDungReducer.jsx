import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import axios from "axios";


const initialState = {
    danhSachNguoiDung : []
}
const nguoiDungReducer = createSlice({
    name: "nguoiDungReducer",
    initialState,
    reducers: {
        setDanhSachNguoiDung : (state,action) => {
            state.danhSachNguoiDung = action.payload
        }
    }
});

export default nguoiDungReducer.reducer;
export const {setDanhSachNguoiDung} = nguoiDungReducer.actions;

// redux thunk
export const getDanhSachNguoiDungThunk = () => {
    return async(dispatch) => {
        const res = await axios({
            method: "GET",
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
            }
        })
        dispatch(setDanhSachNguoiDung(res.data))
    }
}

export const dangKyNguoiDung = (value) => {
    return async(dispatch) => {
        try{
            const res = await axios({
                method: "POST",
                url : 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                headers: {
                    'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
                },
                data: value
            });
            return res
        }catch (res){
            throw res
        }
        
        
        
    }
}
export const dangNhapNguoiDung = (value) => {
    console.log(value)
    return async (dispatch) => {
        try{
            const res = await axios({
                method: "POST",
                url : 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                headers: {
                    'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI"
                },
                data: value
            })
        }catch(res){

        }
    }
}