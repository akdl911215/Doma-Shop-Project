import React from 'react';
import { useHistory } from 'react-router-dom';

const ExChangePage = () => {
    
    const history = useHistory();
    const changePage = () => {
        history.push({
            pathname: "/success",
            state: {
                title: "비밀번호 찾기 완료",
                body: "회원님의 비밀번호가 성공적 변경"
            }
        })
    }
    
    return <></>
}
export default ExChangePage 