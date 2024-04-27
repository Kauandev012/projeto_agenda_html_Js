const form = document.getElementById('form-agenda');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('Nomecontato');
    const inpoutNumeroContato = document.getElementById('Numerocontato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value} </td>`;
    linha += `<td>${inpoutNumeroContato.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inpoutNumeroContato.value ='';

});