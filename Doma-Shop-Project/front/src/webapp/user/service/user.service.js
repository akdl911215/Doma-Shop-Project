import axios from 'axios';

const SERVER = 'http://localhost:8080';

const mypage = (mypageObj) => {
    return axios({
        url: `${SERVER}/users/mypage`,
        method: 'put',
        data: {
            username: mypageObj.username,
            password: mypageObj.password,
            name: mypageObj.name,
            companyName: mypageObj.companyName,
            companyNumber: mypageObj.companyNumber,
            address: mypageObj.address,
            email: mypageObj.email,
            number: mypageObj.number, //일반전화
            phoneNumber: mypageObj.phoneNumber,
        },
        headers: { Authorization: 'JWT fefeae...' },
    });
};

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

const list = (page) => {
    const str = 'page=' + (!page.page ? 1 : page.page) + '&type=' + (page.type ? page.type : '') + '&keyword=' + (page.keyword ? page.keyword : '');
    return axios.get(`${SERVER}/users/list/pages?` + str);
};

export default { signin, list, mypage };
