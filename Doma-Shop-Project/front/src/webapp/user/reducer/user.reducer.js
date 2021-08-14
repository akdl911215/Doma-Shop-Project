import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reportWebVitals from 'reportWebVitals';
import { UserService } from 'webapp/user/index';

const getUserSignin = async (signin) => {
    const response = await UserService.signin(signin);
    return response.data;
};
const getUserList = async (page) => {
    const response = await UserService.list(page);
    return response.data;
};
const getMypage = async (mypage) => {
    const response = await UserService.mypage(mypage);
    return response.data;
};
const getWithdrawal = async (withdrawal) => {
    alert('여긴2');
    const response = await UserService.withdrawal(withdrawal);
    return response.data;
};

export const signinPage = createAsyncThunk('users/signin', getUserSignin);
export const fetchPage = createAsyncThunk('users/list', getUserList);
export const reviseMypage = createAsyncThunk('users/mypage', getMypage);
export const userWithdrawalPage = createAsyncThunk('users/withdrawal', getWithdrawal);

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
        getLocalUserLogin: (state, action) => {
            if (state.usersState.username !== '') {
                return;
            }

            const user = JSON.parse(window.localStorage.getItem('user'));
            state.usersState = user;
        },
    },
    extraReducers: {
        [signinPage.fulfilled]: (state, { meta, payload }) => {
            console.log('signinPage state :: ', state);
            console.log('signinPage state.usersState :: ', state.usersState);
            console.log('signinPage payload :: ', payload);
            state.usersState = payload;

            // JSON.stringify() : JavaScript 값이나 객체를 JSON 문자열로 변환
            console.log("window.localStorage.setItem('user', JSON.stringify(payload)) : ", window.localStorage.setItem('user', JSON.stringify(payload)));
        },
        [fetchPage.fulfilled]: (state, { meta, payload }) => {
            state.pageResult = payload;
        },
        [reviseMypage.fulfilled]: (state, { meta, payload }) => {
            state.usersState = payload;
        },
        [userWithdrawalPage.fulfilled]: (state, { meta, payload }) => {
            alert('여긴?1');
            state.usersState = payload;
            console.log('userWithdrawalPage state.usersState ::::: ', state.usersState);
        },
    },
});

export const currentUser = (state) => state.users.usersState;
console.log('Reducer currenUser : ', currentUser);
export const { SigninPage, getLocalUser, ReviseMypage, getLocalUserLogin, UserWithdrawalPage } = usersSlice.actions;
export default usersSlice.reducer;
