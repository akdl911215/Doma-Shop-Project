<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<%
	Cookie c1 = new Cookie("name", "jimmy");
	response.addCookie(c1);
	
	Cookie c2 = new Cookie("phone", "010-1111-2222");
	c2.setPath("/HelloJSP");
	response.addCookie(c2);
	
	Cookie c3 = new Cookie("address", "Seoul");
	c3.setPath("/HelloJSP/path3");
	response.addCookie(c3);
%>
<h3>현재 쿠키</h3>
c1 <%= c1.getName() %> : <%= c1.getValue() %> (path : <%= c1.getPath() %>)<br>
c2 <%= c2.getName() %> : <%= c2.getValue() %> (path : <%= c2.getPath() %>)<br>
c3 <%= c3.getName() %> : <%= c3.getValue() %> (path : <%= c3.getPath() %>)
</body>
</html>