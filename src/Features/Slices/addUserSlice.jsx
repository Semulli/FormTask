import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    editingUser: null,
};

export const addUserSlice = createSlice({
    name: "addUser",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        editUser: (state, action) => {
            state.editingUser = action.payload;
        },
        updateUser: (state, action) => {
            state.users = state.users.map(user =>
                user.id === action.payload.id ? action.payload : user
            );
            state.editingUser = null;
        }
    },
});

export const { addUser, removeUser, editUser, updateUser } = addUserSlice.actions;

export default addUserSlice.reducer;
