import React from 'react';

const NoticeModify = () => {
    return (
        <>
            <form>
                <table>
                    <tr>
                        <td>No</td>
                        <td>
                            <input type="text" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>Registration Date</td>
                        <td>
                            <input type="text" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input type="text" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>Wrtier</td>
                        <td>
                            <input type="text" disabled />
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
                    <button type="submit">Modify</button>
                </div>
            </form>
        </>
    );
};
export default NoticeModify;
