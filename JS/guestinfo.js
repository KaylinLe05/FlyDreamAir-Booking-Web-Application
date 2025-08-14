document.addEventListener("DOMContentLoaded", function () {

  const passangerInfoSave = document.getElementById("continueToSeatSelection");
  if (passangerInfoSave) {
    passangerInfoSave.addEventListener("click", function () {
      // Get values
      const fname = document.getElementById('fname').value;
      const mname = document.getElementById('mname').value;
      const lname = document.getElementById('lname').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      // Validate input
      if (!fname || !lname || !email || !phone) {
        alert("Please fill up the name, dob, email and phone.");
        return;
      }

		// Store in localStorage
		localStorage.setItem("fname", fname);
		localStorage.setItem("mname", mname);
		localStorage.setItem("lname", lname);
		localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

		// Proceed to seat selection
		window.location.href = 'seat_selection_linked.html';
    });
  }


});
