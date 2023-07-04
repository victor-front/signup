const photo = document.querySelector(".pfp");
const file = document.querySelector(".file-pfp");
const i0 = document.querySelector(".i0");
const underfinedPFP = 'url("data/underfined.png")';
const underfinedBC = '#111';
const underfinedDesc = "Nada a dizer."
let controle = false;

function load(){
	if(localStorage.getItem('lnick')){
		document.querySelector('.unome').innerHTML = localStorage.getItem('lnick');
		document.querySelector('.udesc').innerHTML = verificarDescricao(localStorage.getItem('ldesc'));
		document.querySelector('.photo').style.backgroundImage = verificarFoto(localStorage.getItem('lpfp'));
		document.querySelector('.background-user').style.backgroundColor = verificarCor(localStorage.getItem('lcor'));
		document.querySelector('.user').style.display = "flex";
		controle = false;
	}else{
		document.querySelector('.sign-up').style.display = 'flex';
		controle = true;
	}
}load();

photo.addEventListener('click', ()=>{
	file.click();
});

file.addEventListener('change', (event)=>{
	if(file.files.length <= 0){
		return;
	}
	
	let reader = new FileReader();
	reader.onload = () =>{
		photo.style.backgroundImage = `url("${reader.result}")`;
	};
	
	i0.style.display = "none";
	
	reader.readAsDataURL(file.files[0]);
});

document.addEventListener('keydown', (event)=>{
	let keyCode = event.code;
	if(keyCode == "Enter"){
		if(controle){
			filtrar();
		}else{
			resetar();
		}
	}
});

function filtrar(){
	let nick = document.querySelector(".nome").value;
	let desc = document.querySelector(".desc").value;
	let pfp = document.querySelector(".pfp").style.backgroundImage;
	let bc = document.querySelector(".cor-fun").value;
	if(!nick){
		window.alert('Por favor, digite um nick!');
	}else{
		embalar(nick, desc, pfp, bc);
	}
}

function embalar(nick, desc, pfp, bc){
	if(localStorage.getItem('ldesc')){localStorage.removeItem('ldesc')}
	if(localStorage.getItem('lpfp')){localStorage.removeItem('lpfp')}
	localStorage.setItem('lnick', nick);
	
	if(desc){localStorage.setItem('ldesc', desc);}
	if(pfp){localStorage.setItem('lpfp', pfp);}
	if(bc){localStorage.setItem('lcor', bc);}
	location.reload();
}

function resetar(){
	localStorage.removeItem('lnick');
	localStorage.removeItem('ldesc');
	localStorage.removeItem('lpfp');
	location.reload();
}

function verificarFoto(valor){
	if(valor){
		return valor;
	}else{
		return underfinedPFP;
	}
}

function verificarDescricao(valor){
	if(valor){
		return valor;
	}else{
		return underfinedDesc;
	}
}

function verificarCor(valor){
	if(valor){
		return valor;
	}else{
		return underfinedBC;
	}
}