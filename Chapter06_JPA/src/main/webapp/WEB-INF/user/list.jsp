<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h3>
	<img src="../image/qq.png" width="50" height="50" style="cursor: pointer;"
	onclick="location.href='/'"/>목록</h3>
	<!-- onclick="location.href='../'"/>회원가입</h3> -->
<hr/>
<table id="userListTable" border="1" >
	<tr>
		<th width="150">이름</th>
		<th width="150">아이디</th>
		<th width="150">비밀번호</th>
	</tr>
	
	<!-- 동적처리 -->
	
</table>
<br><br>

<div style="width: 450px; text-align: center;">
	<form id="searchForm">
		<select id="searchOption">
			<option value="name">이름</option>
			<option value="id">아이디</option>
		</select>
		<input type="text" id="keyword">
		<input type="button" id="serchBtn" value="검색">
	</form>
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="../js/list.js"></script>
</body>
</html>