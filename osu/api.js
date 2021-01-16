
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

    ajaxGet("http://osu.ppy.sh/api/get_user_recent?k=84025557a7f8c38e04d30f6c30ad6f36f5aa2c56&u=[MATHIS]&m=3&limit=50", function (reponse) {
        var mania = JSON.parse(reponse);

        var a = document.getElementById("gauchem");
        var b = document.getElementById("droitem");
        for (var i =0; i <= mania.length - 1; i++) {
           if (mania[i].rank!="F") {
             a.innerHTML += "<p>map : <a href='https://osu.ppy.sh/beatmaps/"+mania[i].beatmap_id+"?mode=mania'>"+mania[i].beatmap_id+"</a></p>";
             b.innerHTML += "<p>score : " + mania[i].score +  " " + mania[i].rank +"</p>" ;
         }
     }




 });




