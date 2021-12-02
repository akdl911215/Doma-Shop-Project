import React from "react";
import { Link } from "react-router-dom";
// import  from '@mui/meterial/Stack';
import {
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { flexbox } from "@mui/system";

const NoticeList = () => {
  const [searchType, setSearchType] = React.useState("");

  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <>
      <table
        className="sub_news"
        border="1"
        cellspacing="0"
        summary="게시판의 글제목 리스트"
      >
        <caption>공지사항</caption>

        <colgroup>
          <col />
          <col width="300" />
          <col width="110" />
          <col width="100" />
          <col width="80" />
        </colgroup>

        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">글쓴이</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="id">1</td>
            <td className="title">
              <Link to="/">게시판 제목</Link>
            </td>
            <td className="name">글쓴이 이름</td>
            <td className="date">날짜</td>
            <td className="hit">1234</td>
          </tr>
        </tbody>
      </table>

      <div>
        <div style={{ display: "flex" }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">검색조건</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchType}
                label="검색조건"
                onChange={handleChange}
                style={{ width: "100px", margin: 0 }}
              >
                <MenuItem value={1}>제목</MenuItem>
                <MenuItem value={2}>내용</MenuItem>
                <MenuItem value={3}>글쓴이</MenuItem>
                <MenuItem value={4}>아이디</MenuItem>
                <MenuItem value={5}>별명</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <input style={{ width: "300px", height: "53px" }} />
          {/* <button>검색</button> */}
          {/* <Button variant="contained">검색</Button> */}
          <Button variant="outlined">검색</Button>
        </div>
        <Link to="/notice_register">
          <button>글작성</button>
        </Link>
      </div>
    </>
  );
};
export default NoticeList;
