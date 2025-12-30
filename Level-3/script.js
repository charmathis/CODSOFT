const userEl = document.getElementById("userName");
const name = localStorage.getItem("username");

if (userEl && name) {
    userEl.innerText = "Hi, " + name;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product + " added to cart!");
}
function visitCategory(category) {
    alert("Opening " + category + " page");
}
document.querySelectorAll(".footer-col p").forEach(item => {
    item.addEventListener("click", () => {
        alert("Page coming soon!");
    });
});
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (navbar && window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else if (navbar) {
        navbar.classList.remove("scrolled");
    }
});
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav-link")
            .forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
function openSection(sectionName) {
    window.location.href = sectionName.toLowerCase() + ".html";
}
function confirmOrder(){
    let payment = localStorage.getItem("paymentMethod");
    if(!payment){
        alert("Please select payment method");
        return;
    }
    document.querySelector(".order-box").style.display = "none";
    document.getElementById("successBox").classList.remove("hidden");
    localStorage.setItem("orderTime", new Date().toLocaleString());
    setTimeout(() => {
        window.location.href = "ordersummary.html";
    }, 2500);
}
