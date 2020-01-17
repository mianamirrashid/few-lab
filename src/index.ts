
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
    // bt.className = 'unclicked';
    
    bt.addEventListener('click', handleClick);
    currentbutton++;
});

function handleClick() {
    buttons.forEach(btreset => {
        btreset.className = 'unclicked';
    });

    const that = this as HTMLButtonElement;
    that.className = 'clicked';
    document.getElementById('lbpcnt').innerText = 'You are tipping ' + that.innerText ;
    
    billAmount1.value = 'Bill Amount: $' +  + billAmount.value;
    
    //'Bill Amount: $' + 
    //document.getElementById('billAmount').innerText);
    //document.getElementById('tipPercentage').value = 'Tip Percentage: ' + that.innerText;

}
