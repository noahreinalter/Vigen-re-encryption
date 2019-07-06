
var Loesung = [];

var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var Alphabet_length = Alphabet.length;

function Text_to_Zahlen(wort) {
	var i;
	var ergebniss = [];
	

	for (i = 0; i < wort.length; i++){
		
		ergebniss[i] = Alphabet.indexOf(wort[i])+1;
	}

	return ergebniss;

}

function Zahlen_to_Text(zahlen) {
	var i;
	var ergebniss = [];

	for (i = 0; i < zahlen.length; i++){
		if (Number(zahlen[i]) > Alphabet_length) {
			zahlen[i] = Number(zahlen[i]) - Alphabet_length;
			ergebniss[i] = Alphabet[Number(zahlen[i])-1];
		}else if (Number(zahlen[i]) <= 0){
			zahlen[i] = Number(zahlen[i]) + Alphabet_length;
			ergebniss[i] = Alphabet[Number(zahlen[i])-1];
		}
		ergebniss[i] = Alphabet[Number(zahlen[i])-1];
	}

	return ergebniss;
}

function array_to_string(Loesung) {
	roheresergebniss = Zahlen_to_Text(Loesung);

	roheresergebniss = roheresergebniss.toString();
	
	var rohergebniss = roheresergebniss.replace(/,/g, "");


	document.getElementById("Loesung").innerHTML = rohergebniss;
}


function Verschlüsseln() {
	
	var Schluesselwort_laenge = Schluesselwort.length;
	var Nachricht_laenge = Nachricht.length;

	Nachricht_in_zahlen = Text_to_Zahlen(Nachricht);
	Schluesselwort_in_zahlen = Text_to_Zahlen(Schluesselwort);


	for (i = 0; i < Nachricht_laenge; i++){
		if (i <= Schluesselwort_laenge-1){

			Loesung[i] = Number(Nachricht_in_zahlen[i]) + Number(Schluesselwort_in_zahlen[i]);
		}else{
			var x = i;
			while (x >= Schluesselwort_laenge) {
    			x = x - Schluesselwort_laenge;
			}
			Loesung[i] = Number(Nachricht_in_zahlen[i]) + Number(Schluesselwort_in_zahlen[x]);
		}
	}
	array_to_string(Loesung);
}

function Entschlüsseln() {
	
	var Schluesselwort_laenge = Schluesselwort.length;
	var Nachricht_laenge = Nachricht.length;

	Nachricht_in_zahlen = Text_to_Zahlen(Nachricht);
	Schluesselwort_in_zahlen = Text_to_Zahlen(Schluesselwort);



	for (i = 0; i < Nachricht_laenge; i++){
		if (i <= Schluesselwort_laenge-1){

			Loesung[i] = Number(Nachricht_in_zahlen[i]) - Number(Schluesselwort_in_zahlen[i]);
		}else{
			var x = i;
			while (x >= Schluesselwort_laenge) {
    			x = x - Schluesselwort_laenge;
			}
			Loesung[i] = Number(Nachricht_in_zahlen[i]) - Number(Schluesselwort_in_zahlen[x]);
		}
	}
	array_to_string(Loesung);
}


