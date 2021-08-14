import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { userWithdrawalPage, getLocalUserLogin } from 'webapp/user/reducer/user.reducer';

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
        username: '',
        password: '',
        name: '',
        companyName: '',
        companyNumber: '',
        address: '',
        email: '',
        number: '',
        phoneNumber: '',
    });

    const goWithdrawal = async (e) => {
        const UserWithdrawalResult = window.confirm('회원을 탈퇴하시겠습니까?');

        const obj = {
            userId: userState.userId,
            username: withdrawal.username,
            password: withdrawal.password,
            name: withdrawal.name,
            companyName: withdrawal.companyName,
            companyNumber: withdrawal.companyNumber,
            address: withdrawal.address,
            email: withdrawal.email,
            number: withdrawal.number,
            phoneNumber: withdrawal.phoneNumber,
        };

        console.log('obj : ', obj);

        if (UserWithdrawalResult) {
            alert('탈퇴를 완료하셨습니다.');
            dispatch(userWithdrawalPage(obj));
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
        [withdrawal]
    );

    return (
        <>
            <form>
                {' '}
                {/* 정보를 제출하기 위한 대화형 커트롤을 포함하는 문서 구획을 나타냄 */}
                <div className="mypageContainer">
                    <h2>회원탈퇴 페이지</h2>
                    <hr />
                    {/* 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냄 */}
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
                    <input type="text" placeholder="Enter username" name="username" value={withdrawal.username} onChange={(e) => handleChange(e)} />
                    <label htmlFor="password">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" placeholder="Enter password" name="password" value={withdrawal.password} onChange={(e) => handleChange(e)} />
                    <label htmlFor="name">
                        <b>이름</b>
                    </label>
                    <input type="text" name="name" value={withdrawal.name} onChange={(e) => handleChange(e)} />
                    <label htmlFor="companyName">
                        <b>회사 이름</b>
                    </label>
                    <input type="text" placeholder="Enter company name" name="companyName" value={withdrawal.companyName} onChange={(e) => handleChange(e)} />
                    <label htmlFor="companyNumber">
                        <b>사업자번호</b>
                    </label>
                    <input type="text" placeholder="Enter company number" name="companyNumber" value={withdrawal.companyNumber} onChange={(e) => handleChange(e)} />
                    <label htmlFor="address">
                        <b>주소</b>
                    </label>
                    <input type="text" placeholder="Enter address" name="address" value={withdrawal.address} onChange={(e) => handleChange(e)} />
                    <label htmlFor="email">
                        <b>이메일 주소</b>
                    </label>
                    <input type="text" placeholder="Enter email" name="email" value={withdrawal.email} onChange={(e) => handleChange(e)} />
                    <label htmlFor="number">
                        <b>일반전화</b>
                    </label>
                    <input type="text" placeholder="Enter number" name="number" value={withdrawal.number} onChange={(e) => handleChange(e)} />
                    <label htmlFor="phoneNumber">
                        <b>핸드폰번호</b>
                    </label>
                    <input type="text" placeholder="Enter phone number" name="phoneNumber" value={withdrawal.phoneNumber} onChange={(e) => handleChange(e)} />
                    <button type="submit" className="updateBtn" onClick={(e) => goWithdrawal(e)}>
                        회원탈퇴
                    </button>
                </form>
                <div>
                    <Link to="/">
                        <button type="button" className="cancelbtn">
                            홈으로
                        </button>
                    </Link>
                </div>
            </form>
        </>
    );
};
export default UserWithdrawal;
