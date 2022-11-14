<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page import="java.net.URLEncoder" %>
<html>
<body>
<%
	String search = "JSP 프로그래밍";
	String url = "http://www.google.com/search?q=";
	search = URLEncoder.encode(search, "UTF-8");
	response.sendRedirect(url + search);
%>
</body>
</html>