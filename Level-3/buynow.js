let cart = JSON.parse(localStorage.getItem("cart")) || [];
let box = document.getElementById("productDetails");
let total = 0;
cart.forEach(item => {
    let div = document.createElement("div");
    div.className = "buy-item";
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <p><b>Total: ₹${itemTotal}</b></p>
        <hr>
    `;
    box.appendChild(div);
});
let totalDiv = document.createElement("h2");
totalDiv.innerText = "Grand Total: ₹" + total;
box.appendChild(totalDiv);
function placeOrder() {
    const payments = document.getElementsByName("payment");
    let selectedValue = null;
    for (let i = 0; i < payments.length; i++) {
        if (payments[i].checked) {
            selectedValue = payments[i].value;
            break;
        }
    }
    if (!selectedValue) {
        alert("Please select a payment method");
        return;
    }
    localStorage.setItem("paymentMethod", selectedValue);
    window.location.href = "placeorder.html";
}
