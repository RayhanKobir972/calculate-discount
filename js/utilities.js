function getAmount(discountId){
    const priceField = document.getElementById(discountId);
    const priceString = priceField.innerText;
    const price = parseFloat(priceString);
    return price;
    
}
function getDiscountAmount(amount){
    const newPrice =(amount - (amount * (30 / 100))); 
    return newPrice;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText= newValue;
}

function getCouponCode(couponId){
    const couponText = document.getElementById(couponId);
    const couponString = couponText.value;
    return couponString;
}

function alertMessage(){
    alert("Payment Success");
}
function alertDescription(){
    alert('Wrong Coupon Code');
}

