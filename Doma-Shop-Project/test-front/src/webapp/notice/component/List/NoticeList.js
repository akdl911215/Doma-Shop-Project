import { ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import 'webapp/notice/style/NoticeList.css';

const NoticeList = () => {
    const [listData, setListData] = useState([]);

    return (
        <>
            <div>
                <table boarder="1">
                    <tr>
                        <th align="center" width="80">
                            No
                        </th>
                        <th align="center" width="320">
                            Title
                        </th>
                        <th align="center" width="100">
                            Writer
                        </th>
                        <th align="center" width="180">
                            Registration Date
                        </th>
                    </tr>
                    {/* <tr>
                        (!boards || (Array.isArray(board) && boards.legnth === 0) ?( ) :(
                        <td align="center"></td>
                        <td align="letf"></td>
                        <td align="right"></td>
                        <td align="center"></td>)
                    </tr> */}

                    {!listData || (Array.isArray(listData) && listData.legnth === 0) ? (
                        <tr>
                            <td colspan="4">List is empty</td>
                        </tr>
                    ) : (
                        <tr>
                            <td align="center"></td>
                            <td align="letf"></td>
                            <td align="right"></td>
                            <td align="center"></td>
                        </tr>
                    )}
                </table>
            </div>
        </>
    );
};
export default NoticeList;

