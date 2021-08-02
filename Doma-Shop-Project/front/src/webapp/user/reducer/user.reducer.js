import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reportWebVitals from 'reportWebVitals';
import { UserService } from 'webapp/user/index';

const getUserSignin = async (signin) => {
    const response = await UserService.signin(signin);
    console.log('getUserSignin response : ', response);
    return response.data;
    console.log('getUserSignin response.data : ', response.data);
};
const getUserList = async (page) => {
    const response = await UserService.list(page);
    return response.data;
};
const getMypage = async (mypage) => {
    const response = await UserService.mypage(mypage);
    return response.data;
};

export const signinPage = createAsyncThunk('users/signin', getUserSignin);
export const fetchPage = createAsyncThunk('users/list', getUserList);
export const reviseMypage = createAsyncThunk('users/mypage', getMypage);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersState: {
            userId: '',
            username: '',
            password: '',
            name: '',
            companyName: '',
            companyNumber: '',
            address: '',
            email: '',
            number: '',
            phoneNumber: '',
        },
        pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            start: 1,
            end: 1,
            prev: false,
            next: false,
        },
        type: '',
        keyword: '',
    },
    reducers: {
        getLocalUser: (state, action) => {
            const userReducer = state.users.usersState;
            console.log('userReducer ::: ', userReducer);
        },
    },
    extraReducers: {
        [signinPage.fulfilled]: (state, { meta, payload }) => {
            console.log('signinPage state :: ', state);
            console.log('signinPage state.usersState :: ', state.usersState);
            console.log('signinPage payload :: ', payload);
            state.usersState = payload;
        },
        [fetchPage.fulfilled]: (state, { meta, payload }) => {
            state.pageResult = payload;
        },
        [reviseMypage.fulfilled]: (state, { meta, payload }) => {
            state.usersState = payload;
        },
    },
});

export const currentUser = (state) => state.users.usersState;
console.log('Reducer currenUser : ', currentUser);
export const { SigninPage, getLocalUser, ReviseMypage } = usersSlice.actions;
export default usersSlice.reducer;
