<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<body>
30의 약수는 다음과 같다.<br>
<%
	int i = 1;
	for(i = 1; i <= 30; i++) {
		if(30 % i == 0) out.print(i + " ");
	}
%>
<br>
200의 약수는 다음과 같다.<br><br>
<%
	int j = 1;
	for(j = 1; j <= 200; j++){
		if(200 % j == 0) out.print(j + " ");
	}
%>
</body>
</html>