// Form validation logic
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    if (!name || !email || !checkin || !checkout || !guests) {
        alert('Please fill in all fields.');
        return false;
    }

    // Check if the check-out date is after the check-in date
    if (new Date(checkout) <= new Date(checkin)) {
        alert('Check-out date must be after check-in date.');
        return false;
    }

    alert('Reservation confirmed!');
    return true;
}
