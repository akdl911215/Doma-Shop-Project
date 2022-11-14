<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.Enumeration" %>
<html>
<body>
<%
	// application.getInitParameterNames() 사용시 모든 파라미터의 Name을 가져온다.
	// e의 저장타입은 Enumeration<E>이다. value에 String 을 넣었기에 제네릭타입을 String으로 지정
	Enumeration<String> e = application.getInitParameterNames();
	while(e.hasMoreElements()) {
		String n = e.nextElement();
		// application.getInitParameter() 사용시 value값을 가져온다.
		out.print(n + " = " + application.getInitParameter(n) + "<br>");
	}
%>
</body>
</html>