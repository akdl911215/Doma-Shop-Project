<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<h3>---------- 7-5-2.jsp ----------</h3>
<% String[] values = request.getParameterValues("name"); %>
이름1 : <%= values[0] %><br>
이름2 : <%= values[1] %><br>
전화 : <%= request.getParameter("phone") %>
<h3>---------- 7-5-2.jsp ----------</h3>
</body>
</html>