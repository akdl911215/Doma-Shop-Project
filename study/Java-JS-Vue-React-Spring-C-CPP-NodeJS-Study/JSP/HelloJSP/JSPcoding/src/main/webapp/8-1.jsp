<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<%
	Cookie cookie = new Cookie("name", "jimmy");
	response.addCookie(cookie);
%>
<a href="8-2.jsp">쿠키 확인하기</a>
</body>
</html>