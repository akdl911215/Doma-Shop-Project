<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<%
	Cookie cookie1 = new Cookie("name", "jimmy");
	response.addCookie(cookie1);
	
	Cookie cookie2 = new Cookie("phone", "010-1111-2222");
	cookie2.setDomain("java.oracle.com");
	response.addCookie(cookie2);
%>
<h3>쿠키 생성 결과 확인</h3>
<%= cookie1.getName() %>: <%= cookie1.getValue() %><br>
<%= cookie2.getName() %>: <%= cookie2.getValue() %><br>
<a href="8-2.jsp">쿠키 확인하기</a>
</body>
</html>