<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<jsp:useBean id="meminfo" class="com.member.MemberInfo" scope="page" />
<jsp:setProperty name="meminfo" property="age" value="10" />
<jsp:setProperty name="meminfo" property="name" value="Jimmy" />
<html>
<body>
<jsp:forward page="10-5.jsp" />
</body>
</html>