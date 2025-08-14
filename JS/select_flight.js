window.addEventListener('DOMContentLoaded', () => {
	const from = localStorage.getItem('from');
	const to = localStorage.getItem('to');
	const date = localStorage.getItem('date');

	document.querySelector('#departureDate').textContent = date;
	document.querySelector('#fromLocation').textContent = from;
	document.querySelector('#toLocation').textContent = to;

	const depTime = localStorage.getItem("selectedDepTime");
	const arrTime = localStorage.getItem("selectedArrTime");
	const flightNumber = localStorage.getItem("selectedFlightNumber");
	const farePrice = localStorage.getItem("selectedPrice");
	const fareType = localStorage.getItem("selectedFareType");

	// Fill values into the HTML
	document.getElementById("depTime").textContent = depTime || "N/A";
	document.getElementById("arrTime").textContent = arrTime || "N/A";
	document.getElementById("flightNumber").textContent = flightNumber || "N/A";
	document.getElementById("farePrice").textContent = farePrice || "N/A";
	document.getElementById("fareType").textContent = fareType || "N/A";

});
