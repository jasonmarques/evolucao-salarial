document.getElementById('calculate').addEventListener('click', function(){
    const value = parseFloat(document.getElementById('value').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const fee = (parseFloat(document.getElementById('fee').value)) / 100;
    const time = parseInt(document.getElementById('time').value);

    const total = value * Math.pow((1 + fee), time) + value2 * (((Math.pow((1 + fee), time)) - 1) / fee);

    document.getElementById('total').innerHTML = "R$ " + total.toFixed(2).replace('.', ',');
});
