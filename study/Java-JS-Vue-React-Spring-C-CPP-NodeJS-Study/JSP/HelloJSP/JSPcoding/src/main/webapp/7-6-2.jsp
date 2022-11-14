<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<%
	int data = 20;
%>
7-6-2.jsp: <%= data %><br>
<%
	data += 20;
%>
7-7.jsp: <%= data %><br>
7-6-2.jsp: <%= data %>
</body>
</html>