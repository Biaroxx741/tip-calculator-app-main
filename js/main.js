const bill_input = document.getElementById('bill-input');
const custom_tip_input = document.getElementById('custom-tip');
const people_input = document.getElementById('people-input');
const people_error = document.querySelector('.people__error-text');
const tip_amount_text = document.getElementById('tip-amount-text');
const total_amount_text = document.getElementById('total-amount-text');
const tips_btns = document.querySelector('.tips-container').children;
let tip_val = 0;

function reset() {
    bill_input.value = '';
    custom_tip_input.value = '';
    people_input.value = '';
    tip_amount_text.textContent = '$0.00';
    total_amount_text.textContent = '$0.00';
    tip_val = 0;
    setTipsBtnsBackgroundToNormal();
    people_input.classList.remove('input-error');
    people_error.style.display = 'none';
}

function setTipsBtnsBackgroundToNormal() {
    for (let i = 0; i < tips_btns.length-1; i++) {
        const btn = tips_btns[i];
        btn.classList.remove('tip-clicked');
    }
}

function setTip(btn,tip) {
    setTipsBtnsBackgroundToNormal();
    if(btn != null){
        btn.classList.add('tip-clicked');
        custom_tip_input.value = '';
    }
    tip_val = tip;
    checkCalc();
}

function calculateValues() {
    let bill = Number(bill_input.value);
    let people = Number(people_input.value);
    let tip_amount = (tip_val / 100) * bill;
    let tip_per_person = tip_amount / people;
    let total_per_person = (tip_amount + bill) / people;
    tip_amount_text.innerHTML = '$' + Math.round(tip_per_person * 100) / 100;
    total_amount_text.innerHTML = '$' + Math.round(total_per_person * 100) / 100;
}

function checkCalc() {
    if(Number(bill_input.value != 0) && tip_val != 0 && Number(people_input.value) != 0){
        calculateValues();        
    }
}

function checkEmpty() {
    if(Number(people_input.value) === 0){
        people_input.classList.add('input-error');
        people_error.style.display = 'block';
    }else{
        people_input.classList.remove('input-error');
        people_error.style.display = 'none';
    }
}