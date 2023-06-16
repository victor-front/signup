let container = document.getElementById('img-container'); //setup geral
let file = document.getElementById('fileImg');
let imagem = document.getElementById('imagem');
let enviar = document.getElementById('enviar');
let pod = true; //variável que determina se pode criar o balão de aviso

const DEFAULT_DESCRIPTION = 'Nada a dizer'; //dados a colocar se não preenchidos
const DEFAULT_PFP = 'data/default-pfp.png';
const DEFAULT_COLOR = '#555';

const criarConta = (nick, pfp, desc, color) => `
		<section id="conta">
			<div id="header" style="background-color: ${color};"></div>
			<div id="container">
				<div id="nick-pfp">
					<img id="cpfp" src="${pfp}"></img>
					<h1 id="cnick">${nick}</h1>
				</div>
				<div id="descricao">
					<p id="cdesc">${desc}</p>
				</div>
				<input type="button" id="limpar" onclick="limpar()" value="Deletar Conta">
			</div>
		</section>
	<footer id="rodape"><span>Made by <a href="https://victor-front.github.io/portfolio-victor/"><strong>Victor Front</strong></a></span></footer>
`;

function comparar(){//se o cadiado for true, quer dizer que a conta já foi criada
	if(localStorage.getItem('lcade') == 'true'){//se for true, configurar e imprimir a conta
		const lnick = localStorage.getItem('lnick');
		const lpfp = localStorage.getItem('lpfp') || DEFAULT_PFP;
		const ldesc = localStorage.getItem('ldesc') || DEFAULT_DESCRIPTION;
		const lcolor = localStorage.getItem('lcolor') || DEFAULT_COLOR;
		
		const contaInnerHTML = criarConta(lnick, lpfp, ldesc, lcolor);
		document.body.innerHTML = contaInnerHTML;
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
		criarBalao('Por favor, digite um nick!', '280px','50px', '300px', '800px');
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
		balao.innerHTML = `<span>${msg}</span>`;
		document.body.appendChild(balao);
		
		balao.style.width = `${w}`;
		balao.style.height = `${h}`;
		balao.style.top = `${t}`;
		balao.style.left = `${l}`;
		
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