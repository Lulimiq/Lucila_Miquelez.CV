//Menu y enlaces de ancla
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false)
    {
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu al seleccionar una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Sobre mi: quiero que al clickar el icono aparezca el texto

 document.getElementById('per').addEventListener('click',function(){
     console.log ('capturamos el elemento click');
     document.getElementById('perfil').style.display='block';
 })

 document.getElementById('int').addEventListener('click',function(){
    console.log ('capturamos el elemento click');
    document.getElementById('intereses').style.display='block';
})

document.getElementById('ubi').addEventListener('click',function(){
    console.log ('capturamos el elemento click');
    document.getElementById('ubicacion').style.display='block';
})

//mis habilidades:al clickar el boton aparece la descripcion de cada habilidad
//HTML
document.getElementById('boton').onclick = function(){
    console.log ('capturamos el elemento click');
    document.getElementById('html').style.display='block';
}

//CSS
document.getElementById('boton2').onclick = function(){
    console.log ('capturamos el elemento click');
    document.getElementById('css').style.display='block';
}

//JavaScript
document.getElementById('boton3').onclick = function(){
    console.log ('capturamos el elemento click');
    document.getElementById('js').style.display='block';
}

//Rubi
document.getElementById('boton4').onclick = function(){
    console.log ('capturamos el elemento click');
    document.getElementById('rubi').style.display='block';
}

//informacion de contacto
document.getElementById('numero').onclick = function(){
    console.log ('capturamos el elemento click');
    document.getElementById('telefono').style.display='block';
}

document.getElementById('correo').onclick = function(){
    console.log ('capturamos el elemento click');
    document.getElementById('email').style.display='block';
}

document.getElementById('pagina').onclick = function(){
    console.log ('capturamos el elemento click');
    document.getElementById('pag').style.display='block';
}