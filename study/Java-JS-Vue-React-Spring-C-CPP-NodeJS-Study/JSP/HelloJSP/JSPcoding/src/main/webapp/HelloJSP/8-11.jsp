<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<%
	Cookie[] cookies = request.getCookies();
	for(Cookie c: cookies) {
		if(c.getName().equals("ID")) {
			c.setMaxAge(0);
			response.addCookie(c);
		}
	}
%>
<h><a href="8-10.jsp">로그인 확인</a></h3>
</body>
</html>