import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reportWebVitals from 'reportWebVitals';
import { UserService } from 'webapp/user/index';

const getUserSignin = async (signin) => {
    const response = await UserService.signin(signin);
    return response.data;
};

export const signinPage = createAsyncThunk('users/signin', getUserSignin);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            start: 1,
            end: 1,
            prev: false,
            next: false,
        },
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
    },
    reducers: {},
    extraReducers: {
        [signinPage.fulfilled]: (state, { meta, payload }) => {
            state.usersState = payload;
        },
    },
});

export const { SigninPage } = usersSlice.actions;
export default usersSlice.reducer;
