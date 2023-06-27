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
	const nick = document.querySelector(".nome").value;
	const desc = document.querySelector(".desc").value;
	if(!nick){
		window.alert("Por favor, digite um nick!");
	}else{
		window.alert(`Tudo certo! (${nick})`);
	}
}