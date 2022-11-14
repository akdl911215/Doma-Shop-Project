<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page import="java.util.Enumeration" %>
<html>
<body>
<ul>
<%
	Enumeration e = request.getHeaderNames();
	while(e.hasMoreElements()){
		String name = (String)e.nextElement();
		String value = request.getHeader(name);
		out.print("<li>" + name + " : " + value + "<br>");
	}
%>
</ul>
</body>
</html>