function bom() {
	ordi.classList.toggle("toggle");
	hbc.style.display="none";
	body.style.overflowY="scroll";
}
function retour(){
	ordi.classList.remove("toggle");
	hbc.style.display="flex";
	body.style.overflowY="hidden";
}

r.addEventListener("click",retour);
hb.addEventListener("click", bom);