let cart = JSON.parse(localStorage.getItem("cart")) || [];
let listCart = document.getElementById("listCart");
listCart.innerHTML = "";
cart.forEach((item, index) => {
  listCart.innerHTML += `
    <div class="item">
      <div class="image"></div>

      <div class="name">
        ${item.name}
      </div>

      <div class="totalPrice">
        ₹${item.price * item.quantity}
      </div>

      <div class="quantity">
        <span class="minus" onclick="changeQty(${index}, -1)">-</span>
        <span>${item.quantity}</span>
        <span class="plus" onclick="changeQty(${index}, 1)">+</span>
      </div>
    </div>
  `;
});
cart = cart.map(item => {
    let price = 0;
    if (item.name === "iphone 14") price = 50000;
    else if (item.name === "iphone 15") price = 80000;
    else if (item.name === "iphone 16") price = 234999;
    else if(item.name === "iphone 17") price = 150000;
    else if (item.name === "iphone 17 Pro") price = 190000;
    else if (item.name === "iphone 17 Pro MAx") price = 230000;
    else if (item.name === "iphone 13 Mini") price = 45000;
    else if (item.name === "iphone 12 Mini") price = 50000;
    else if (item.name === "iphone 13 Mini") price = 69999;
    else if (item.name === "ipad Pro") price = 79000;
    else if (item.name === "ipad Air") price = 89000;
    else if (item.name === "ipad Mini") price = 45999;
    else if (item.name === "ipad touchscreen") price = 790000;
    else if (item.name === "ipad Pro") price = 100000;
    else if (item.name === "ipad 13") price = 90999;
    else if (item.name === "ipad 14") price = 85000;
    else if (item.name === "ipad 10") price = 50000;
    else if (item.name === "ipad 12 Mini") price = 60999;
    else if (item.name === "Mackbook laptop") price = 100000;
    else if (item.name === "Macbook Air") price = 160000;
    else if (item.name === "Macbook Pro") price = 234999;
    else if (item.name === "Macbook desktop") price = 220000;
    else if (item.name === "Macbook system") price = 370000;
    else if (item.name === "Macbook System") price = 340000;
    else if (item.name === "iphone power bank") price = 20000;
    else if (item.name === "iphone charger cable") price = 9999;
    else if (item.name === "Battery charger gadget") price = 45000;
    else if (item.name === "Apple TV") price = 100000;
    else if (item.name === "Apple watch ultra 3") price = 100000;
    else if (item.name === "Apple watch series 11") price = 67999;
    else if (item.name === "Apple watch series 8") price = 79999;
    else if (item.name === "New mode apple model") price = 200000;
    else if (item.name === "Apple TV 4th generation remote") price = 9999;
    else if (item.name === "Top rated accessories") price = 2000000;
    else if (item.name === "5 piece Apple accessories bundle") price = 200999;
    else if (item.name === "airpods") price = 100000;
    else if (item.name === "airpods") price = 99999;
    else if (item.name === "airpods") price =89000;
    return {
        ...item,          
        price: price   
    };
});
localStorage.setItem("cart", JSON.stringify(cart));
console.log(cart);
function changeQty(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
function closeCart() {
  window.history.back();
}
function goToBuyNow() {
    window.location.href = "buynow.html";
}

