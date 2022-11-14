<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<%
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	
	if(id.equals("admin") && pw.equals("pass")) {
		session.setAttribute("login", id);
		out.print("<h2>로그인 성공</h2>");
	} else { 
		out.print("<h2>로그인 실패</h2>");
	}
%>
<h3><a href="9-8.jsp">로그인 확인</a></h3>
</body>
</html>