document.addEventListener("DOMContentLoaded", function () {
    const paymentRadios = document.querySelectorAll('input[name="payment"]');

    paymentRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            const selected = radio.value;
            // Clear all payment details
            document.querySelectorAll('.payment-details').forEach(container => {
                container.innerHTML = '';
            });
            // Render details for the selected option
            renderPaymentFields(radio, selected);
        });
    });

    function renderPaymentFields(radio, type) {
        // Find the payment-details container for the selected radio
        const detailsContainer = radio.closest('.payment-option').querySelector('.payment-details');
        let html = "";
        switch (type) {
            case "card":
                html = `
                    <h4>Enter Card Details</h4>
                    <input type="text" placeholder="Name on Card">
                    <input type="text" placeholder="Card Number">
                    <input type="text" placeholder="Expiry Date (MM/YY)">
                    <input type="text" placeholder="CVV">
                `;
                break;
            case "paypal":
                html = `
                    <h4>PayPal Login</h4>
                    <input type="email" placeholder="PayPal Email">
                `;
                break;
            case "payid":
                html = `
                    <h4>PayID Details</h4>
                    <input type="text" placeholder="PayID Email or Mobile">
                `;
                break;
            case "zip":
                html = `
                    <h4>Zip Account</h4>
                    <input type="email" placeholder="Zip Email">
                `;
                break;
            case "bpay":
                html = `
                    <h4>BPAY Details</h4>
                    <input type="text" placeholder="BPAY Biller Code">
                    <input type="text" placeholder="BPAY Reference Number">
                `;
                break;
            default:
                html = "";
        }
        detailsContainer.innerHTML = html;
    }
});
