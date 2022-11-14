import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getFetchMovie = async (moviesResult) => {
    alert('moviesResult ::::::: ', moviesResult);
    const res = await axios.get('http://localhost:8080/getMovies');
    console.log('moviesResult ::::::: ', moviesResult);
    return res.data;
};
const fetchMovie = createAsyncThunk('movie/fetch', getFetchMovie);
const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState: {
        movies: [],
    },
    reducers: {},
    extraReducers: {
        [fetchMovie.fulfilled]: (state, action) => {
            //console.log(action.payload.Movies.Items[0].Items)
            alert('페이로드 state.movies : ', state.movies);
            state.movies = action.payload.Movies.Items[0].Items;
        },
    },
});
// const moviesResult = (state) => state.movieSlice;
// export { moviesResult };

export default movieSlice;
