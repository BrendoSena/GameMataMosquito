let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

document.getElementById('cro').innerHTML = tempo

function ajustarTamanhoTela(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura);
}

ajustarTamanhoTela()


let cronometro = setInterval(function(){
 tempo -= 1

 if(tempo < 0){
 	clearInterval(cronometro)
 	clearInterval(criaMosquito)
 	window.location.href = 'Vitoria.html'
 } else{
 	document.getElementById('cro').innerHTML = tempo
 }
}, 1000)

function posicaoRandomica(){

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		if(vidas > 3){
			window.location.href = 'GameOver.html'
		}else{
			document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png"

			vidas++
		}
		
	}

	let posicaoY = Math.floor(Math.random() * altura) - 90
	let posicaoX = Math.floor(Math.random() * largura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


	console.log(posicaoY, posicaoX)

	let mosquito = document.createElement('img')

		mosquito.src = 'imagens/mosca.png'
		mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
		mosquito.style.left = posicaoX + 'px'
		mosquito.style.top = posicaoY + 'px'
		mosquito.style.position = 'absolute'
		mosquito.id = 'mosquito'
		mosquito.onclick = function(){
			this.remove()
		}

		tamanhoAleatorio()

	document.body.appendChild(mosquito)
}



function tamanhoAleatorio(){
	let classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2: 
			return 'mosquito3'
	}
}

function ladoAleatorio(){
	let classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

let criaMosquito = setInterval(function(){
	posicaoRandomica()
}, 1500)

function iniciarJogo(){
	window.location.href = 'principal.html'
}