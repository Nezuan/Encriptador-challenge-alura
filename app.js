document.getElementById("boton_copy").style.visibility = "hidden";
document.getElementById("div_parrafo").style.display ="none"

function validarTexto(texto) {
    // Convertir a minúsculas y eliminar caracteres no permitidos
    return texto.toLowerCase().replace(/[^a-z\s]/g, '');
}

function encriptarTexto(texto){
    //Validando el texto
    texto = validarTexto(texto)

    //Estableciendo el mapeo de vocales a palbras
    let llavesDeEncriptacion = {
        "a" : "ai",
        "e" : "enter",
        "i" : "imes",
        "o" : "ober",
        "u" : "ufat"
    }
    //Iniciando una variable para el texto ya encriptado
    var textoEncriptado ="";
    
    //Recorrer cada carácter del texto
    for(let i = 0; i < texto.length; i++){
        let caracter = texto[i];

        //Si el carácter es una vocal, remplazarlo según el codigo de encriptacion
        if(llavesDeEncriptacion[caracter]){
            textoEncriptado += llavesDeEncriptacion[caracter];
        }else{
            //Si no es una vocal añadir el caracter tal cual
            textoEncriptado += caracter;
        }
    }

    return textoEncriptado;
}


function procesarEncriptado() {
    // Obtener el valor del input
    const textoInput = document.getElementById('a_encriptar').value;

    // Encriptar el texto
    const textoEncriptado = encriptarTexto(textoInput);

    //Ocultar imagen y mostrar resultado de encriptación
    if(textoEncriptado){
        document.getElementById("div_imagen").style.display = "none";
        document.getElementById("boton_copy").style.visibility = "visible";
        document.getElementById("div_parrafo").style.display = "block";
    }
    let textoAMostrar = document.getElementById("resultado");
    textoAMostrar.innerHTML = textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    // Definir el mapeo inverso de palabras a vocales
    let llavesDeDesincreptación = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Reemplazar cada palabra encriptada por su vocal correspondiente
    for (const [palabra, vocal] of Object.entries(llavesDeDesincreptación)) {
        const regex = new RegExp(palabra, 'g');
        textoEncriptado = textoEncriptado.replace(regex, vocal);
    }

    return textoEncriptado;
}

function procesarDesencriptado() {
    // Obtener el valor del input
    const textoEncriptado = document.getElementById('a_encriptar').value;

    // Desencriptar el texto
    const textoDesencriptado = desencriptarTexto(textoEncriptado);

    //Ocultar imagen y mostrar resultado de encriptación
    if(textoDesencriptado){
        document.getElementById("div_imagen").style.visibility = "hidden";
        document.getElementById("div_parrafo").style.display = "block";
    }

    let textoAMostrar = document.getElementById("resultado");
    textoAMostrar.innerHTML = textoDesencriptado;
}

var textoACopiar = document.getElementById("resultado");

function copiarTexto(){
    navigator.clipboard.writeText(textoACopiar.innerHTML);
}


