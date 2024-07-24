document.body.addEventListener('keypress', handleKeyPress);

let passwordBuffer = '';

function handleKeyPress(event) {
  passwordBuffer += event.key;
  if (passwordBuffer.includes('1234')) {
    passwordBuffer = '';  // Reset the buffer after successful input
    openPointsPopup();
  }
}

function openPointsPopup() {
  const house = prompt('기숙사 이름을 입력하세요 (그리핀도르, 후플푸프, 슬리데린, 래번클로):');
  const points = parseInt(prompt('추가할 점수를 입력하세요:'), 10);
  if (isNaN(points)) {
    alert('유효한 점수를 입력하세요.');
    return;
  }
  addPoints(house, points);
}

function addPoints(house, points) {
  let scoreElement, sandElement;
  switch(house) {
    case '그리핀도르':
      scoreElement = document.getElementById('gryffindor-score');
      sandElement = document.getElementById('gryffindor-sand');
      break;
    case '후플푸프':
      scoreElement = document.getElementById('hufflepuff-score');
      sandElement = document.getElementById('hufflepuff-sand');
      break;
    case '슬리데린':
      scoreElement = document.getElementById('slytherin-score');
      sandElement = document.getElementById('slytherin-sand');
      break;
    case '래번클로':
      scoreElement = document.getElementById('ravenclaw-score');
      sandElement = document.getElementById('ravenclaw-sand');
      break;
    default:
      alert('잘못된 기숙사 이름입니다.');
      return;
  }

  let currentScore = parseInt(scoreElement.textContent, 10);
  currentScore += points;
  scoreElement.textContent = currentScore;

  let sandHeight = (currentScore / 3000) * 100;
  sandElement.innerHTML = '';  // Clear previous icons

  for (let i = 0; i < sandHeight; i++) {
    let icon = document.createElement('div');
    icon.classList.add('icon');
    sandElement.appendChild(icon);
  }
}
