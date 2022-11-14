import { createSlice } from '@reduxjs/toolkit';

const initObj = {
    mode: null,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initObj,
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload;
        },
    },
    extraReducers: {},
});

export const rootMode = (state) => state.todo.mode;
export const { changeMode } = todoSlice.actions;
export default todoSlice.reducer;
