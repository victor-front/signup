const photo = document.querySelector(".pfp");
const file = document.querySelector(".file-pfp");
const i0 = document.querySelector(".i0");

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
		filtrar();
	}
});

function filtrar(){
	let nick = document.querySelector(".nome").value;
	let desc = document.querySelector(".desc").value;
	let pfp = document.querySelector(".pfp").style.backgroundImage;
	if(!nick){
		window.alert("Por favor, digite um nick!");
	}else{
		embalar(nick, desc, pfp);
	}
}

function embalar(nick, desc, pfp){
	if(localStorage.getItem('ldesc')){localStorage.removeItem('ldesc')}
	if(localStorage.getItem('lpfp')){localStorage.removeItem('lpfp')}
	localStorage.setItem('lnick', nick);
	
	if(desc){localStorage.setItem('ldesc', desc);}
	if(pfp){localStorage.setItem('lpfp', pfp);}
	location.reload();
}