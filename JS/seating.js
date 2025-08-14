
document.addEventListener('DOMContentLoaded', function() {
  const seats = document.querySelectorAll('.seat:not(.occupied)');
  const confirmBtn = document.getElementById('confirm-booking');
  const selectedSeatDisplay = document.getElementById('selected-seat-display');
  const seatTypeDisplay = document.getElementById('seat-type-display');
  const seatCostDisplay = document.getElementById('seat-cost-display');

  let selectedSeat = null;

  seats.forEach(seat => {
    seat.addEventListener('click', function() {
      if (seat === selectedSeat) {
        seat.classList.remove('selected');
        selectedSeat = null;
        updateSummary(null);
        confirmBtn.disabled = true;
        return;
      }

      if (selectedSeat) {
        selectedSeat.classList.remove('selected');
        const seatType = getSeatType(selectedSeat);
        selectedSeat.classList.add(seatType);
      }

      seat.classList.add('selected');
      selectedSeat = seat;
      updateSummary(seat);
      confirmBtn.disabled = false;
    });
  });

  function getSeatType(seatElement) {
    if (seatElement.classList.contains('premium')) return 'premium';
    return 'available';
  }

  function updateSummary(seat) {
    if (!seat) {
      selectedSeatDisplay.textContent = 'None selected';
      seatTypeDisplay.textContent = '-';
      seatCostDisplay.textContent = '$0';
      return;
    }

    const seatNumber = seat.dataset.seat;
    let seatType = 'Standard';
    let additionalCost = 0;

    if (seat.classList.contains('premium')) {
      seatType = 'Premium';
      additionalCost = 45;
    }

    selectedSeatDisplay.textContent = seatNumber;
    seatTypeDisplay.textContent = seatType;
    seatCostDisplay.textContent = additionalCost > 0 ? `+$${additionalCost}` : 'Included';
  }

  confirmBtn.addEventListener('click', function() {
    if (!selectedSeat) {
      alert('Please select a seat before continuing.');
      return;
    }
    alert(`Seat ${selectedSeat.dataset.seat} selected! Proceeding to add services...`);
  });
});
