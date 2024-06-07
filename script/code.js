const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let currentIndex = 0;
const displayElement = document.getElementById('display');
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', displayNextNumber);
function displayNextNumber() {
    displayElement.textContent = numbers[currentIndex];
    currentIndex++;
    if (currentIndex >= numbers.length) {
        nextButton.disabled = true;
        displayElement.textContent = 'You have reached the end of the array.';
    }
}