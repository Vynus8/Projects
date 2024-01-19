drawText('Welcome to our Life!');
bounceBubbles();

var continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click', function () {
    window.location.href = './main.html';
});