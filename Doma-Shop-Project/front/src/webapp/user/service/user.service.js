import axios from 'axios';

const SERVER = 'http://localhost:8080';

const withdrawl = (withdrawlObj) => {
    alert('넘어오니?');
    return axios({
        url: `${SERVER}/users/withdrawal`,
        method: 'put',
        data: {
            userId: withdrawlObj.userId,
            username: withdrawlObj.username,
            password: withdrawlObj.password,
            name: withdrawlObj.name,
            companyName: withdrawlObj.companyName,
            companyNumber: withdrawlObj.companyNumber,
            address: withdrawlObj.address,
            email: withdrawlObj.email,
            number: withdrawlObj.number, //일반전화
            phoneNumber: withdrawlObj.phoneNumber,
        },
        headers: { Authorization: 'JWT fefeae...' },
    });
};

const mypage = (mypageObj) => {
    return axios({
        url: `${SERVER}/users/mypage`,
        method: 'put',
        data: {
            userId: mypageObj.userId,
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

export default { signin, list, mypage, withdrawl };
