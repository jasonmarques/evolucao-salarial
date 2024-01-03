document.getElementById('calculate').addEventListener('click', function(){
    // Obter os valores dos campos
    const salary = parseFloat(document.getElementById('salary').value);
    const annualIncrease = parseFloat(document.getElementById('annualIncrease').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    // Validar se os campos foram preenchidos corretamente
    if (isNaN(salary) || isNaN(annualIncrease) || isNaN(years) || salary <= 0 || annualIncrease <= 0 || years <= 0) {
        alert("Por favor, preencha todos os campos corretamente com valores positivos.");
        return; // Impede a execução do código se os campos não estiverem preenchidos corretamente
    }

    // Realizar os cálculos
    let total = salary;
    let evolution = '';

    for (let i = 1; i <= years; i++) {
        total = total * (1 + annualIncrease);
        evolution += `Ano ${i}: R$ ${total.toFixed(2).replace('.', ',')}<br>`;
    }

    // Ocultar os campos de entrada
    document.getElementById('input_box').style.display = 'none';

    // Exibir apenas o resultado
    document.getElementById('result').innerHTML = evolution;

    // Ocultar o botão "Calcular"
    document.getElementById('calculate').style.display = 'none';

    // Exibir o botão "Voltar"
    document.getElementById('return').style.display = 'inline-block';
});

document.getElementById('return').addEventListener('click', function(){
    // Mostrar novamente os campos de entrada e ocultar o resultado
    document.getElementById('input_box').style.display = 'flex';
    document.getElementById('result').innerHTML = '';

    // Ocultar o botão "Voltar"
    document.getElementById('return').style.display = 'none';

    // Exibir o botão "Calcular"
    document.getElementById('calculate').style.display = 'inline-block';
});
