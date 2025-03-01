document.addEventListener('DOMContentLoaded', (event) => {
  const typewriterText = ['_WEB DEVELOPER', '_SOFTWARE DEVELOPER', '_CYBER SECURITY ENTHUSIAST'];
  let i = 0;
  let j = 0;
  let currentString = '';
  let isDeleting = false;
  let typeSpeed = 40;
  let deleteSpeed = 40;
  let delayBeforeType = 30;
  let delayBeforeDelete = 1200;

  function type() {
    let delay = isDeleting ? deleteSpeed : typeSpeed;
    if (!isDeleting && j === typewriterText[i].length) {
      isDeleting = true;
      delay = delayBeforeDelete;
    } else if (isDeleting && j === 0) {
      currentString = '';
      isDeleting = false;
      i = (i + 1) % typewriterText.length; // Ensures the loop continues by cycling back to 0
      delay = delayBeforeType;
    }

    if (!isDeleting) {
      let normalText = typewriterText[i].substring(0, j - 3);
      let redText = typewriterText[i].substring(j - 3, j);
      currentString = normalText + '<span class="red">' + redText + '</span>';
      document.querySelector('.typewriter').innerHTML = currentString;
      j++;
    } else {
      let normalText = typewriterText[i].substring(0, j - 3);
      let redText = typewriterText[i].substring(j - 3, j);
      currentString = normalText + '<span class="red">' + redText + '</span>';
      document.querySelector('.typewriter').innerHTML = currentString;
      j--;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, delayBeforeType);
});
