    const textElement = document.getElementById('text');
    const ipElement = document.getElementById('ip-address');
    const backgroundElement = document.getElementById('background');
    const startButton = document.getElementById('startButton');
    const w = document.getElementById('w');
    let firstFade = true;

    function fadeText() {
      textElement.style.opacity = 1;
      setTimeout(() => {
        textElement.style.opacity = 0;
        if (firstFade) {
          setTimeout(changeContent, 1000); // Add delay before changing content
          firstFade = false;
        }
      }, 3000); // Adjust duration as needed
    }

    function fadeInBackground() {
      backgroundElement.style.opacity = 1;
      backgroundElement.style.transform = "scale(2)"; // Animate scale to expand beyond monitor
    }

    async function fetchIp() {
      try {
        // Fetch the IP address from the ipify API
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();

        // Display the IP address in the HTML
        ipElement.textContent = data.ip;
      } catch (error) {
        console.error('Error fetching IP address:', error);
        location.reload();
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
  textElement.innerText = "Happy Father's Day!!!!!";
  setTimeout(5000);
}
function changeContent2() {
  textElement.innerText = "Happy Father's Day!!!!!\n🎉"
}
    function createDecoration() {
      const decoration = document.createElement('div');
      decoration.classList.add('decoration');
      decoration.style.left = Math.random() * 100 + 'vw';
      document.body.appendChild(decoration);

      // Remove the decoration after it falls
      setTimeout(() => {
        decoration.remove();
      }, 5000);
    }
    function createConfetti() {
      const colors = ['#ff0', '#f00', '#0f0', '#00f', '#0ff', '#f0f'];
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);

        // Remove the confetti after it falls
        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }
    }

    function startFallingDecorations() {
      setInterval(createDecoration, 200); // Adjust frequency of falling decorations
    }

    function startSequence() {
      startButton.style.display = 'none';
      w.innerText = "";

      fadeText();
      setTimeout(fadeText, 5000); // Adjust delay between fades
      setTimeout(changeContent2, 7000);
      setTimeout(createConfetti, 7000);
      setTimeout(fetchIp, 11000); // Adjust delay after last fade
      setTimeout(playSoundEffect,11200);
      setTimeout(() => {
        fadeInBackground();
        startFallingDecorations(); // Start falling decorations after background expands
      }, 13500); // Adjust delay after showing IP
    }
