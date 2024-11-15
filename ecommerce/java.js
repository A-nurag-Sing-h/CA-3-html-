// Select all "Adopt Now" buttons
const adoptButtons = document.querySelectorAll('.buy');

// Add a click event listener to each button
adoptButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Adopted!');
    });
});