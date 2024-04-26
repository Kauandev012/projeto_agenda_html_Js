const form = document.getElementById(`form-agenda`);
form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    const inputnomecontato = document.getElementById(`Nomecontato`);
    const inpoutnumerocontato = document.getElementById(`Numerocontato`);

    alert(`Nome: ${inputnomecontato.value} - numero: ${inpoutnumerocontato.value}`);
});