const descricaoInput = document.querySelector('#input-descricao');
const valorInput = document.querySelector('#input-valor');
const cancelarBtn = document.querySelector('#btn-cancelar');
const salvarBtn = document.querySelector('#btn-salvar');
const listaDeDespesas = document.querySelector('#list-despesas');
const totalDeDespesasInformada = document.querySelector('#total-despesas');
const aviso = document.querySelector('ion-alert-controller');

let totalDeDespesas = 0;


const limparFormulario = () => {

    descricaoInput.value = '';
    valorInput.value = '';

};


salvarBtn.addEventListener('click', () => {

    const descricaoInformada = descricaoInput.value;
    const valorInformado = valorInput.value;

    if (descricaoInformada.trim().lenth <= 0 || valorInformado.trim().lenth <= 0 || valorInformado <= 0) {
        
        aviso.create({
            message: 'Descrição e/ou Valor inválido(s)!',
            header: 'Aviso',
            buttons: ['Fechar']
        }).then(alertElemnt => {
            alertElemnt.present();
        });

        return;

    }
    
    const novaDespesa = document.createElement('ion-item');
    novaDespesa.textContent = descricaoInformada + ': R$ ' + valorInformado;

    listaDeDespesas.appendChild(novaDespesa);

    totalDeDespesas += +valorInformado;
    totalDeDespesasInformada.textContent = totalDeDespesas;

    limparFormulario();

});

cancelarBtn.addEventListener('click', limparFormulario);