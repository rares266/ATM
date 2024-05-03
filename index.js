const CORRECT_PIN = '1234';
let balance = 50;

// ----- BUTONUL ENTER ----- // 
const enterButton = document.getElementById('enter-button');
enterButton?.addEventListener('click', () => {
    const input = document.getElementById('pin-input');
    if (input instanceof HTMLInputElement) {
    const pin = input?.value;
        if(pin === CORRECT_PIN){
            //afisare panou de actiuni
            console.log('correct PIN');
            const actionSection = document.getElementById('actions-section');
            actionSection?.classList.remove('hidden');
            //ascunde panoul de introducere
            const pinSection = document.getElementById('pin-section');
            pinSection?.classList.add('hidden');
            //schimba subtitlul
            const subtitle = document.getElementById('subtitle');
            if(subtitle){
                subtitle.textContent = 'AVAILABLE OPERATIONS';
            }
        }else{
            alert('incorrect PIN');
        }
    }else{
        console.log('input is not an HTMLInputElement');
    }
})
// ----- BUTONUL CANCEL ----- // 
const cancelButton = document.getElementById('cancel-button');
cancelButton?.addEventListener('click', () => {
            //afisare panou de actiuni
            const actionSection = document.getElementById('actions-section');
            actionSection?.classList.add('hidden');
            //ascunde panoul de introducere
            const pinSection = document.getElementById('pin-section');
            pinSection?.classList.remove('hidden');
             //schimba subtitlul
            const subtitle = document.getElementById('subtitle');
            if(subtitle){
            subtitle.textContent = 'PLEASE AUTHENTICATE';
            }
})
// ----- BUTONUL BALANCE ----- // 
const balanceButton = document.getElementById('balance-button');
balanceButton?.addEventListener('click', () => {
    const systemMessage = document.getElementById('system-message');
    if(systemMessage){
        systemMessage.textContent = `AVAILABLE BALANCE: ${balance}`;
        systemMessage.classList.remove('info');
        systemMessage.classList.remove('error');
        systemMessage.classList.add('success');
    }
})
// ----- BUTONUL DEPOZIT ----- // 
const depozitButton = document.getElementById('deposit-button');
depozitButton?.addEventListener('click', () => {
    const amount = prompt('Please enter the amount you want to deposit'); 
    if(amount){
        balance += parseInt(amount);
    }
    const systemMessage = document.getElementById('system-message');
    if(systemMessage){
        systemMessage.textContent = `${amount} EUR DEPOSITED. AVAILABLE BALANCE: ${balance} EUR`;
        systemMessage.classList.remove('info');
        systemMessage.classList.remove('error');
        systemMessage.classList.add('success');
    }
})
// ----- BUTONUL WITHDRAW ----- // 
const withdrawButton = document.getElementById('withdraw-button');
withdrawButton?.addEventListener('click', () => {
    const amount = prompt('Please enter the amount you want to withdraw');
    if(amount){
        if(balance >= parseInt(amount)){ 
            balance -= parseInt(amount);
            const systemMessage = document.getElementById('system-message');
            if(systemMessage){
                systemMessage.textContent = `${amount} EUR WITHDRAWN. AVAILABLE BALANCE: ${balance} EUR`;
                systemMessage.classList.remove('info');
                systemMessage.classList.remove('error');
                systemMessage.classList.add('success');
            }
        }else{
            const systemMessage = document.getElementById('system-message');
            if(systemMessage){
                systemMessage.textContent = `INSUFFICIENT FUNDS!`;
                systemMessage.classList.remove('info');
                systemMessage.classList.add('error');
                systemMessage.classList.remove('success');
            }
        }
    }
})