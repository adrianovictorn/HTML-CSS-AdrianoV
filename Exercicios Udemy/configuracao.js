const alterardisplay = document.getElementById('inomeUsuario');

function esconderInput (){
    if (alterardisplay.style.display === 'block'){
        alterardisplay.style.display = 'none';
    }
    else{
        alterardisplay.style.display = 'block'
    }
 
}

document.getElementById('botao').addEventListener('click',esconderInput);