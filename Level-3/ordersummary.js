let cart = JSON.parse(localStorage.getItem("cart")) || [];
let summaryList = document.getElementById("summaryList");
let grandTotal = 0;
cart.forEach(item => {
    let itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    summaryList.innerHTML += `
        <div class="item">
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${itemTotal}</span>
        </div>
    `;
});
document.getElementById("grandTotal").innerText = grandTotal;
function finishOrder(){
    localStorage.removeItem("cart");
    window.location.href = "index.html"; 
}
