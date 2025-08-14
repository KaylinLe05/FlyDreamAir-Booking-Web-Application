// Function to update extra services and save them in localStorage
function saveExtras() {
    const addBaggage = document.getElementById("add-baggage").value;
    const mealPreference = document.getElementById("meal-preference").value;
    const specialAssistance = document.getElementById("special-assistance").value;

    // Save extra services to localStorage
    localStorage.setItem("addBaggage", addBaggage);
    localStorage.setItem("mealPreference", mealPreference);
    localStorage.setItem("specialAssistance", specialAssistance);

    // Show confirmation and redirect
    alert("Extra services saved!");
    window.location.href = "new_payment.html";
}

// Function to update contact info and save it to localStorage
function updateContactInfo() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Save updated contact info to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    // Show confirmation and redirect
    alert("Contact info updated!");
    window.location.href = "managing_flight.html";
}

// Function download e-ticket
function clickDownlaodETicket() {
    // Show confirmation and redirect
    alert("E-ticket downloaded.");
}

// Function email Itinerary
function clickEmailIti() {
    // Show confirmation and redirect
    alert("Itinerary emailed.");
}

// Function to handle document-related updates
function manageDocuments(action) {
    if (action === 'download') {
        alert('E-ticket downloaded.');
    } else if (action === 'email') {
        alert('Itinerary sent via email.');
    }

    window.location.href = "managing_flight.html";
}

// Function to get query parameter
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Populate passenger name and email
  const passengerName = getQueryParam("name");
  if (passengerName) {
    document.getElementById("passenger-name").textContent = passengerName;

    const email = passengerName.toLowerCase().replace(/\s+/g, '') + "@gmail.com";
    document.getElementById("email-info").textContent = email;
  } else {
    document.getElementById("passenger-name").textContent = "Not Provided";
    document.getElementById("email-info").textContent = "Not Provided";
  }

// Handle name search and display summary
function setupNameSearchBar() {
    const form = document.querySelector(".search-form");
    const nameInput = form ? form.querySelector('input[name="name"]') : null;
    const summary = document.getElementById("summary");

    if (form && nameInput && summary) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const enteredName = nameInput.value.trim();

            if (enteredName) {
                // Update the passenger name and email
                localStorage.setItem("searchedName", enteredName);
                
                // Format the email
                const formattedEmail = enteredName.toLowerCase().replace(/\s+/g, '') + '@gmail.com';
                localStorage.setItem("searchedEmail", formattedEmail); // Store the formatted email
                
                // Show the summary and update the name and email fields
                summary.style.display = "block";
                
                const nameSpan = document.getElementById("passenger-name");
                if (nameSpan) {
                    nameSpan.textContent = enteredName;
                }

                const emailSpan = document.getElementById("email-info");
                if (emailSpan) {
                    emailSpan.textContent = formattedEmail;
                }
            } else {
                alert("Please enter your name to find your reservation.");
                summary.style.display = "none";
            }
        });
    } else {
        console.log("Search form or name input or summary NOT found in setupNameSearchBar");
    }
}







