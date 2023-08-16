document.getElementById('btn-apply').addEventListener('click',function(){
    const priceField = document.getElementById('price-field');
    const priceString = priceField.innerText;
    const price = parseFloat(priceString);

    const newPrice =(price - (price * (30 / 100)));

    const payablePrice = document.getElementById('payable');
    payablePrice.innerText = newPrice;
})

document.getElementById('btn-pay').addEventListener('click',function(){
    alert('Payment Success');

    const payablePrice = document.getElementById('payable');
    payablePrice.innerText = '00';
})