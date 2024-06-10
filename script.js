    const textElement = document.getElementById('text');
    const ipElement = document.getElementById('ip-address');
    const backgroundElement = document.getElementById('background');
    const startButton = document.getElementById('startButton');
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
      playSoundEffect(); // Call function to play sound effect
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
        ipElement.textContent = 'Error fetching IP address';
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

    function startFallingDecorations() {
      setInterval(createDecoration, 200); // Adjust frequency of falling decorations
    }

    function startSequence() {
      // Hide the start button
      startButton.style.display = 'none';

      fadeText();
      setTimeout(fadeText, 5000); // Adjust delay between fades
      setTimeout(changeContent2, 7000)
      // Show IP after all fades
      setTimeout(fetchIp, 12000); // Adjust delay after last fade
      // Fade background in after a short delay
      setTimeout(playSoundEffect, 12500)
      setTimeout(() => {
        fadeInBackground();
        startFallingDecorations(); // Start falling decorations after background expands
      }, 13000); // Adjust delay after showing IP
    }
