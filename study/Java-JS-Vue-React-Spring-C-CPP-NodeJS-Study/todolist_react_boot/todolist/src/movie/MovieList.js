import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovie from './movieSlice';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const MovieList = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const movieList = useSelector((state) => state.MovieSlice);

    useEffect(() => {
        dispatch(fetchMovie());
    }, []);

    console.log(movieList);

    alert('무비 리스트 실행되나요');
    // const list = movieList.map((movie, idx) => {
    //     return (
    //         <>
    //             <tr key={idx}>
    //                 <td>{movie}</td>
    //                 <td>{movie}</td>
    //                 <td>{movie}</td>
    //                 <td>{movie}</td>
    //                 <td>{movie}</td>
    //                 <td>{movie}</td>
    //                 <td>{movie}</td>
    //                 <td>{movie}</td>
    //             </tr>
    //         </>
    //     );
    // });

    return <div>{/* <ul>{list}</ul> */}</div>;
};

export default MovieList;
