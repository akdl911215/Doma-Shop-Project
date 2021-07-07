import axios from 'axios';

const SERVER = 'http://localhost:8080';

const signin = (signin) => {
    return axios({
        url: `${SERVER}/users/signin`,
        method: 'post',
        data: {
            username: signin.username,
            password: signin.password,
        },
        headers: { Authorization: 'JWT fefege...' },
    });
};

export default { signin };
