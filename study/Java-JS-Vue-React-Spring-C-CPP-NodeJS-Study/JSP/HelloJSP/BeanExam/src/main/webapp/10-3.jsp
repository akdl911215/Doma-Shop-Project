<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<jsp:useBean id="meminfo" class="com.member.MemberInfo" scope="request" />
<html>
<body>
<% 
	out.print("MemberInfo name: " + meminfo.getName() + "<br>");
	out.print("MemberInfo age: " + meminfo.getAge());
%>
</body>
</html>