import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/reducers/productReducer"

const store = configureStore({
    reducer:{
        productReducer : productReducer
    }
})

export default store;