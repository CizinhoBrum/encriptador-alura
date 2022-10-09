const inputTexto = document.querySelector(".text-input");
const mensagem = document.querySelector("#texto2");
const criptografa = document.querySelector("#btn-encriptar");
const descriptografa = document.querySelector("#btn-desencriptar");
const img = document.querySelector("#imgDir");
const texto = document.querySelector("#texto");
const copiado = document.querySelector("#copiar");

criptografa.addEventListener ("click", function(){

    img.style.display = "none";
    texto.style.display = "none";
    copiado.style.display = "show";
    copiado.style.display = "inherit";
})

function copiar() {  
    copyText = document.getElementById("texto2");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    inputTexto.value = "";
    alert("Texto copiado!");
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
