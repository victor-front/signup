let container = document.getElementById('img-container'); //setup geral
let file = document.getElementById('fileImg');
let imagem = document.getElementById('imagem');
let enviar = document.getElementById('enviar');

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
		window.alert('por favor, digite algo!');
	}else{
		window.alert('tudo ok!');
		localStorage.setItem('lnick', nick);//salvamento dos dados pontuais no navegador
		localStorage.setItem('ldesc', desc);
		localStorage.setItem('lpfp', pfp);
		localStorage.setItem('lcolor', color);
	}
}