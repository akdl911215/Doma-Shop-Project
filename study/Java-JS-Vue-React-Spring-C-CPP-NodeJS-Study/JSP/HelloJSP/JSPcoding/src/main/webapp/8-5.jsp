<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<%
	Cookie[] cookies = request.getCookies();
	for(Cookie c: cookies) {
		if(c.getName().equals("name")) {
			c.setMaxAge(0);
			response.addCookie(c);
		}
	}
%>
<a href="8-2.jsp">쿠키 확인하기</a>
</body>
</html>