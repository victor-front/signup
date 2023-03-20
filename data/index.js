let container = document.getElementById('img-container'); //setup geral
let file = document.getElementById('fileImg');
let imagem = document.getElementById('imagem');

container.addEventListener('click', ()=>{ //quando container de imagem for clicado
	file.click();
});

container.addEventListener('change', (e)=>{ //sistema de escolher a foto de perfil
	if (file.files.length <= 0){
		return;
	}
	
	let = reader = new FileReader();
	reader.onload = () =>{
		document.getElementById('icone-001').style.display = 'none';
		imagem.src = reader.result;
		imagem.style.display = 'block';
	}
	
	reader.readAsDataURL(file.files[0]);
});