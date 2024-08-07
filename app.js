// Array para armazenar os contatos
let contatos = [];

// Função para atualizar a listagem de contatos
function atualizarLista() {
    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';

    contatos.forEach((contato, index) => {
        const li = document.createElement('li');
        li.textContent = `${contato.nome} - ${contato.telefone} - ${contato.email}`;
        
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarContato(index);

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirContato(index);
        
        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);
        listaContatos.appendChild(li);
    });
}

// Função para adicionar um novo contato
document.getElementById('contatoForm').onsubmit = function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    
    contatos.push({ nome, telefone, email });
    atualizarLista();
    document.getElementById('contatoForm').reset();
};

// Função para editar um contato
function editarContato(index) {
    const contato = contatos[index];
    document.getElementById('nome').value = contato.nome;
    document.getElementById('telefone').value = contato.telefone;
    document.getElementById('email').value = contato.email;
    
    contatos.splice(index, 1);
    atualizarLista();
}

// Função para excluir um contato
function excluirContato(index) {
    contatos.splice(index, 1);
    atualizarLista();
}

// Função para buscar contatos
document.getElementById('buscar').oninput = function() {
    const termo = this.value.toLowerCase();
    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';

    contatos
        .filter(contato => contato.nome.toLowerCase().includes(termo) || contato.telefone.includes(termo) || contato.email.toLowerCase().includes(termo))
        .forEach((contato, index) => {
            const li = document.createElement('li');
            li.textContent = `${contato.nome} - ${contato.telefone} - ${contato.email}`;
            
            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = () => editarContato(index);

            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.onclick = () => excluirContato(index);
            
            li.appendChild(btnEditar);
            li.appendChild(btnExcluir);
            listaContatos.appendChild(li);
        });
};
