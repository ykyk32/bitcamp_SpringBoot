$('#uploadBtn').click(function(){

	var formData = new FormData($('#uploadForm')[0]);
	$.ajax({
		type: 'post',
		url: '/user/upload2',
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		data: formData,
		success: function(data){
			//alert(data);
			$('#imgDiv').html(data);
		},
		error: function(err){
			console.log(err);
		}
	});
});

/*

processData
 - 기본값은 true
 - 기본적으로 Query String으로 변환해서 보내진다('변수=값&변수=값')
 - 파일 전송시에는 반드시 false로 해야 한다.(formData를 문자열로 변환하지 않는다)
 
contentType
  - 기본적으로 "application/x-www-form-urlencoded; charset=UTF-8"
  - 파일 전송시에는 'multipart/form-data'로 전송이 될 수 있도록 false로 설정한다

*/