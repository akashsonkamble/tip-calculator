function formatMoney(value){
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "₹ " + value;
}

function formatSplit(value){
    if(value == 1) return value + " person";
    return value + " people"
}

function update(){
    let yourBill = parseInt(document.getElementById('your-bill').value);
    let tipPercent = document.getElementById('tip-input').value;
    let split = document.getElementById('split-input').value;

    let tipValue = yourBill * (tipPercent / 100);
    let tipEach = tipValue / split;
    let newBillEach = ( yourBill + tipValue ) / split;


    document.getElementById('tip-percent').innerText = tipPercent + '%';
    document.getElementById('tip-value').innerText = formatMoney(tipValue);
    document.getElementById('total-with-tip').innerText = formatMoney(yourBill + tipValue);
    
    document.getElementById('split-value').innerText = formatSplit(split);
    document.getElementById('bill-each').innerText = formatMoney(newBillEach);
    document.getElementById('tip-each').innerText = formatMoney(tipEach);
}

let container = document.getElementById('container');
container.addEventListener('input', update);
