$(function(){
 	$.ajax({
 		type: 'post',
 		url: '/user/getUserList',
 		dataType: 'json',//text,html,xml,json
 		success: function(data){
 			//alert(JSON.stringify(data));
 			
 			$.each(data, function(index,items){
 				$('<tr/>').append($('<td/>',{
 					align: 'center',
 					text: items.name
 				})).append($('<td/>',{
 					align: 'center',
 					text: items.id
 				})).append($('<td/>',{
 					align: 'center',
 					text: items.pwd
 				})).appendTo($('#userListTable'));
 					
 			});
 				
 		},
 		error: function(err){
 			console.log(err);
 		}
 	});
});

//검색
$('#searchBtn').click(function(){
	if($('#keyword').val() == '')
		alert('검색어를 입력하세요')
	else
	 	$.ajax({
			 
		 });
	
});