/* 
	Developer: Marcelo Jean | www.marcelojean.96.lt
	Functions for setter and getters
	
*/

// Functions 
function setHighScore(namekey, player, score){
	return window.localStorage.setItem(namekey, "Nome: "+player+" Score: "+score);
}
function getHighScore(namekey){
	return window.localStorage.getItem(namekey);
}
function removeHighScore(namekey){
	return  window.localStorage.removeItem(namekey);
}
function bestHighScore(archive){ 
	return archive.visible = true, 
	archive.text = "      BEST SCORE:\n\n"+getHighScore('Jogador');
}

/* US: 
	Mode of use.

	What's variable namekey? 
	Namekey, it's key on what you will use for save in your browser on LocalStorage (local where has archives saved).
	And what's variabel player and score? 
	Two variable are of name and score for mount of score on game final.
	Where will use?
	Keep calm bro.
	SmallVantagens? mode of use easy.

		//code
			setHighScore(namekey, player, score); ->
			setHighScore('punctuation', 'Joseff', '7'); // values add for variable. 

			getHighScore(namekey);
				getHighScore('punctuation');	// values add for variable. 

			removeHighScore(namekey);
				removeHighScore('punctuation'); // values add for variable. 

			var variable = ""; // examplo of function archive.
			bestHighScore(archive);  Let's get the files in localStorage.

			//archive = You must have a variable text to appear when it is called
			
			bestHighScore(this.variable);

		What up bro? Tranquil
    Doubts:: marcelojeam1@gmail.com	

PT-BR
	Modo de uso:	

	O que é a variable namekey?
	NameKey, é a chave na qual você vai usar para salvar no seu navegador em localStorage (Local aonde fica os arquivos salvos).
	E as variaveis player e a de score?
	As duas variaveis são de nomes e score para exibir a pontuação do player no final do jogo.
	Como usar? Fique calmo(a).
	Vantagens? Ficilidade de uso.

		//code
			setHighScore(namekey, player, score); ->
			setHighScore('punctuation', 'Joseff', '7'); // adicionando valores as variaveis.
			getHighScore(namekey);
				getHighScore('punctuation');	// pegando a variavel no qual vamos querer retornar em algo.

			removeHighScore(namekey);
				removeHighScore('punctuation'); // removendo o valor que tem na variavel punctuation. 

			var variable = ""; // exemplo de variavel de texto no qual vamos exibir os arquivo de punctuation.
			bestHighScore(archive);  // arquivo é a variavel no qual vamos retornar o que tem salvado no navegador.

			bestHighScore(this.variable); // exemplo de uso.

	E aí manos e manas? tranquilo??



	Dúvidas:: marcelojeam1@gmail.com			

*/
