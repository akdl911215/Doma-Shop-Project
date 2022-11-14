<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<%
	session.setAttribute("name", "jimmy");
	session.setAttribute("address", "seoul");
%>
세션 속성이 설정되었습니다. <br>
<a href="9-3.jsp">여기</a>를 클릭하면 설정된 속성을 확인할 수 있습니다.
</body>
</html>