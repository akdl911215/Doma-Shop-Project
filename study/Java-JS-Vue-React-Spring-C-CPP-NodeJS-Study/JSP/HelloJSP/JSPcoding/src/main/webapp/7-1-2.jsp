<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<% String str = "7-2.jsp"; %>
<h2>이것은 7-1-2.jsp 페이지에서 출력한 내용입니다.</h2>
<jsp:include page="<%= str %>" flush="false"></jsp:include>
<h2>이것은 7-1-2.jsp 페이지에서추력한 내용입니다.</h2>
</body>
</html>