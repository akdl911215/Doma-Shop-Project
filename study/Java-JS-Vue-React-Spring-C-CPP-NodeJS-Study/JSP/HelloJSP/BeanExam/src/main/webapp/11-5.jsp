<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*" %>
<html>
<head>
	<meta charset="UTF-8">
	<title>Member 테이블 관리하기</title>
</head>
<body>
	<div align="center">
		<h3>Member 테이블 내용</h3>
		<table border = 1>
			<tr>
				<th>아이디</th>
				<th>비밀번호</th>
				<th>이름</th>
				<th>전화번호</th>
				<th>주소</th>
				<th>메뉴</th>
			</tr>
			<%
				Class.forName("org.mariadb.jdbc.Driver");
				String url = "jdbc:mariadb://localhost:3306/my_db";
				String user = "user";
				String pw = "456123";
				
				try (
					Connection con = DriverManager.getConnection(url, user, pw);
					// statement 객체를 생성하려면 Connection 객체가 제공하는 createStatement() 메소드를 사용해야 한다.
					Statement stmt  = con.createStatement();
					// Statement의 executeQuery() 메서드는 SELECT 쿼리를 실행할 떄 사용되며, SELECT 쿼리의 실행 결과를
					// java.sql.ResultSet 객체에 담아서 리턴한다. 따라서 ResultSet 클래스가 제공하는 메서드를 사용해서 읽올 수 있다.
					ResultSet rs = stmt.executeQuery("select * from member");
				){
					while(rs.next()) {
						out.print("<tr><td>" + rs.getInt("id") + "</td>");
						out.print("<td>" + rs.getString("pass") + "</td>");
						out.print("<td>" + rs.getString("name") + "</td>");
						out.print("<td>" + rs.getString("phone") + "</td>");
						out.print("<td>" + rs.getString("address") + "</td>");
						
						String update = String.format("<a href='11-6.jsp?id=%s'>수정</a>", rs.getInt("id"));
						out.print("<td>" + update);
						
						String delete = String.format("<a href='11-8.jsp?ud=%s'>삭제</a>", rs.getInt("id"));
						out.print(delete + "</td></tr>");
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
						
			%>
		</table>
		<h3><a href="11-3.html">레코드 입력하기</a></h3>
	</div>
</body>
</html>