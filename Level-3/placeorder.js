const method = localStorage.getItem("paymentMethod");
document.getElementById("method").innerText = method;
if (method === "UPI") {
    document.getElementById("upiBox").classList.remove("hidden");
}
else if (method === "Cash on Delivery") {
    document.getElementById("codBox").classList.remove("hidden");
}
else if (method === "Bank Account") {
    document.getElementById("bankBox").classList.remove("hidden");
}
function confirmOrder() {
    if (method === "UPI") {
        const upi = document.getElementById("upiId").value.trim();
        if (upi === "") {
            alert("Please enter UPI ID or complete payment");
            return;
        }
    }
    if (method === "Cash on Delivery") {
        const address = document.querySelector("#codBox textarea").value.trim();
        if (address === "") {
            alert("Please enter delivery address");
            return;
        }
    }
    if (method === "Bank Account") {
        const acc = document.querySelector("#bankBox input:nth-child(2)").value.trim();
        const ifsc = document.querySelector("#bankBox input:nth-child(3)").value.trim();

        if (acc === "" || ifsc === "") {
            alert("Please enter bank account details");
            return;
        }
    }
    localStorage.removeItem("cart");
    document.querySelector(".order-box").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");
}
function confirmOrder(){
    const success = document.getElementById("successScreen");
    success.classList.add("fadeIn");
    setTimeout(() => {
        window.location.href = "ordersummary.html";
    }, 2500);
}
