
import './styles.css';
console.log('Ready to Party With Some TypeScript!');


const buttons = document.querySelectorAll('.button') as NodeListOf<HTMLButtonElement>;
const billAmount = document.getElementById('billAmount') as HTMLTextAreaElement;
const billAmount1 = document.getElementById('billAmount1') as HTMLTextAreaElement;
const tipPercentage = document.getElementById('tipPercentage') as HTMLTextAreaElement;
const tipAmount = document.getElementById('tipAmount') as HTMLTextAreaElement;
const totalAmount = document.getElementById('totalAmount') as HTMLTextAreaElement;


let currentbutton = 1;
buttons.forEach(bt => {
    bt.addEventListener('click', handleClick);
    currentbutton++;
});

function clickButtonAndUpdatefields(buttonId: string) {
    const buttonClicked = document.getElementById(buttonId) as HTMLButtonElement;
    buttonClicked.className = 'clicked';
    localStorage.setItem('selectedButtonId', buttonId);
    document.getElementById('lbpcnt').innerText = 'You are tipping ' + buttonClicked.innerText;
    billAmount1.value = 'Bill Amount: $' + + checkValue(billAmount.value);
    tipPercentage.value = 'Tip Percentage: ' + buttonClicked.innerText;
    tipAmount.value = 'Amount of tip: $' + (checkValue(billAmount.value) * parseFloat(buttonClicked.innerText) * .01);
    totalAmount.value = 'Total to be Paid: $' +
        (checkValue(billAmount.value) + checkValue(billAmount.value) * parseFloat(buttonClicked.innerText) * .01);
}

function handleClick() {
    buttons.forEach(btreset => {
        btreset.className = 'unclicked';
    });
    const that = this as HTMLButtonElement;
    clickButtonAndUpdatefields(that.id);
}
function checkValue(inputstring: string): number {
    const x = parseFloat(inputstring);
    if (isNaN(x) || x == null) { return 0; } else { return x; }
}

clickButtonAndUpdatefields(localStorage.getItem('selectedButtonId'));


document.getElementById('billAmount').addEventListener('focusout', setDefaultButtonClick);

function setDefaultButtonClick() {
    clickButtonAndUpdatefields(localStorage.getItem('selectedButtonId'));
}

