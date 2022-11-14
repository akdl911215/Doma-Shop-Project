<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page buffer="1kb" autoFlush="true" %>
<html>
<head>
<title>autoFlush true 예제</title>
</head>
<body>
<%
	for (int i = 0; i < 1000; i++)
		out.println("1234");
%>
</body>
</html>