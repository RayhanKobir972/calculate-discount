document.getElementById('btn-apply').addEventListener('click', function () {
    const newTotalAmount = getAmount('price-field');
    const discountedAmount = getDiscountAmount(newTotalAmount);
    setTextElementValueById('payable',discountedAmount);  
})

document.getElementById('btn-pay').addEventListener('click', function () {
    alertMessage();
    setTextElementValueById('payable','00')  
})