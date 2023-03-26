let container = document.getElementById('img-container'); //setup geral
let file = document.getElementById('fileImg');
let imagem = document.getElementById('imagem');
let enviar = document.getElementById('enviar');
let pod = true; //variável que determina se pode criar o balão de aviso

function comparar(){//se o cadiado for true, quer dizer que a conta já foi criada
	if(localStorage.getItem('lcade') == 'true'){//se for true, vai imprimir a conta
		document.body.innerHTML = `
			<section id="conta">
				<div id="header" style="background-color: ${localStorage.getItem('lcolor')};"></div>
				<div id="container">
					<div id="nick-pfp">
						<img id="cpfp" src="${localStorage.getItem('lpfp')}"></img>
						<h1 id="cnick">${localStorage.getItem('lnick')}</h1>
					</div>
					<div id="descricao">
						<p id="cdesc">${localStorage.getItem('ldesc')}</p>
					</div>
					<input type="button" id="limpar" onclick="limpar()" value="Deletar Conta">
				</div>
			</section>
			<footer id="rodape"><span>Made by <a href="https://victor-front.github.io/portfolio-victor/"><strong>Victor Front</strong></a></span></footer>
		`;
		document.title = localStorage.getItem('lnick');
		if(localStorage.getItem('ldesc') == false){document.getElementById('cdesc').innerHTML = 'Nada a dizer'};
		if(localStorage.getItem('lpfp') == false){document.getElementById('cpfp').src = 'https://static.wikia.nocookie.net/megaman/images/d/dc/Met.jpg/revision/latest?cb=20090301231856'};
	}else{//se não for true, então o site prosseguirá normalmente
		document.getElementById('criar').style.display = 'flex';
	}
}

function limpar(){//limpar os dados do usuário
	localStorage.removeItem('lnick');
	localStorage.removeItem('ldesc');
	localStorage.removeItem('lpfp');
	localStorage.removeItem('lcade');
	localStorage.removeItem('lcolor');
	location.reload();
}

document.addEventListener('keydown', (event)=>{//chamar este evento se o usuário clicar em uma tecla
	let keyCode = event.code;//pegar o valor da tecla
	if(localStorage.getItem('lcade') == null){//se o usuário não criou a conta, ir para o primeiro bloco
		if(keyCode == 'Enter'){//se o usuário clicar em enter, chamar a verificação
			verificar();
		}
	}else{
		if(keyCode == 'Enter'){//se o usuário clicar em enter, chamar a função de limpar dados
			limpar();
		}
	}
});

enviar.addEventListener('click', ()=>{ //chamar a função de verificação quando o botão for clicado
	verificar();
});

container.addEventListener('click', ()=>{ //quando container de imagem for clicado
	file.click();
});

container.addEventListener('change', (e)=>{ //sistema de escolher a foto de perfil
	if (file.files.length <= 0){return;};
	let = reader = new FileReader();
		
	reader.onload = () =>{//dar display à pfp(foto de perfil)
		document.getElementById('icone-001').style.display = 'none';
		imagem.src = reader.result;
		imagem.style.display = 'block';
	}
	
	reader.readAsDataURL(file.files[0]);
});

function verificar(){//sistema de verificação e validação
	let nick = document.getElementById('nick').value;//filtro dos valores no elemento à uma variável
	let desc = document.getElementById('desc').value;
	let pfp = document.getElementById('imagem').src;
	let color = document.getElementById('color').value;
	
	if(nick == false){//se o nick está preenchido ou não
		criarBalao('Por favor, digite um nick!', '280px','50px', '160px', '800px');
	}else{
		localStorage.setItem('lnick', nick);//salvamento dos dados pontuais no navegador
		localStorage.setItem('ldesc', desc);
		localStorage.setItem('lpfp', pfp);
		localStorage.setItem('lcolor', color);
		localStorage.setItem('lcade', true);
		location.reload();//dar reload na página
	}
}

function criarBalao(msg, w, h, t, l){
	if(pod == true){//verificar se pode criar o balão ou não
		pod = false;
		let balao = document.createElement('div');//criar um balão de aviso
			balao.setAttribute('id', 'balao');
			balao.classList.add('aparecer');
			balao.innerHTML = `
				<span>${msg}</span>
				<style>
					#balao{
						position: absolute;
						cursor: pointer;
						top: ${t};
						left: ${l};
						display: flex;
						align-items: center;
						background-color: #ddd;
						border: 3px solid #222;
						border-radius: 10px 10px 10px 0;
						transform: translate(0, -50%);
						overflow: hidden;
						height: ${h};
						width: ${w};
					}
					
					.aparecer{
						animation: 300ms aparecer linear;
					}
					
					.desaparecer{
						animation: 1s desaparecer ease;
						opacity: 0%;
					}
					
					#balao span{
						font-size: 1.5em;
						padding: 5px;
						color: #222;
					}
					
					@keyframes aparecer{
						0%{opacity: 0;}
						100%{opacity: 100%;}
					}
					
					@keyframes desaparecer{
						0%{opacity: 100%; transform: rotate(0deg);}
						100%{opacity: 0%; transform: rotate(80deg); top: 900px;}
					}
				</style>
			`;
		document.body.appendChild(balao);
		setTimeout(()=>{
			balao.classList.remove('aparecer');
			balao.classList.add('desaparecer');
			setTimeout(()=>{
				balao.remove();
				pod = true;
			}, 1 * 1000)
		}, 2 * 1000);
	}
}