document.getElementById('btn-apply-1').addEventListener('click', function () {
    const couponText = getCouponCode('coupon-field');

    if(couponText === 'DISC30'){
        const getMainPrice = getAmount('price-field-1');
        const afterDiscountPrice = getDiscountAmount(getMainPrice);
        setTextElementValueById('payable-1',afterDiscountPrice);
    }else{
        alertDescription();
        setTextElementValueById('payable-1',getMainPrice);
    }
    document.getElementById('btn-payment').addEventListener('click', function () {
        alertMessage();
        setTextElementValueById('payable-1','00'); 
    })
})