import React, { useCallback, useState } from 'react';
import axios from 'axios';
import 'webapp/user/style/UserSignup.css';

const Signup = () => {
    const [signup, setSignup] = useState({
        username: '',
        password: '',
        name: '',
        companyName: '',
        companyNumber: '',
        address: '',
        email: '',
        number: '', //일반전화
        phoneNumber: '',
    });

    const { username, password, name, companyName, companyNumber, address, email, number, phoneNumber } = signup;

    const cancelButton = () => {};

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setSignup({
                ...signup,
                [name]: value,
            });
        },
        [signup]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        alert('회원가입 버튼 누름');

        axios
            .post('http://localhost:8080/users/signup', {
                username: username,
                password: password,
                name: name,
                companyName: companyName,
                companyNumber: companyNumber,
                address: address,
                email: email,
                number: number,
                phoneNumber: phoneNumber,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };
    // username, password, name, companyName, companyNumber, address, email, number, phoneNumber
    return (
        <>
            <form action="/action_page.php" className="artistSignupHead">
                <div className="container">
                    <h2>회원가입(Sign Up)</h2>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="username">
                        <b>아이디</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" value={username} onChange={handleChange} />

                    <label htmlFor="password">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={handleChange} />

                    <label htmlFor="companyName">
                        <b>회사이름</b>
                    </label>
                    <input type="text" placeholder="Enter CompanyName" name="companyName" value={companyName} onChange={handleChange} />

                    <label htmlFor="companyNumber">
                        <b>사업자번호</b>
                    </label>
                    <input type="text" placeholder="Enter CompanyNumber" name="companyNumber" value={companyNumber} onChange={handleChange} />

                    <label htmlFor="address">
                        <b>주소</b>
                    </label>
                    <input type="text" placeholder="Enter Address" name="address" value={address} onChange={handleChange} />

                    <label htmlFor="email">
                        <b>E-Mail</b>
                    </label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={handleChange} />

                    <label htmlFor="number">
                        <b>일반전화</b>
                    </label>
                    <input type="text" placeholder="Enter Number" name="number" value={number} onChange={handleChange} />

                    <label htmlFor="phoneNumber">
                        <b>핸드폰 번호</b>
                    </label>
                    <input type="text" placeholder="Enter PhoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange} />

                    <p>
                        By creating an account you agree to our{'PHILO-ARTE'}
                        <a href="#" className="artistSignupTermsPrivacy">
                            Terms & Privacy
                        </a>
                    </p>

                    <div class="clearfix">
                        <button type="button" className="cancelbtn" onClick={(e) => cancelButton(e)}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="signupbtn"
                            onClick={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
export default Signup;
