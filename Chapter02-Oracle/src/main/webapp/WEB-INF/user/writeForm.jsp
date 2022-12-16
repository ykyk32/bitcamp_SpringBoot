<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#writeForm div {
	color: red;
	font-size: 8pt;
	font-weight: bold;
	
}
</style>
</head>
<body>

<h3>
	<img src="../image/qq.png" width="50" height="50" style="cursor: pointer;"
	onclick="location.href='/chapter06_SpringWebMaven/'"/>회원가입</h3>
	<!-- onclick="location.href='../'"/>회원가입</h3> -->
<hr/>
<form id="writeForm">
	<table border="1" padding="0" cellspacing="0">
		<tr>
			<th>이름</th>
			<td>
				<input type="text" name="name" id="name">
				<div id="nameDiv"/>
			</td>
		</tr>
		<tr>
			<th>아이디</th>
			<td>
				<input type="text" name="id" id="id">
				<div id="idDiv"/>
			</td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><input type="text" name="pwd" id="pwd">
			<div id="pwdDiv"/></td>
		</tr>
		<tr>
			
			<td colspan="2" align="center">
			<input type="button" value="등록" id="writeBtn">
			<input type="reset" value="취소">
			</td>
		</tr>
	</table>
</form>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="../js/write.js"></script>
</body>
</html>