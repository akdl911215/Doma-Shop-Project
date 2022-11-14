<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<jsp:useBean id="meminfo" class="com.member.MemberInfo" scope="page"></jsp:useBean>
<html>
<body>
<% 
	meminfo.setAge(10);
	meminfo.setName("Jimmy");
	out.print("MemberInfo name: " + meminfo.getName() + "<br>");
	out.print("MemberInfo age: " + meminfo.getAge());
%>
</body>
</html>