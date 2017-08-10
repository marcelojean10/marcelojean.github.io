var jogador = 'x', jogada = 0;

function chkJogo(id){
	var src = chkSrc(id), bot;
	bot = document.getElementById('bot').checked;

	if(src === "branco.png"){
		document.getElementById(id).src = "img/" + jogador + ".png";
		jogada++;
		escrevernaTela("A vez do Jogador: "+ jogador);

		if(chkVitoria()){
			setTimeout(function(){ location.reload(); }, 3000);
			escrevernaTela("Vitória do jogador: "+ jogador+"<br>");
			return true;
		}

		if(jogada >= 9){
			setTimeout(function(){ location.reload(); }, 3000);
			escrevernaTela("Jogo empatado.. :(")
			return true;
		}

		if(jogador === 'x'){
			jogador = 'o';
		}else{
			jogador = 'x';
		}

	}
	if(bot && jogador === 'o'){
		setTimeout(function(){ chkJogo(jogadaDoComputador()); }, 1);
		return true;
	}

	return false;
}

function jogadaDoComputador(){
	if(chkSrc('celula5') === 'branco.png'){
		return 'celula5';
	}
	if(chkSrc('celula1') === 'o.png' && chkSrc('celula2') === 'o.png'){
		return 'celula3';
	}
	if(chkSrc('celula4') === 'o.png' && chkSrc('celula5') === 'o.png'){
		return 'celula6';
	}
	if(chkSrc('celula7') === 'o.png' && chkSrc('celula8') === 'o.png'){
		return 'celula9';
	}
	return 'celula' + Math.floor((Math.random() * 9) * 1);
}
function chkSrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length - 10, src.length); //substring pedaço do testo
													  // tamanho total - 10 caracters	
}
function chkVitoria(){
	if(bot && jogador == 'o'){
		jogador = 'Computador';
	}
	if(chkSrc('celula1') === chkSrc('celula2') && chkSrc('celula1') === chkSrc('celula3') && chkSrc('celula1') != 'branco.png'){
		return true;
	}
	if(chkSrc('celula4') === chkSrc('celula5') && chkSrc('celula4') === chkSrc('celula6')  && chkSrc('celula4') != 'branco.png'){
		return true;
	}
	if(chkSrc('celula7') === chkSrc('celula8') && chkSrc('celula7') === chkSrc('celula9')  && chkSrc('celula7') != 'branco.png'){
		return true;
	}
	if(chkSrc('celula1') === chkSrc('celula4') && chkSrc('celula1') === chkSrc('celula7')  && chkSrc('celula1') != 'branco.png'){ // verticais
		return true;
	}
	if(chkSrc('celula2') === chkSrc('celula5') && chkSrc('celula2') === chkSrc('celula8')  && chkSrc('celula2') != 'branco.png'){// verticais
		return true;
	}
	if(chkSrc('celula3') === chkSrc('celula6') && chkSrc('celula3') === chkSrc('celula9')  && chkSrc('celula3') != 'branco.png'){// verticais
		return true;
	}
	if(chkSrc('celula1') === chkSrc('celula5') && chkSrc('celula1') === chkSrc('celula9')  && chkSrc('celula1') != 'branco.png'){ // diagonais
		return true;
	}
	if(chkSrc('celula3') === chkSrc('celula5') && chkSrc('celula3') === chkSrc('celula7')  && chkSrc('celula3') != 'branco.png'){// diagonais
		return true;
	}
	return false;
}

function escrevernaTela(text){
	document.getElementById("log").innerHTML += text + "<br>";
}
