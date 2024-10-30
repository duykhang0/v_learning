import { configureStore } from "@reduxjs/toolkit";
import khoaHocReducer from "@/redux/reducers/khoaHocReducer";
import nguoiDungReducer from "@/redux/reducers/nguoiDungReducer"
const store = configureStore({
    reducer:{
        khoaHocReducer : khoaHocReducer,
        nguoiDungReducer:nguoiDungReducer
    }
})

export default store;