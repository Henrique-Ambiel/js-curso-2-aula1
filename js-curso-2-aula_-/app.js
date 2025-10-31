let secretNumber = generateSecretNumber();
let attempt = 1;

// Função que exibe um texto em uma tag HTML
function displayTextOnScreen(tag, text){ 
    let element = document.querySelector(tag)
    element.innerHTML = text;  
}

// Função que imprime o título e a instrução do jogo
function printSecretNumber(){
    displayTextOnScreen('h1', 'Jogo do Número Secreto');
    displayTextOnScreen('p', 'Escolha um número de 1 a 10');
}

printSecretNumber();

// Verifca no console se o botão foi clicado
function verifyKick()
{
    let kick = document.querySelector('input').value;
   
    if(kick == secretNumber){ //Se o número digitado for igual ao número secreto
        displayTextOnScreen('h1', 'VOCÊ ACERTOU!!!');
        attemptWord = attempt > 1 ? 'Tentativas' : 'Tentativa';
        let attemptMenssage = `Você acertou o número com ${attempt} ${attemptWord}`;
        displayTextOnScreen('p', attemptMenssage);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else if(kick < secretNumber){ //Se o número digitado for menor que o número secreto
        displayTextOnScreen('p', 'O número secreto é maior');
        cleanCamp();
    } else { //Se o número digitado for maior que o número secreto
        displayTextOnScreen('p', 'O número secreto é menor');
        cleanCamp();
    }
    attempt++;
}

// Função que gera o número secreto
function generateSecretNumber(){
    return parseInt(Math.random() * 10 + 1);
}

//Função que limpa o campo de input
function cleanCamp() {
    kick = document.querySelector('input');
    kick.value = '';
}

// Função que reinicia o jogo
function restartGame(){
    attempt = 1;
    secretNumber = generateSecretNumber();
    printSecretNumber();
    cleanCamp();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}