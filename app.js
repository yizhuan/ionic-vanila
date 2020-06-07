const reasonInput=document.querySelector('#input-reason');
const amountInput=document.querySelector('#input-amount');

const cancelbtn=document.querySelector('#btn-cancel');
const confirmbtn=document.querySelector('#btn-confirm');

const expenseList=document.querySelector('#expense-list');

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmbtn.addEventListener('click',() => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    console.log('reason: '+enteredReason);
    console.log('amount: '+enteredAmount);

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': ' +enteredAmount;

    expenseList.appendChild(newItem);

    clear();
});

cancelbtn.addEventListener('click',clear);