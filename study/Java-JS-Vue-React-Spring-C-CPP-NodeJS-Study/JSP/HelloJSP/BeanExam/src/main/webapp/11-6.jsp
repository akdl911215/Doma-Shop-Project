<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.*" %> <!-- * : Asterisk -->
<html>
<head>
	<meta charset="UTF-8">
	<title>Member 레코드 수정하기</title>
</head>
<body>
	<div align="center">
		<h3>Member 레코드 수정하기</h3>
		<form action="11-7.jsp" method="post">
		<table border=1>
		<%
			request.setCharacterEncoding("UTF-8");
			String id = request.getParameter("id");
			String sql = String.format("select * from member where id = %s", id);
			Class.forName("org.mariadb.jdbc.Driver");
			
			String url = "jdbc:mariadb://localhost:3306/my_db";
			String user = "user";
			String pw = "456123";
			String pass = null, name = null, phone = null, address = null;
			try (
				Connection con = DriverManager.getConnection(url, user, pw);
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery(sql);
			) {
				rs.next();
				pass = rs.getString("pass");
				name = rs.getString("name");
				phone = rs.getString("phone");
				address = rs.getString("address");
			} catch (Exception e) {
				e.printStackTrace();
			}
		%>
		<tr>
			<th>아이디</th>
			<td><input type="text" name="id" value="<%=id%>"></td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><input type="password" name="pass" value="<%=pass %>"></td>
		</tr>
		<tr>
			<th>이름</th>
			<td><input type="text" name="name" value="<%=name %>"></td>
		</tr>
		<tr>
			<th>전화번호</th>
			<td><input type="text" name="phone" value="<%=phone %>"></td>
		</tr>
		<tr>
			<th>주소</th>
			<td><input type="text" name="address" value="<%=address %>"></td>
		</tr>
		<tr>
			<td colspan=2 align=center>
				<input type="submit" value="확인">
				<input type="reset" value="취소">
			</td>
		</tr>
		</table>
		</form>
	</div>
</body>

</html>
