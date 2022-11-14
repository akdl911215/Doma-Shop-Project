<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%
	HttpSession httpSession = request.getSession();
%>
<html>
<body>
세션 아이디1: <%= session.getId() %><br>
세션 아이디2: <%= session.getId() %>
</body>
</html>