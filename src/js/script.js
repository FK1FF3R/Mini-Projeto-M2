function pegarDados(mandarDados){
    let nome = document.getElementById(`nome`);
    let idade = document.getElementById(`idade`);
    let peso = document.getElementById(`peso`);
    let altura = document.getElementById(`altura`);
    mandarDados(peso, altura, idade, nome);
}

const IMC = (peso, altura) => {
    const IMC = (peso / altura);
}

const imprimirDados = (IMC, nome) => {
    console.log(`O imc de ${nome} e ${IMC}`)
}

button.addEventListener(`click`, ()=>{
    pegarDados();
})

imprimirDados(IMC(), pegarDados());