<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<jsp:useBean id="meminfo" class="com.member.MemberInfo" scope="request" />
<html>
<body>
<%
	meminfo.setAge(10);
	meminfo.setName("Jimmy");
%>
<!-- forward 액션태그는 하나의 JSP페이지에서 다른 JSP페이지로 요청 처리를 전달할 떄 사용 -->
<jsp:forward page="10-3.jsp"/>
</body>
</html>