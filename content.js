

setTimeout(function(){
	alert('after 5 seconds');
	var video_id = window.location.search.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
  		video_id = video_id.substring(0, ampersandPosition);
  	}

 	var download_url = 'http://ssyoutube.com/watch?v='+video_id; 
 	
 	//$("#search").append('<h1> I am search </h1>')
  	$("#info").append('<h2> <button onclick="window.open(\' '+ download_url + '\');"> Download this video </button> </h2>');
	//var download_button = document.getElementById('download_button');
	//download_button.onclick = openDownloadPage(download_url);


},5000); 




function openDownloadPage(){

	alert("clicked the download button!");
	var video_id = window.location.search.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
  		video_id = video_id.substring(0, ampersandPosition);
  	}

 	var download_url = 'http://ssyoutube.com/watch?v='+video_id; 
 	console.log("download_url = "+download_url);
	//window.open(download_url);
	window.open('http://google.com');	 
};