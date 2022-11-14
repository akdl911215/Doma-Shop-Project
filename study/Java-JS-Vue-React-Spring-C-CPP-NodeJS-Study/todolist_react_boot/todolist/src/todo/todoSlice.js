import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getServerPage = async (page) => {
    console.log('getServerPage..' + page);
    const response = await axios.get('http://localhost:8080/todo/pages?page=' + page);
    return response.data;
};

export const fetchPage = createAsyncThunk('todo/fethPage', getServerPage);

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            statrt: 1,
            end: 1,
            prev: false,
            next: false,
        },
    },
    reducers: {},
    extraReducers: {
        [fetchPage.fulfilled]: (state, { meta, payload }) => {
            console.log(payload);
            state.pageResult = payload;
        },
    },
});

export default todoSlice.reducer;
