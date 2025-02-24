let secretNumber = generateSecretNumber();

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
    console.log(kick == secretNumber);
}

// Funbção que gera o número secreto
function generateSecretNumber(){
    return parseInt(Math.random() * 10 + 1);
}