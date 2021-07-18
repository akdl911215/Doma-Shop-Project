import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reportWebVitals from 'reportWebVitals';
import { UserService } from 'webapp/user/index';

const getUserSignin = async (signin) => {
    const response = await UserService.signin(signin);
    return response.data;
};
const getUserList = async (page) =>{
    const response = await UserService.list(page);
    return response.data;
}

export const signinPage = createAsyncThunk('users/signin', getUserSignin);
export const fetchPage = createAsyncThunk('users/list', getUserList);

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
            state.usersState = payload;
        },
        [fetchPage.fulfilled]: (state, { meta, payload}) => {
            state.pageResult = payload;
        }
    },
});

export const currentUser = (state) => state.users.usersState;
console.log('Reducer currenUser : ', currentUser);
export const { SigninPage, getLocalUser } = usersSlice.actions;
export default usersSlice.reducer;
