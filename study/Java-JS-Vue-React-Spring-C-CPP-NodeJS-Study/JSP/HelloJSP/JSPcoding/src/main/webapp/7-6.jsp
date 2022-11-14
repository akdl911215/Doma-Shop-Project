<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<%
	int data = 20;		
%>
7-6.jsp: <%= data %><br>
<%@ include file="7-7.jsp" %>
7-6.jsp: <%= data %>
</body>
</html>