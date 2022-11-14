<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<jsp:useBean id="boardData" class="com.board.BoardData" scope="request" />
<html>
<body>
<table border=1>
<tr>
	<td>제목</td>
	<td><jsp:getProperty name="boardData" property="title" /></td>
</tr>
<tr>
	<td>작성자</td>
	<td><jsp:getProperty name="boardData" property="writer" /></td>
</tr>
<tr>
	<td>내용</td>
	<td><textarea rows="20" name="text"><jsp:getProperty name="boardData" property="text" /></textarea></td>
</tr>
<tr>
	<td>비밀번호</td>
	<td><jsp:getProperty name="boardData" property="pass" /></td>
</tr>
</table>

</body>
</html>