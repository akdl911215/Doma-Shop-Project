import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getLocalUserLogin, UserWithdrawalPage } from 'webapp/user/reducer/user.reducer';

const UserWithdrawal = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.users.usersState);
    console.log('userState : ', userState);

    useEffect(() => {
        dispatch(getLocalUserLogin());
    });

    const [withdrawal, setWithdrawal] = useState({
        userId: userState.userId,
        username: ' ',
        password: ' ',
        name: ' ',
        companyName: ' ',
        address: ' ',
        email: ' ',
        number: ' ',
        phoneNumber: ' ',
    });

    const goWithdrawal = async (e) => {
        const UserWithdrawalResult = window.confirm('회원을 탈퇴하시겠습니까?');

        const obj = {
            userId: userState.userId,
            username: ' ',
            password: ' ',
            name: ' ',
            companyName: ' ',
            address: ' ',
            email: ' ',
            number: ' ',
            phoneNumber: ' ',
        };

        if (UserWithdrawalResult) {
            alert('탈퇴를 완료하셨습니다.');
            dispatch(UserWithdrawalPage(obj));
        }
    };

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setWithdrawal({
                ...withdrawal,
                [name]: value,
            });
        },
        [withdrawal] // [] 상태값이 변경된 경우에만 다시 생성
        // 빈배열을 넣으면 어떤 상태값에도 반응하지않으며,
        // 두번째 인자로 아무것도 넣지 않으면 모든 상태 변화에 반응
    );

    return (
        <>
            <div className="mypageContainer">
                <h2>마이 페이지</h2>
                <hr />
            </div>
            <form>
                <label htmlFor="userId">
                    <b>유저번호</b>
                </label>
                <br />
                <input type="userId" name="userId" value={userState.userId} disabled />
                <br />
                <br />
                <label htmlFor="username">
                    <b>아이디</b>
                </label>
                <br />
                <input type="username" name="username" value=" " onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <label htmlFor="password">
                    <b>비밀번호</b>
                </label>
                <input type="password" placeholder="Enter password" name="password" value=" " onChange={(e) => handleChange(e)} />

                <label htmlFor="name">
                    <b>이름</b>
                </label>
                <br />
                <input type="name" name="name" value=" " onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <label htmlFor="companyName">
                    <b>회사 이름</b>
                </label>
                <input type="text" placeholder="Enter company name" name="companyName" value=" " onChange={(e) => handleChange(e)} />

                <label htmlFor="companyNumber">
                    <b>사업자번호</b>
                </label>
                <input type="text" placeholder="Enter company number" name="companyNumber" value=" " onChange={(e) => handleChange(e)} />

                <label htmlFor="address">
                    <b>주소</b>
                </label>
                <input type="text" placeholder="Enter address" name="address" value=" " onChange={(e) => handleChange(e)} />

                <label htmlFor="email">
                    <b>이메일 주소</b>
                </label>
                <input type="text" placeholder="Enter email" name="email" value=" " onChange={(e) => handleChange(e)} />

                <label htmlFor="number">
                    <b>일반전화</b>
                </label>
                <input type="text" placeholder="Enter number" name="number" value=" " onChange={(e) => handleChange(e)} />

                <labe htmlFor="phoneNumber">
                    <b>핸드폰번호</b>
                </labe>
                <input type="text" placeholder="Enter phone number" name=" " value=" " onChange={(e) => handleChange(e)} />

                <button type="submit" className="updateBtn" onClick={(e) => goWithdrawal(e)}>
                    탈퇴하기
                </button>
            </form>
        </>
    );
};
export default UserWithdrawal;
