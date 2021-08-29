import React from 'react';
// import 'webapp/notice/style/NoticeRegister.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEdior from '@ckeditor/ckeditor5-build-classic';

const NoticeRegister3 = () => {
    return (
        <>
            <div className="ec-base-table typeWrite">
                <table boarder="1" summary>
                    ::before
                    <caption>게시판 상세</caption>
                    <colgroup>
                        <col style={{ width: 130 }}></col>
                        <col style={{ width: 130 }}></col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">제목</th>
                            <td></td>
                            {/* <td>실리콘 제품 유의사항</td> */}
                        </tr>
                        <tr>
                            <th scope="row">작성자</th>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <ul className="etcArea">
                                    <li className="displynone">
                                        <string>평점</string>
                                    </li>
                                    <li>
                                        <string>작성일</string>
                                        <span className="txtNum">2021-07-08</span>
                                    </li>
                                    <li className="displaynone">
                                        <string>추천</string>
                                        <span clss="txtNum">
                                            <a herf="" className="btnNormal">
                                                <img src="#none" alt />" 추천하기 "
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default NoticeRegister3;
// https://sosohome.co.kr/article/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/1/30825/
