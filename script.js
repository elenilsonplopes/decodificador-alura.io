const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
console.table(matrizCodigo);

function bEn() {
    const textEncriptado = encriptar(textArea.value);
    mensagem.value = textEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function bDe() {
    const textDesencriptado = desencriptar(textArea.value);
    mensagem.value = textDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}