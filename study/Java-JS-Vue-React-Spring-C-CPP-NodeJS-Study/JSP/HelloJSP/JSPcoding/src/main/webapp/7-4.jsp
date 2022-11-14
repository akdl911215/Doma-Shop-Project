<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<h3>---------- 7-4.jsp ----------</h3>
<jsp:include page="7-5-2.jsp" flush="false">
	<jsp:param name="name" value="Jimmy"/>
	<jsp:param name="phone" value="010-1111-2222"/>
</jsp:include>
<h3>---------- 7-4.jsp ----------</h3>
</body>
</html>