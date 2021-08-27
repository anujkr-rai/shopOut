var btn1 = document.getElementById('btn1');
var img1 = document.getElementById("previewImg");
var imgUrl = document.getElementById("imgUrl");

btn1.addEventListener("click", function(e) {
	e.preventDefault();
	var url = imgUrl.value;
		img1.src = url;
	});