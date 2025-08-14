window.addEventListener('DOMContentLoaded', () => {
	const from = localStorage.getItem('from');
	const to = localStorage.getItem('to');
	const date = localStorage.getItem('date');

	// set flight detail 1
	document.querySelectorAll('.flight-card1 .column.location div')[0].textContent = from;
	document.querySelectorAll('.flight-card1 .column.location div')[2].textContent = to;

	// Set flight detial 2
	document.querySelectorAll('.flight-card2 .column.location div')[0].textContent = from;
	document.querySelectorAll('.flight-card2 .column.location div')[2].textContent = to;
	
	// set flight detail 3
	document.querySelectorAll('.flight-card3 .column.location div')[0].textContent = from;
	document.querySelectorAll('.flight-card3 .column.location div')[2].textContent = to;

	// Set flight detial 4
	document.querySelectorAll('.flight-card4 .column.location div')[0].textContent = from;
	document.querySelectorAll('.flight-card4 .column.location div')[2].textContent = to;
		
	// set flight detail 5
	document.querySelectorAll('.flight-card5 .column.location div')[0].textContent = from;
	document.querySelectorAll('.flight-card5 .column.location div')[2].textContent = to;
	

	// Set values in your <span> elements (new!)
	const fromLoc = document.getElementById("fromLocation");
	const toLoc = document.getElementById("toLocation");
	const depDate = document.getElementById("departureDate");

	if (fromLoc) fromLoc.textContent = from || "N/A";
	if (toLoc) toLoc.textContent = to || "N/A";
	if (depDate) depDate.textContent = date || "N/A";
	
	
	const fareLinks = document.querySelectorAll(".fare-box");

	fareLinks.forEach(link => {
		link.addEventListener("click", (e) => {
			const card = e.target.closest(".flight-card1, .flight-card2, .flight-card3, .flight-card4, .flight-card5");

			if (!card) return;

			// Extract times
			const times = card.querySelectorAll(".time");
			const depTime = times[0]?.textContent.trim() || "";
			const arrTime = times[1]?.textContent.trim() || "";

			// Flight number
			const flightNumber = card.querySelector(".duration div")?.textContent.trim() || "";

			// Fare price and label (Economy or Business)
			const price = link.querySelector(".price")?.textContent.trim() || "";
			const fareType = link.querySelector(".label")?.textContent.trim() || "";

			// Save to localStorage
			localStorage.setItem("selectedDepTime", depTime);
			localStorage.setItem("selectedArrTime", arrTime);
			localStorage.setItem("selectedFlightNumber", flightNumber);
			localStorage.setItem("selectedPrice", price);
			localStorage.setItem("selectedFareType", fareType);
		});
	});

});
