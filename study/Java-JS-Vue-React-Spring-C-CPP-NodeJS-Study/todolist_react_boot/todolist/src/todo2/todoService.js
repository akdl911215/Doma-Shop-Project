import axios from 'axios';

const baseURL = 'http://localhost:8080/todo/';

export const fetchPage = async (cri) => {
    const response = await axios.get(baseURL + 'pages?' + 'page=' + cri.page + '&size=' + cri.size + '&type=' + cri.type + '&keyword=' + cri.keyword);

    return response.data;
};

export const fetchRead = async (tno) => {
    const response = await axios.get(baseURL + tno);

    return response.data;
};

export const registerTodo = async (todo) => {
    const response = await axios.post(baseURL, todo);

    return response.data;
};

export const register = async (todo) => {
    const response = await axios.post(baseURL, todo)

    return response.data
}

export const remove = async (tno) => {
    const response = await axios.delete(baseURL, tno, { data: { tno: tno } });

    return response.data;
};

export const modify = async (todo) => {
    const response = await axios.put(baseURL + todo.tno, todo);
};
