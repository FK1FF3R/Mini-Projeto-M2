class Usuario {
    constructor(nome, email, peso, altura, idade, telefone) {
        this.nome = nome || '';
        this.email = email || '';
        this.peso = peso || 0;
        this.altura = altura || 0;
        this.idade = idade || '';
        this.telefone = telefone || '';
        this.IMC = 0;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setEmail(email) {
        this.email = email;
    }

    setPeso(peso) {
        this.peso = peso;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }
    calcIMC() {
        this.IMC = this.peso / (this.altura ** 2);
    }  
}

// const usuarios = [];

// const usuario1 = new Usuario();
// const usuario2 = new Usuario();

const editarDados = () => {
    document.getElementById('nome').value = usuario.nome;
    document.getElementById('idade').value = usuario.idade;
    document.getElementById('peso').value = usuario.peso;
    document.getElementById('altura').value = usuario.altura * 100;
    document.getElementById('email').value = usuario.email;
    document.getElementById('telefone').value = usuario.telefone;
} 

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    usuario.setNome(nome);
    usuario.setIdade(idade);
    usuario.setPeso(peso);
    usuario.setAltura(altura);
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
    document.getElementById(`infos-usuario`).style.display = `none`;

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
    const telefone = document.getElementById('telefone').value;

    function showModal(message, borderColor) {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');

        modalMessage.textContent = message;
        modal.style.display = 'flex';

        document.getElementById(`modal-content`).style.borderColor = borderColor;

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
        // Mexer depois ////////////////////////////////////////////////////////////////////////////////////
        usuario.setIdade(idade);
        usuario.setPeso(peso);
        usuario.setAltura(altura);
        usuario.calcIMC();

        showModal(`Cadastro realizado com sucesso! ✔️`, `green`);
        document.getElementById(`infos-usuario`).style.display = `flex`;
        exibirDados(console.log);
    } else {
        showModal(`❌ Erro! Por favor, preencha os campos obrigatórios. ❌`, `red`);
    }
});

const exibirDados = () => {
    document.getElementById(`nomeUsuario`).innerHTML = usuario.nome;
    document.getElementById(`emailUsuario`).innerHTML = usuario.email;
    document.getElementById(`telefoneUsuario`).innerHTML = usuario.telefone;
    document.getElementById(`idadeUsuario`).innerHTML = usuario.idade;
    document.getElementById(`pesoUsuario`).innerHTML = usuario.peso;
    document.getElementById(`alturaUsuario`).innerHTML = usuario.altura;
    document.getElementById(`imcUsuario`).innerHTML = usuario.IMC.toFixed(2);
}
