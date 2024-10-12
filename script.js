document.getElementById('submitReservation').addEventListener('click', function () {
    const form = document.getElementById('reservationForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log('Reservation Data:', data);

    alert('Reservation submitted successfully!');

    const modal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
    modal.hide();
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const contactName = document.getElementById('contact-name').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactMessage = document.getElementById('contact-message').value;

    console.log('Contact Form Data:', {
        name: contactName,
        email: contactEmail,
        message: contactMessage,
    });

    alert('Message sent successfully!');

    this.reset();
});
