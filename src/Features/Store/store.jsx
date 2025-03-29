import {configureStore} from "@reduxjs/toolkit";
import addUserReducer from "../Slices/addUserSlice.jsx"

export const store = configureStore({
    reducer: {
        addUser: addUserReducer
    }
})