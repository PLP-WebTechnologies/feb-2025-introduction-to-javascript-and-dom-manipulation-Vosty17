
// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    if (dynamicText.textContent === 'This text will change when you click the button below.') {
        dynamicText.textContent = 'Text successfully changed using JavaScript!';
    } else {
        dynamicText.textContent = 'This text will change when you click the button below.';
    }
});

// Modify CSS styles via JavaScript
const styleBox = document.getElementById('style-box');
const toggleStyleBtn = document.getElementById('toggle-style-btn');

toggleStyleBtn.addEventListener('click', () => {
    styleBox.classList.toggle('highlighted');
    
    // Alternatively, modify style directly:
    // if (styleBox.style.backgroundColor !== 'lightblue') {
    //     styleBox.style.backgroundColor = 'lightblue';
    //     styleBox.style.color = 'darkblue';
    // } else {
    //     styleBox.style.backgroundColor = '';
    //     styleBox.style.color = '';
    // }
});

// Add or remove element when button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');
let additionalElement = null;

toggleElementBtn.addEventListener('click', () => {
    if (!additionalElement) {
        additionalElement = document.createElement('p');
        additionalElement.textContent = 'This is a dynamically added element!';
        additionalElement.className = 'dynamic-element';
        elementContainer.appendChild(additionalElement);
    } else {
        elementContainer.removeChild(additionalElement);
        additionalElement = null;
    }
});

// Bonus: Change main heading color on hover
const mainHeading = document.getElementById('main-heading');

mainHeading.addEventListener('mouseover', () => {
    mainHeading.style.color = 'tomato';
});

mainHeading.addEventListener('mouseout', () => {
    mainHeading.style.color = '';
});
