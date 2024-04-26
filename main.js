const form = document.getElementById('form-agenda');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomecontato = document.getElementById('Nomecontato');
    const inpoutNumerocontato = document.getElementById('Numerocontato');

    let linha = '<tr>';
    linha += `<td>${inputNomecontato.value} </td>`;
    linha += `<td>${inpoutNumerocontato.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputNomecontato.value = '';
    inpoutNumerocontato.value ='';

});