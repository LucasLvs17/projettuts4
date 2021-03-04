function goLive(){
	var source = document.getElementById('camera').src

	if(source != 'http://192.168.100.60:8080/video'){
		document.getElementById('camera').style.visibility ="visible";
		document.getElementById('camera').style.opacity="1";
		document.getElementById('camera').src ='http://192.168.100.60:8080/video';
		document.getElementById('live').style.backgroundColor ='red';
		document.getElementById('live').style.fontWeight = "bolder";
		document.getElementById('live').textContent="En live";
		document.getElementById('video').style.visibility ="hidden";
		document.getElementById('video').style.opacity="0";
		document.getElementById('video').src="";
	}


	if(source == 'http://192.168.100.60:8080/video'){
		document.getElementById('camera').src ="../static/img/video.JPG";
		document.getElementById('live').style.backgroundColor ='green';
		document.getElementById('live').style.fontWeight = "normal";
		document.getElementById('live').textContent="Live";
		}
}

function v1(){
	document.getElementById('video').style.visibility ="visible";
	document.getElementById('video').style.opacity="1";
	document.getElementById('live').style.backgroundColor ='green';
	document.getElementById('live').style.fontWeight = "normal";
	document.getElementById('live').textContent="Live";
    document.getElementById('video').src="../static/img/20210217-053115-173589.avi";
	modalBgsnap.classList.remove('bg-activesnap');
	document.getElementById('camera').style.visibility ="hidden";
	document.getElementById('camera').style.opacity="0";
}

function v2(){
	document.getElementById('video').style.visibility ="visible";
	document.getElementById('video').style.opacity="1";
	document.getElementById('live').style.backgroundColor ='green';
	document.getElementById('live').style.fontWeight = "normal";
	document.getElementById('live').textContent="Live";
    document.getElementById('video').src="static/img/20210220-101010-254687.avi";
	modalBgsnap.classList.remove('bg-activesnap');
	document.getElementById('camera').style.visibility ="hidden";
	document.getElementById('camera').style.opacity="0";
}

function v3(){
	document.getElementById('video').style.visibility ="visible";
	document.getElementById('video').style.opacity="1";
	document.getElementById('live').style.backgroundColor ='green';
	document.getElementById('live').style.fontWeight = "normal";
	document.getElementById('live').textContent="Live";
    document.getElementById('video').src="static/img/20210220-200002-104887.avi";
	modalBgsnap.classList.remove('bg-activesnap');
	document.getElementById('camera').style.visibility ="hidden";
	document.getElementById('camera').style.opacity="0";
}

function v4(){
	document.getElementById('video').style.visibility ="visible";
	document.getElementById('video').style.opacity="1";
	document.getElementById('live').style.backgroundColor ='green';
	document.getElementById('live').style.fontWeight = "normal";
	document.getElementById('live').textContent="Live";
    document.getElementById('video').src="static/img/20210228-230002-014525.avi";
	modalBgsnap.classList.remove('bg-activesnap');
	document.getElementById('camera').style.visibility ="hidden";
	document.getElementById('camera').style.opacity="0";
}