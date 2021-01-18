function toggle() {
	copier.classList.toggle('copie');
	setTimeout(suite,1100);
	function suite(){
		copier.classList.remove('copie');
	}
}

function o(text){
	const un = ['%20','%27','%C3%A9','%C3%A0','%C3%A8','%C3%AA','%C3%AB','%C3%A7','%C3%A2','%C3%A4','%C3%AF','%C3%AE','%C3%B9','%C3%BB'];
	const deux = [' ', "'","é","à","è","ê","ë","ç","â","ä","ï","î","ù","û"]; 
	for (var i = un.length - 1; i >= 0; i--) {
		text = text.split(un[i]).join(deux[i]);
	}
	return text;
}

function copy() {
	var copyText = document.querySelector("#url");
	copyText.select();
	document.execCommand("copy");
}

function ok(){
	var reponse = "";
	var rep = r.value.trim();
	for (var i = rep.length - 1; i >= 0; i--) {
		reponse+=Math.floor(Math.random()*Math.floor(30)).toString(30);
	}
	reponse = reponse.split('');
	for (var i = reponse.length - 1; i >= 0; i--) {
		reponse[i]+=rep[i];
	}
	reponse = reponse.join('').trim();
	console.log(reponse);
	a.href =  "./get.html?q=" + q.value + "&&r=" + reponse;
	window.location = a.href;
}
function question() {
	var question = window.location.search.split('?q=')[1];
	question = o(question);
	question = question.split('&&r=');
	var reponse = question[1];
	var res = '';

	for (var i = 1 ; i < reponse.length ; i+=2) {
		res += reponse[i];
	}

	q.innerHTML = question[0];
	url.value = window.location;
	var styleElem = document.head.appendChild(document.createElement("style"));

	setInterval(() => {
		if (r.value==res) {
			oui.style.opacity="1";
			styleElem.innerHTML = "#rafter:after {content: '';}";
		}else{
			oui.style.opacity="0";
		}

		const parsed = parseFloat(r.value);
		if (!isNaN(parsed) && r.value!=res) {
			if (parsed>parseFloat(res)) {
				styleElem.innerHTML = "#rafter:after {content: '↓';}";
			}else if (parsed<parseFloat(res)) {
				styleElem.innerHTML = "#rafter:after {content: '↑';}";
			}else{
				styleElem.innerHTML = "#rafter:after {content: '≈';}";
			}

		}else{
			styleElem.innerHTML = "#rafter:after {content: '';}";
		}


	});


	document.querySelector("#copy").addEventListener("click", copy);
	document.querySelector("#copy").addEventListener("click", toggle);
}