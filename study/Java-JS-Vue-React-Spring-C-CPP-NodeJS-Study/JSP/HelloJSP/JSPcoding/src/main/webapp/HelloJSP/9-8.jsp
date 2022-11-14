<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>

<% 
	String id = (String)session.getAttribute("login");
	if(id != null && id.equals("admin")) {
		out.print("<h3>로그인한 상태입니다. ID = " + id + "</h3>");
		out.print("<h3><a href=9-9.jsp>로그아웃</a></h3>");
	} else {
		out.print("<h3>로그인 안한 상태입니다.</h3>");
		out.print("<h3><a href=9-6.jsp>로그인</a><h3>");
	}
%></body>
</html>