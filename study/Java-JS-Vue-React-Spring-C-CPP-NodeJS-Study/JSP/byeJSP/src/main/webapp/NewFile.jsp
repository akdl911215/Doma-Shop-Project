<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<head>
<meta charset="UTF-8">
<title>Hello JSP HI</title>
</head>
<body>
<h2>첫번째 페이지</h2>
<%
	int a = 20, b = 20;
	out.print(a + b);
	out.print("<br>");
%>
</body>
</html>