// petit copie qui aparait au partage
function toggle() {
	copier.classList.toggle('copie');
	setTimeout(suite,1100);
	function suite(){
		copier.classList.remove('copie');
	}
}
// traitement des accents espace et autres sortie de l'url
function o(text){
	const un = ['%22','%20','%27','%C3%A9','%C3%A0','%C3%A8','%C3%AA','%C3%AB','%C3%A7','%C3%A2','%C3%A4','%C3%AF','%C3%AE','%C3%B9','%C3%BB'];
	const deux = ['"',' ', "'","é","à","è","ê","ë","ç","â","ä","ï","î","ù","û"]; 
	for (var i = un.length - 1; i >= 0; i--) {
		text = text.split(un[i]).join(deux[i]);
	}
	return text;
}
// copier le lien grace au onclick
function copy() {
	var copyText = document.querySelector("#url");
	copyText.select();
	document.execCommand("copy");
}
// bouton pour valider le make question
function ok(){
	var reponse = "";
	var rep = r.value.trim();
	// mettre des chiffres/lettres random pour brouiller les pistes dans l'url
	for (var i = rep.length - 1; i >= 0; i--) {
		reponse+=Math.floor(Math.random()*Math.floor(30)).toString(30);
	}
	// on le mets en tableau pour insérer l'input plus facilement tout les 2 caracters
	reponse = reponse.split('');
	for (var i = reponse.length - 1; i >= 0; i--) {
		reponse[i]+=rep[i];
	}
	// on remet ça en string et enlever les espaces genant avec trim
	reponse = reponse.join('').trim();
	// rediriger avec le lien hidden(j'aurais pu faire directement un lien avec un onclick mais on aurais du cliquer deux fois)
	a.href =  "./get.html?q=" + q.value + "&&r=" + reponse;
	window.location = a.href;
}
// tout le traitement de réception du get
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
// la verification de la question
	setInterval(() => {
		// vérifier si c'est égale à la réponse si c'est un nombre verifier avec parsefloat pour plus de précision
		if (r.value.trim()==res || parseFloat(r.value)==parseFloat(res)) {
			oui.style.opacity="1";
			styleElem.innerHTML = "#rafter:after {content: '';}";
		}else{
			oui.style.opacity="0";
		}
		//  la partie ou on verifie le nombre et afficher un plus ou moins
		const parsed = parseFloat(r.value);
		if (!isNaN(parsed) && r.value!=res) {
			if (parsed>parseFloat(res)) {
				styleElem.innerHTML = "#rafter:after {content: '↓';}";
			}else if (parsed<parseFloat(res)) {
				styleElem.innerHTML = "#rafter:after {content: '↑';}";
			}

		}else{
			// enlever les fleche si on remet un string
			styleElem.innerHTML = "#rafter:after {content: '';}";
		}


	});
// les listener pour les click

	document.querySelector("#copy").addEventListener("click", copy);
	document.querySelector("#copy").addEventListener("click", toggle);
}
