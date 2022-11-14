<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import = "java.sql.*" %>
<html>

<head>
	<meta charset="UTF-8">
	<title>select 구문 실행 예제</title>
</head>

<body>
<table border=1>
	<tr>
		<th>아이디</th>
		<th>비밀번호</th>
		<th>이름</th>
		<th>전화번호</th>
		<th>주소</th>		
	</tr>
	<%
		Class.forName("org.mariadb.jdbc.Driver");
		String url = "jdbc:mariadb://localhost:3306/my_db";
		String user = "user";
		String pass = "456123";
		try (
			Connection con = DriverManager.getConnection(url, user, pass);
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select * from member where id = 300");
		){
			while(rs.next()) {
				out.print("<tr><td>" + rs.getInt("id") + "</td>");
				out.print("<td>" + rs.getString("pass") + "</td>");
				out.print("<td>" + rs.getString("name") + "</td>");
				out.print("<td>" + rs.getString("phone") + "</td>");
				out.print("<td>" + rs.getString("address") + "</td></tr>");
				}
		} catch (Exception e) {
			e.printStackTrace();
		}
	%>
</table>
</body>

</html>
