
function goHome(){
    window.location.href = "home.html";
}
function logout(){
    localStorage.clear();
    window.location.href = "index.html";
}
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: productName,
        quantity: 1
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}
function openCategory(category){
    alert(category + " page coming soon!");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function openCart(){
    window.location.href = "cart.html";
}
function goPage(page){
    if(page === "store") return; 
    window.location.href = page + ".html";
}
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        name: productName,
        quantity: 1
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}
