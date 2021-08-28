import React from 'react';
// import 'webapp/notice/style/NoticeRegister.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEdior from '@ckeditor/ckeditor5-build-classic';

const NoticeRegister2 = () => {
    return (
        <>
            <div className="NoticeRegistApp">
                <h1>Notice List</h1>
                <div className="movie-container">
                    <h2>제목</h2>
                    <div>내용(content)</div>
                </div>
                <div className="form-wrapper">
                    <inpput className="title-input" type="text" placeholder="제목" />
                    {/* <textarea className="text-area" placeholder="내용"></textarea> */}
                    <CKEditor
                        editor={ClassicEdior}
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={(editor) => {
                            // You can store the "editor" and use when it is needed
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
                <button className="submit-button">입력</button>
            </div>
        </>
    );
};
export default NoticeRegister2;
