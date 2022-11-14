<%@ page language="java" import="java.util.Date, java.sql.*, java.util.Calendar" contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<html>
<body>
<%	

	Calendar today = Calendar.getInstance();
	int year = today.get(Calendar.YEAR);
	int month = today.get(Calendar.MONTH) + 1;
	int date = today.get(Calendar.DATE);
%>

오늘은 <%= year %>년 <%= month %>월 <%= date %>일입니다.
</body>
</html>