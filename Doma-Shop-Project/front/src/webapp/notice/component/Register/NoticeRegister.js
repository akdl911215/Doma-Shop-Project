import React from 'react';
// import 'webapp/notice/style/NoticeRegister.css';

const NoticeRegister = () => {
    return (
        <>
            <form>
                <table>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>Wrtier</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>Content</td>
                        <td>
                            <textarea rows="5"></textarea>
                        </td>
                    </tr>
                </table>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </>
    );
};
export default NoticeRegister;
