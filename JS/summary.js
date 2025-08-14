/**
 * Save booking details to localStorage and redirect to summary page.
 * Validates that all fields are filled before saving.
 */
function saveBookingDetails() {
    const bookingData = {
        name: document.getElementById("name").value.trim(),
        from: document.getElementById("from").value.trim(),
        to: document.getElementById("to").value.trim(),
        date: document.getElementById("date").value.trim(),
        time: document.getElementById("time").value.trim(),
        meal: document.getElementById("meal").value.trim(),
        seat: document.getElementById("seat").value.trim(),
        price: parseFloat(document.getElementById("price").value.trim()),
        flightNumber: document.getElementById("flightNumber")?.value.trim() || "",
        arrivalTime: document.getElementById("arrivalTime")?.value.trim() || "",
        class: document.getElementById("fareClass")?.value.trim() || ""
    };

    for (const [key, value] of Object.entries(bookingData)) {
        if (!value && key !== "flightNumber" && key !== "arrivalTime" && key !== "class") {
            alert(`Please fill out the ${key} field.`);
            return;
        }
    }

    localStorage.setItem("bookingSummary", JSON.stringify(bookingData));
    window.location.href = "summary.html";
}

// --- Summary page logic ---

/**
 * Populate the summary page with stored data.
 */
document.addEventListener('DOMContentLoaded', () => {
    const fname = localStorage.getItem('fname');
	const mname = localStorage.getItem('mname');
    const lname = localStorage.getItem('lname');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const selectedSeat = localStorage.getItem('selectedSeat') || 'Not selected';
document.querySelector('#selectedSeat').textContent = selectedSeat;

    document.querySelector('#firstName').textContent = fname;
    document.querySelector('#middleName').textContent = mname;
    document.querySelector('#lastName').textContent = lname;
    document.querySelector('#email').textContent = email;
    document.querySelector('#phone').textContent = phone;
    //document.querySelector('#selectedSeat').textContent = selectedSeat;
});

/**
 * Update total price based on luggage selection.
 */
function selectLuggage(fee) {
    const total = (window.basePrice || 0) + fee;
    document.getElementById("price").textContent = total.toFixed(2);
}

/**
 * Confirm booking handler.
 */
function confirmBooking() {
    const finalPrice = document.getElementById("price").textContent;
    alert("Booking confirmed. Total price: $" + finalPrice);
}
