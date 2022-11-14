<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<jsp:useBean id="meminfo" class="com.member.MemberInfo" scope="request" />
<html>
<body>
MemberInfo name: <jsp:getProperty name="meminfo" property="name" /><br>
MemberInfo age: <jsp:getProperty name="meminfo" property="age" />
</body>
</html>