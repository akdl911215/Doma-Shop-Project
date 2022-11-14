<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<jsp:useBean id="boardData" class="com.board.BoardData" scope="request" />
<jsp:setProperty name="boardData" property="*" />
<jsp:forward page="view.jsp"></jsp:forward>