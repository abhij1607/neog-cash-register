const billInput = document.querySelector('#bill-input');
const cashInput = document.querySelector('#cash-input');
const btnCheck = document.querySelector('#btn-check');
const errorDiv = document.querySelector('.error-handler');
const notesClassArray = document.querySelectorAll('.number');

btnCheck.addEventListener('click',validateInput);

// cashInput.addEventListener('keyup', a);

const notes = [2000,500,100,20,10,5,1];

// function a(){
//     let cashInp = cashInput.value;
//     console.log(cashInp);
// }
function showError(error) {
    errorDiv.innerHTML = error;
}
function removeError(){
    errorDiv.innerHTML="";
}
function clearDenominations() {
    for(let i = 0; i < notes.length; i++) {
        notesClassArray[i].innerText = "";
    }

}

function calcDenominations(billAmount,cashGiven) {
    let balanceCash = cashGiven - billAmount;
    for(i=0; i<notes.length; i++) {
        let numberOfNotes = Math.trunc(balanceCash/notes[i]);
        balanceCash = balanceCash % notes[i];
        notesClassArray[i].innerText = numberOfNotes;
    }

}

function validateInput() {
    clearDenominations();
    removeError();
    let billAmount = billInput.value;
    let cashGiven = cashInput.value;
    if(!billAmount) {
        showError('Enter the bill amount.');
    } else if(billAmount < 0 ) {
        showError('Bill amount cannot be negative');
    } else if(!cashGiven){
        showError('Please Hurry up and pay the cash');
    }
     else if(isNaN(billAmount) || isNaN(cashGiven)) {
        showError('Please enter values in number only');
    } else if(billAmount < 0 || cashGiven < 0) {
        showError('How did you end up with a negative amount?');
    } else if(Number(cashGiven) < Number(billAmount)) {
        showError("Please pay the full amount or Do you wanna wash plates here😉");
    } else {
        calcDenominations(billAmount,cashGiven);
    }
}