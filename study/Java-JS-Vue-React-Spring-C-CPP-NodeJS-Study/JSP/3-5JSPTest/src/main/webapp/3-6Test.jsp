<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
30의 약수는 다음과 같다.<br>
<%
	for(int i = 1; i <= 30; i++) {
		if(30 % i == 0) out.print(i + " ");
	}
%>
</body>
</html>