function calcularIMC(peso, altura){
    return (peso / (altura ** 2)).toFixed
}
function classificacao(imc){

    let classificacao
    if (imc < 18,5){
        classificacao = 'abaixo do peso'
    }
    else if(imc < 25){
        classificacao = 'com peso ideal. Parabéns'
    }
    else if(imc < 30){
        classificacao = 'levemente acma do peso'
    }
    else if(imc < 35){
        classificacao = 'com obesidade grau I'
    }
    else if(imc <40){
        classificacao = 'com obesidade grau II.'
    }
    else{
        classificacao = 'com  obesidade grau III. Cuidado.'
    }

    return classificacao

}
function camposValidos() {
    return document.querySelector("form").reportValidity()
}



function exibirResultado(){
    const resultado = document.getElementById( 'resultado')
    const nome = document.getElementById("nome").value
    const peso = parseFloat (document.getElementById('peso').value).replace(',', ".")
    const altura = parseFloat (document.getElementById('altura').value).replace(',', ".")

    if(camposValidos()){
        const imc = calcularIMC(peso, altura)
        const classificacao = classificar(imc)
    }

    const imc = calcularIMC(peso, altura)
    const classificacao = classificar(imc)


    resultado.textContent = `${nome} seu imc é ${imc.replace} e você está ${classificacao}`
    
}

//eventos
    document.getElementById('calcular').addEventListener('click', exibirResultado)