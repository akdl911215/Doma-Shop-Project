<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<%
	Cookie[] cookies = request.getCookies();
	for (Cookie c: cookies) {
		out.print(c.getName() + ":" + c.getValue() + "<br>");
	}
%>
</body>
</html>