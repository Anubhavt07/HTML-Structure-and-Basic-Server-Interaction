document.addEventListener('DOMContentLoaded', function () {
    const alertButton = document.getElementById('alertButton');
    const contactForm = document.getElementById('contactForm');

    alertButton.addEventListener('click', function () {
        alert('Button clicked!');
    });

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted!');
    });
});
