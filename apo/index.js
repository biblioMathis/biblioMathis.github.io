function bom() {
	ordi.style.display="flex";
	hbc.style.display="none";
	body.style.overflowY="scroll";
}
function retour(){
	ordi.style.display="none";
	hbc.style.display="flex";
	body.style.overflowY="hidden";
}

r.addEventListener("click",retour);
hb.addEventListener("click", bom);