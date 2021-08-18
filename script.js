const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function imc() {
     resultado.value = (parseFloat(altura.value) * parseFloat(peso.value)) /2

}
calcular.addEventListener("click", imc)