const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const resultado = document.getElementById("resultado")

function imc() {
    resultados.value = (parseFloat(altura.value) * parseFloat(peso.value)) /2
    formulario.classList.add("red")    
}
resultado.addEventListener("click", imc)