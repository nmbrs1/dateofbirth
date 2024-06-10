const textElement = document.getElementById('text');
const ipElement = document.getElementById('ip-address');
const imageElement = document.getElementById('image');
let firstFade = true;
function fadeText() {
  textElement.style.opacity = 1;
  setTimeout(() => {
    textElement.style.opacity = 0;
    if (firstFade) {
      setTimeout(changeContent, 1000);
      firstFade = false;
    }
  }, 4000);
}
function fadeInImage() {
  imageElement.style.opacity = 1;
  imageElement.style.transform = "translate(-50%, -50%) scale(3)";
}
async function fetchIp() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    ipElement.textContent = data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    ipElement.textContent = 'упс';
  }
}
function playSoundEffect() {
  const soundEffect = document.getElementById('soundEffect');
  if (soundEffect) {
    soundEffect.play();
  } else {
    console.error("Sound effect element not found");
  }
}
function changeContent() {
  textElement.innerText = "у тебя сегодня день рождения и это очень круто";
  setTimeout(5000);
}
function changeContent2() {
  textElement.innerText = "у тебя сегодня день рождения и это очень круто\nзнаешь что еще круто?"
}
function startSequence() {
  document.getElementById('startButton').style.display = 'none';
  fadeText();
  setTimeout(fadeText, 5000);
  setTimeout(changeContent2, 7000)
  setTimeout(fetchIp, 12000);
  setTimeout(playSoundEffect, 12500)
  setTimeout(fadeInImage, 13000);
}
