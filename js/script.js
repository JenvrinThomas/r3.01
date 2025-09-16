let choix = ["Pierre", "Feuille", "Ciseaux"];
let ordi_choix = -1;

function ordi_jouer(){
	ordi_choix = Math.floor(Math.random() * 3);
}

function egalite(choixJoueur, choixOrdi){
	document.getElementById("resultat").innerHTML = "Egalité, le joueur a joué "+choixJoueur+" et l'ordi a joué "+choix[choixOrdi];
	document.getElementById("nb_egalites").innerHTML = parseInt(document.getElementById("nb_egalites").innerHTML)+1 + " égalités";
}

function defaite(choixJoueur, choixOrdi){
	document.getElementById("resultat").innerHTML = "Défaite, le joueur a joué "+choixJoueur+" et l'ordi a joué "+choix[choixOrdi];
	document.getElementById("nb_defaites").innerHTML = parseInt(document.getElementById("nb_defaites").innerHTML)+1 + " défaites";
}

function victoire(choixJoueur, choixOrdi){
	document.getElementById("resultat").innerHTML = "Victoire, le joueur a joué "+choixJoueur+" et l'ordi a joué "+choix[choixOrdi];
	document.getElementById("nb_victoires").innerHTML = parseInt(document.getElementById("nb_victoires").innerHTML)+1 + " victoires";
}

function jouer(choixJoueur){
	ordi_jouer();
	if (choix[ordi_choix] == choixJoueur) {
		egalite(choixJoueur, ordi_choix);
	}
	else if(choixJoueur == "Pierre" && choix[ordi_choix] == "Ciseaux"){
		victoire(choixJoueur, ordi_choix);
	}
	else{
		if(choixJoueur == "Ciseaux" && choix[ordi_choix] == "Feuille"){
			victoire(choixJoueur, ordi_choix);
		}
		else{			
			if(choixJoueur == "Feuille" && choix[ordi_choix] == "Pierre"){
				victoire(choixJoueur, ordi_choix);
			}
			else{
				defaite(choixJoueur, ordi_choix);
			}
		}
	}
}

document.getElementById("Pierre").addEventListener("click", () => jouer("Pierre"));
document.getElementById("Feuille").addEventListener("click", () => jouer("Feuille"));
document.getElementById("Ciseaux").addEventListener("click", () => jouer("Ciseaux"));
