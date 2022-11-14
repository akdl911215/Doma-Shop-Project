<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<%
	String name1 = "title";
	String value1 = "jsp programming";
	String name2 = "author";
	String value2 = "jimmy";
	pageContext.setAttribute(name1, value1);
	pageContext.setAttribute(name2, value2);
	
%>
속성1 : <%= pageContext.getAttribute(name1) %> 
<br>
속성2 : <%= pageContext.getAttribute(name2) %>
</body>
</html>