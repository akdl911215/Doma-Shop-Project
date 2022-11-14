<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<html>
<body>
<table border=1>
<tr>
	<td colspan=2>
		<jsp:include page="top.jsp" flush="flase" />
	</td>
</tr>
<tr>
	<td width=150 height=400>
		<jsp:include page="menu.jsp" flush="flase" />
	</td>
	<td>
		<jsp:include page="contents.jsp" flush="flase"></jsp:include>
	</td>
</tr>
</table>
</body>
</html>