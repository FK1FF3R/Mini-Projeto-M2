// Cria o objeto de usuário
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

// Cria a lista de usuários
let editIndex = null;

const usuarios = [];

// Cria a função de salvar usuário
const salvarUsuario = () => {
    const nome = document.getElementById(`nome`).value;
    const idade = document.getElementById(`idade`).value;
    const peso = parseFloat(document.getElementById(`peso`).value);
    const altura = parseFloat(document.getElementById(`altura`).value) / 100;
    const email = document.getElementById(`email`).value;
    const telefone = document.getElementById(`telefone`).value;

    if (nome && email && telefone && idade && peso && altura) {
        const usuario = new Usuario(nome, email, peso, altura, idade, telefone);
        usuario.calcIMC();
        usuarios.push(usuario);
        listarUsuarios();
        showModal(`Cadastro realizado com sucesso! ✔️`, `green`);
        limparFormulario();
    } else {
        showModal(`❌ Erro! Por favor, preencha os campos obrigatórios. ❌`, `red`);
    }
};

// Cria a funcao de listar usuários
const listarUsuarios = () => {
    const lista = document.getElementById(`lista-usuarios`);
    lista.innerHTML = ``;

    usuarios.forEach((usuario, index) => {
        const item = document.createElement(`li`);
        item.classList.add(`usuario-item`);

        const nomeSpan = document.createElement(`span`);
        nomeSpan.textContent = usuario.nome;

        const mostrarBtn = document.createElement(`button`);
        mostrarBtn.innerHTML = `<i class="bi bi-eye"></i>`;
        mostrarBtn.onclick = () => exibirDetalhesUsuario(index);
        mostrarBtn.classList.add(`mostrar-btn`);
        mostrarBtn.style.backgroundColor = `purple`;
        mostrarBtn.style.color = `var(--cor)`;

        const editarBtn = document.createElement(`button`);
        editarBtn.innerHTML = `<i class="bi bi-pencil-square"></i>`;
        editarBtn.onclick = () => editarDados(index);
        editarBtn.classList.add(`editar-btn`);
        editarBtn.style.backgroundColor = `blue`;
        editarBtn.style.color = `var(--cor)`;

        const deletarBtn = document.createElement(`button`);
        deletarBtn.innerHTML = `<i class="bi bi-trash"></i>`;
        deletarBtn.onclick = () => excluirUsuario(index);
        deletarBtn.classList.add(`deletar-btn`);
        deletarBtn.style.backgroundColor = `red`;
        deletarBtn.style.color = `var(--cor)`;

        item.appendChild(nomeSpan);
        item.appendChild(mostrarBtn);
        item.appendChild(editarBtn);
        item.appendChild(deletarBtn);
        lista.appendChild(item);
    });
};


// Cria a função para exibir o detalhes do usuário
const exibirDetalhesUsuario = (index) => {
    const usuario = usuarios[index];
    document.getElementById(`nomeUsuario`).textContent = usuario.nome;
    document.getElementById(`emailUsuario`).textContent = usuario.email;
    document.getElementById(`telefoneUsuario`).textContent = usuario.telefone;
    document.getElementById(`idadeUsuario`).textContent = usuario.idade || ` `;
    document.getElementById(`pesoUsuario`).textContent = usuario.peso || ` `;
    document.getElementById(`alturaUsuario`).textContent = usuario.altura || ` `;
    document.getElementById(`imcUsuario`).textContent = usuario.IMC.toFixed(2) || ` `;
    document.getElementById(`infos-usuario`).style.display = `block`;
};

// Cria a função para editar o usuário
const editarDados = (index) => {
    editIndex = index;
    const usuario = usuarios[index];
    document.getElementById(`nome`).value = usuario.nome;
    document.getElementById(`idade`).value = usuario.idade;
    document.getElementById(`peso`).value = usuario.peso;
    document.getElementById(`altura`).value = usuario.altura * 100;
    document.getElementById(`email`).value = usuario.email;
    document.getElementById(`telefone`).value = usuario.telefone;

    document.getElementById(`enviar`).style.display = `none`;
    document.getElementById(`salvar-alteracoes`).style.display = `inline-block`;
};

// Cria a função para salvar as alterações
const salvarAlteracoes = () => {
    if (editIndex === null) return;
    const usuario = usuarios[editIndex];

    usuario.setNome(document.getElementById(`nome`).value);
    usuario.setEmail(document.getElementById(`email`).value);
    usuario.setTelefone(document.getElementById(`telefone`).value);
    usuario.setIdade(document.getElementById(`idade`).value);
    usuario.setPeso(parseFloat(document.getElementById(`peso`).value));
    usuario.setAltura(parseFloat(document.getElementById(`altura`).value) / 100);

    usuario.calcIMC();
    listarUsuarios();
    showModal(`Alterações salvas com sucesso! ✔️`, `green`);
    limparFormulario();
};

// Cria a função para excluir o usuário
const excluirUsuario = (index) => {
    usuarios.splice(index, 1);
    listarUsuarios();
    showModal(`Usuário excluído com sucesso. ❌`, `red`);
};

// Cria a função para limpar o formulário depois de salvar
const limparFormulario = () => {
    document.getElementById(`formulario`).reset();
    document.getElementById(`enviar`).style.display = `inline-block`;
    document.getElementById(`salvar-alteracoes`).style.display = `none`;
    editIndex = null;
};

// Cria a função para mostrar o modal
const showModal = (message, color) => {
    const modal = document.getElementById(`modal`);
    const modalMessage = document.getElementById(`modal-message`);
    modalMessage.textContent = message;
    modalMessage.style.color = color;
    modal.style.display = `flex`;
    setTimeout(() => modal.style.display = `none`, 2000);
};

// Cria a função para enviar o formulário a partir do evento de submit
document.getElementById(`formulario`).addEventListener(`submit`, (event) => {
    event.preventDefault();
    document.getElementById('infos-interativas').style.display = `flex`;
    if (editIndex === null) {
        salvarUsuario();
    } else {
        salvarAlteracoes();
    }
});

// Cria as funções para transformar os botoes para vermelho, verde e azul 
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

// Cria a função para fechar o popUp
fecharPopUp = () =>{
    setTimeout(() => document.getElementById(`infos-usuario`).style.display = `none`, 300);
}