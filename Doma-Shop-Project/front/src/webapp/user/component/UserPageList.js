import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage } from 'webapp/user/reducer/user.reducer';
import UserPageListBtn from './UserPageListBtn';

const UserPageList = () => {
    const dispatch = useDispatch();
    const pageResult = useSelector((state) => state.users.pageResult);
    console.log('pageResult : ', pageResult);
    const type = useSelector((state) => state.users.type);
    console.log('type : ', type);
    const keyword = useSelector((state) => state.users.keyword);
    console.log('keyword : ', keyword);
    const page = pageResult.page;
    console.log('page : ', page);

    useEffect(() => {
        const param = { type: type, keyword: keyword, page: page };
        dispatch(fetchPage(param));
    }, []);

    return (
        <>
            <div>
                <table className="table table-striped table-borderd">
                    <table>
                        <thead style={{ textAlign: 'center' }}>
                            <th>유저넘버</th>
                            <th>아이디</th>
                            <th>비밀번호</th>
                            <th>이름</th>
                            <th>회사명</th>
                            <th>사업자번호</th>
                            <th>주소</th>
                            <th>이메일</th>
                            <th>일반전화</th>
                            <th>핸드폰번호</th>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {pageResult.dtoList.map((user, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{user.userId}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{user.name}</td>
                                        <td>{user.companyName}</td>
                                        <td>{user.companyNumber}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                        <td>{user.number}</td>
                                        <td>{user.phoneNumber}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <UserPageListBtn {...pageResult} type={type} keyword={keyword} />
                </table>
            </div>
        </>
    );
};
export default UserPageList;
