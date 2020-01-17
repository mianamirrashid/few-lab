
import './styles.css';
console.log('Ready to Party With Some TypeScript!');


const buttons = document.querySelectorAll('.button') as NodeListOf<HTMLButtonElement>;


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
    document.getElementById('lbpcnt').innerText = 'You are tipping '
    + that.innerText ;
    // that.removeEventListener('click', handleClick);

}
