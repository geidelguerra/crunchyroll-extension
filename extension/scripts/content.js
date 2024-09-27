console.log('Crunchyroll Enhancer')

setInterval(function () {
  const skipButton = document.querySelector('[data-testid="skipButton"] > div');

  if (skipButton) {
    console.log('Skip button found. Clicking it!');
    skipButton.click();
  }
}, 1000)
