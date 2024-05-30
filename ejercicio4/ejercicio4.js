function calcularimc() {
    let peso = parseFloat(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);
    let imc = peso / (estatura * estatura);
    alert("Tu IMC es:" + imc);
} 