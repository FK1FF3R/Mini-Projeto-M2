const usuario = {
    nome: '',
    email: '',
    peso: '',
    altura: '',
    idade: '',
    telefone: '',
    genero: '',
    IMC: '',
    setNome: function(nome) {
        this.nome = nome;
    },
    setEmail: function(email) {
        this.email = email;
    },
    setPeso: function(peso) {
        this.peso = peso;
    },
    setAltura: function(altura) {
        this.altura = altura;
    },
    setIdade: function(idade) {
        this.idade = idade;
    },
    setTelefone: function(telefone) {
        this.telefone = telefone;
    },
    setGenero: function(genero) {
        this.genero = genero;
    },
    calcIMC: function() {
        this.IMC = this.peso / (this.altura ** 2);
    },
    getDadosUsuario: function() {
        return `Os dados do usuario são: nome: ${this.nome}, idade: ${this.idade}, telefone: ${this.telefone}, email: ${this.email}`;        
    }
};

// usuario.setNome(document.getElementById(`nome`).value);
// usuario.setEmail(document.getElementById(`email`).value);
// usuario.setPeso(document.getElementById(`peso`).value);
// usuario.setAltura(document.getElementById(`altura`).value);
// usuario.setIdade(document.getElementById(`idade`).value);
// usuario.setTelefone(document.getElementById(`telefone`).value);
// usuario.setGenero(document.getElementById(`genero`).value);

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;
    const genero = document.getElementById('genero').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    usuario.setNome(nome);
    usuario.setIdade(idade);
    usuario.setPeso(peso);
    usuario.setAltura(altura);
    usuario.setGenero(genero);
    usuario.setEmail(email);
    usuario.setTelefone(telefone);

    usuario.calcIMC();
});

const ficarVerde = () =>{
    const verde = document.getElementById(`enviar`);

    const corOriginal = verde.style.backgroundColor;
    const corTextoOriginal = verde.style.color;

    verde.style.backgroundColor = `green`;
    verde.style.color = `white`;
    verde.style.transition = `.5s`;

    setTimeout(() => {
        verde.style.backgroundColor = corOriginal;
        verde.style.color = corTextoOriginal;
    }, 500);
}

const ficarVermelho = () =>{
    const vermelho = document.getElementById(`apagar`);

    const corOriginal = vermelho.style.backgroundColor;
    const corTextoOriginal = vermelho.style.color;

    vermelho.style.backgroundColor = `red`;
    vermelho.style.color = `white`;
    vermelho.style.transition = `.5s`;

    setTimeout(() => {
        vermelho.style.backgroundColor = corOriginal;
        vermelho.style.color = corTextoOriginal;
    }, 500);
}

const ficarAzul = () =>{
    const azul = document.getElementById(`editar`);

    const corOriginal = azul.style.backgroundColor;
    const corTextoOriginal = azul.style.color;

    azul.style.backgroundColor = `blue`;
    azul.style.color = `white`;
    azul.style.transition = `.5s`;

    setTimeout(() => {
        azul.style.backgroundColor = corOriginal;
        azul.style.color = corTextoOriginal;
    }, 500);
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    function showModal(message) {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = message;
        modal.style.display = 'flex';

        document.getElementById('close-modal').onclick = function() {
            modal.style.display = 'none';
        };
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    if (nome && email && telefone) {
        usuario.setNome(nome);
        usuario.setEmail(email);
        usuario.setTelefone(telefone);
        usuario.calcIMC();

        showModal(`Cadastro realizado com sucesso! Seu IMC é: ${usuario.IMC.toFixed(2)}. Estamos preparando o melhor cardapio de acordo com seu biotipo.`);
    } else {
        showModal("Erro! Por favor, preencha os campos obrigatórios.");
    }
});
