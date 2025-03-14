let secretNumber = generateSecretNumber();
let attempt = 1;

// Função que exibe um texto em uma tag HTML
function displayTextOnScreen(tag, text){ 
    let element = document.querySelector(tag)
    element.innerHTML = text;  
}

displayTextOnScreen('h1', 'Jogo do Número Secreto');
displayTextOnScreen('p', 'Escolha um número de 1 a 10');

// Verifca no console se o botão foi clicado
function verifyKick()
{
    let kick = document.querySelector('input').value;
   
    if(kick == secretNumber){
        displayTextOnScreen('h1', 'VOCÊ ACERTOU!!!');
        attemptWord = attempt > 1 ? 'Tentativas' : 'Tentativa';
        let attemptMenssage = `Você acertou o número com ${attempt} ${attemptWord}`;
        displayTextOnScreen('p', attemptMenssage);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else if(kick < secretNumber){
        displayTextOnScreen('p', 'O número secreto é maior');
    } else {
        displayTextOnScreen('p', 'O número secreto é menor');
    }
    attempt++;
    cleanCamp();
}

// Funbção que gera o número secreto
function generateSecretNumber(){
    return parseInt(Math.random() * 10 + 1);
}

function cleanCamp() {
    kick = document.querySelector('input');
    kick.value = '';
}