const fullText = "Welcome..";
const firstChar = fullText.charAt(0);
const restText = fullText.slice(1);

let index = 0;
let typing = true;

function animateTitle() {
  if (typing) {
    index++;
    if(index > restText.length) index = restText.length;
    document.title = firstChar + restText.slice(0, index);
    if (index === restText.length) {
      typing = false;
    }
  } else {
    index--;
    if(index < 0) index = 0;
    document.title = firstChar + restText.slice(0, index);
    if (index === 0) {
      typing = true;
    }
  }
  setTimeout(animateTitle, 500);
}

animateTitle();
