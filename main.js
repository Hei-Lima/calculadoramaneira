function iniciar() {
  const restoDiv = document.getElementById("resto");

  // Gradually increase opacity over time (optional)
  let currentOpacity = 0;
  const intervalId = setInterval(() => {
    currentOpacity += 0.1;
    restoDiv.style.opacity = Math.min(currentOpacity, 1); // Clamp to 1

    if (currentOpacity >= 1) {
      clearInterval(intervalId);
    }
  }, 50); // Adjust interval for desired fade speed (lower for faster)

  // OR (immediate opacity change)
  // restoDiv.style.opacity = 1;

  // Obtém o elemento do botão
  const botao = document.getElementById('iniciar');

  // Define a opacidade inicial do botão como 1
  botao.style.opacity = 1;

  // Cria um intervalo para diminuir a opacidade gradualmente
  const intervalo = setInterval(() => {
    let opacidade = botao.style.opacity;
    if (opacidade > 0) {
      botao.style.opacity = parseFloat(opacidade) - 0.05;
    } else {
      clearInterval(intervalo);
      botao.parentNode.removeChild(botao);
    }
  }, 20);
 {
    // Cria um novo elemento de áudio
    const audio = new Audio('audio1.mp3');
    audio.loop = true;
    // Reproduz o áudio
    audio.play();
  }
  
}




// Play audio1.mp3 on page load
window.onload = function() {
  const audio1 = new Audio('audio1.mp3');
  audio1.play();
};

function pausar() {
  // Obtém o elemento de áudio criado anteriormente
  const audio = document.getElementById('audio1.mp3');

  // Se o áudio estiver tocando, pausa-o
  if (audio && !audio.paused) 
    audio.pause();
}
function calculateResult()


{
  const x1 = parseInt(document.getElementById('x1').value);
  const x2 = parseInt(document.getElementById('x2').value);
  const operator = document.getElementById('operador').value;
  const y1 = parseInt(document.getElementById('y1').value);
  const y2 = parseInt(document.getElementById('y2').value);

  let result;
  switch (operator) {
    case '+':
      result = (x1 * 10 + x2) + (y1 * 10 + y2);
      break;
    case '-':
      result = (x1 * 10 + x2) - (y1 * 10 + y2);
      break;
    case '*':
      result = (x1 * 10 + x2) * (y1 * 10 + y2);
      break;
    case '/':
      if (y1 === 0 && y2 === 0) {
        result = 'Erro: Divisão por zero';
      } else {
        result = (x1 * 10 + x2) / (y1 * 10 + y2);
      }
      break;
    case '^':
      result = Math.pow(x1 * 10 + x2, y1 * 10 + y2);
      break;
    default:
      result = 'Operação inválida';
  }


  const audio = document.getElementById('audio1');
  if (audio) {
    audio.pause();
  }
  
  // Create a temporary div for the result
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('result');
  resultDiv.textContent = result;

  // Get the body element
  const body = document.body;
  

  // Play audio2.mp3 on button click
  const audio2 = new Audio('audio2.mp3');
  audio2.play();


  const restoDiv = document.getElementById('resto');
  if (restoDiv) {
    restoDiv.parentNode.removeChild(restoDiv);
  }

  // Make the entire screen white with a 3-second delay and show result with floating animation
  setTimeout(function() {
    body.style.backgroundColor = 'white';
    body.appendChild(resultDiv);
    resultDiv.style.animation = 'float 1s ease-in-out infinite';
  }, 2400);
}