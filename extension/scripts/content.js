DEBUG = true

log = function (...data) {
  if (DEBUG) {
    console.log(...data);
  }
}

log('Crunchyroll Enhancer')

let skipButton = null;

setInterval(function () {
  skipButton = document.querySelector('[data-testid="skipButton"] > div');

  if (skipButton) {
    log('Skip button found. Clicking it!');
    skipButton.click();
  }
}, 1000)