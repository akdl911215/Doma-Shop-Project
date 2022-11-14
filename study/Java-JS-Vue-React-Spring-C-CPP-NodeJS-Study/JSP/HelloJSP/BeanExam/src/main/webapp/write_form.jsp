<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<form action="write.jsp" method="post">
<table border=1>
<tr>
	<td>
		제목
	</td>
	<td>
		<input type="text" name="title" size="50">
	</td>
</tr>
<tr>
	<td>
		작성자		
	</td>
	<td>
		<input type="text" name="writer">
	</td>
</tr>
<tr>
	<td>
		내용
	</td>
	<td>
		<textarea rows="20" name="text"></textarea>
	</td>
</tr>
<tr>
	<td>
		첨부파일
	</td>
	<td>
		<textarea rows="20" name="text"></textarea>
	</td>
</tr>
<tr>
	<td>
		비밀번호
	</td>
	<td>
		<input type="password" name="pass">
	</td>
</tr>
<tr>
	<td colspan=2 align="center">
		<input type="submit" value="확인"><input type="reset" value="취소"	>	
	</td>
</tr>
</table>

</form>
</body>
</html>