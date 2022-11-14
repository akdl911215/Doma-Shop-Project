<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page buffer="1kb" autoFlush="false" %>
<html>
<head>
<title>autoFLush false로 인한 예외 예제</title>
</head>
<body>
<%
	for(int i = 0; i < 1000; i++)
		out.print("1234");
%>
</body>
</html>