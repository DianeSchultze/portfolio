const text = "Your coolest dev on the internet.";
const speed = 80;      // typing speed
const deleteSpeed = 50; // deleting speed
const pauseAfterType = 1500; // pause after typing
const pauseAfterDelete = 500; // pause after deleting

const target = document.getElementById("typing-text");

let i = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    // Typing
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeLoop, speed);
    } else {
      // Finished typing, pause then start deleting
      setTimeout(() => {
        isDeleting = true;
        typeLoop();
      }, pauseAfterType);
    }
  } else {
    // Deleting
    if (i > 0) {
      target.textContent = text.substring(0, i - 1);
      i--;
      setTimeout(typeLoop, deleteSpeed);
    } else {
      // Finished deleting, pause then start typing again
      isDeleting = false;
      setTimeout(typeLoop, pauseAfterDelete);
    }
  }
}

typeLoop();