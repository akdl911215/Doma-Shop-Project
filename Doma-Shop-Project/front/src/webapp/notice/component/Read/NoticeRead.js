import React from 'react';
import NoticeList from '../List/NoticeList';

const NoticeRead = () => {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <td>No</td>
                        <td>
                            <input type="text" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Registration Date</td>
                        <td>
                            <input type="text" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input type="text" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Writer</td>
                        <td>
                            <input type="text" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Content</td>
                        <td>
                            <textarea readOnly />
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};
export default NoticeRead;
