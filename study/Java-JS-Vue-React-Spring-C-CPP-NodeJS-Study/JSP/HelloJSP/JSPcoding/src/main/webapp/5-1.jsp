<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
<ul>
	<li>클라이언트 주소: <%= request.getRemoteAddr() %>
	<li>요청 정보 길이: <%= request.getContentLength() %>
	<li>인코딩: <%= request.getCharacterEncoding() %>
	<li>문서 타입: <%= request.getContentType() %>
	<li>인코딩: <%= request.getProtocol() %>
	<li>인코딩: <%= request.getMethod() %>
	<li>인코딩: <%= request.getRequestURL() %>
</ul>
</body>
</html> 