
document.addEventListener("DOMContentLoaded", function () {
  // SEARCH button
  const searchFlight = document.getElementById("searchFlight");
  if (searchFlight) {
    searchFlight.addEventListener("click", function () {
      // Get values from <select> and <input type="date">
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const date = document.querySelector('input[type="date"]').value;

      // Validate input
      if (!from || !to || !date) {
        alert("Please select From, To, and Date.");
        return;
      }

      // Store in localStorage
      localStorage.setItem("from", from);
      localStorage.setItem("to", to);
      localStorage.setItem("date", date);

      // Redirect to booking.html
      window.location.href = "booking.html";
    });
  }

  // Coming soon alert
  document.querySelectorAll('a[data-soon]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert("This feature will be added in the future.");
    });
  });

  //Change and Back -> booking.html
  const changeBtn = document.getElementById("changeBtn");
  const continueBtn = document.getElementById("continueBtn");
  const previousBtn = document.getElementById("previousBtn");
  const continueBtnSummary = document.getElementById("continueBtnSummary");
  const confirmBtn = document.getElementById("confirmBtn");
  const paymentBtn = document.getElementById("paymentBtn");

  if (changeBtn) {
    changeBtn.addEventListener("click", function () {
      window.location.href = "booking.html";
    });
  }

  const backBtn = document.getElementById("backBtn");

if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.location.href = "managing_flight.html#summary";
  });
}


  // Continue -> guest_info.html
  if (continueBtn) {
    continueBtn.addEventListener("click", function () {
      window.location.href = "guests_info.html";
    });
  }

    // Jordan's buttons below 

  // Previous -> seat_selection_linked.html 
  if (previousBtn) {
    previousBtn.addEventListener("click", function () {
        window.location.href = "seat_selection_linked.html";
    });
  }

  // Continue (In-flight services)-> summary.html
  if (continueBtnSummary) {
    continueBtnSummary.addEventListener("click", function () {
      window.location.href = "summary.html";
    });
  }
  
    // Continue (summary services)-> payment.html
  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      window.location.href = "payment.html";
    });
  } 

     // Confirm payment button -> document.html
  if (paymentBtn) {
    paymentBtn.addEventListener("click", function () {
      window.location.href = "documents.html";
    });
  }    
});

// function to let customer order a meal
function orderMeal(mealName) {
    localStorage.setItem("selectedMeal", mealName);
    alert(mealName + " has been added to your meal preference.");
}

// function to link the meal item to summary page 
window.addEventListener("DOMContentLoaded", () => {
    const selectedMeal = localStorage.getItem("selectedMeal");
    if (selectedMeal) {
        document.getElementById("mealPreference").textContent = selectedMeal;
    }
});

// function to remove meal, and if the customer selects meal when they didnt "order" it, the page will tell them that the meal is not currently selected
function removeMeal(mealName) {
    const currentMeal = localStorage.getItem("selectedMeal");
    if (currentMeal === mealName) {
        localStorage.removeItem("selectedMeal");
        alert(mealName + " has been removed from your meal preference.");
    } else {
        alert(mealName + " is not currently selected.");
    }
}
