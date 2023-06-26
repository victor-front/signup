document.addEventListener('keydown', function(event){
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