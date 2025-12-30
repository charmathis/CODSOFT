function goHome(){
    window.location.href = "store.html";
}
function openModal(type) {
  const modal = document.getElementById("infoModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  if (type === "terms") {
    title.innerText = "Terms & Conditions";
    text.innerText =
      "By using this website, you agree to our terms and conditions. Products, prices, and availability may change without notice.";
  }
  if (type === "privacy") {
    title.innerText = "Privacy Policy";
    text.innerText =
      "We respect your privacy. Your personal information is securely stored and never shared with third parties.";
  }
  if (type === "support") {
    title.innerText = "Support";
    text.innerText =
      "Need help? Contact us at support@iphonestore.com or call 1800-APPLE.";
  }
  modal.style.display = "flex";
}
function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}
function openCart(){
    window.location.href = "cart.html";
}
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (top < screenHeight - 100) {
            card.classList.add("show");
        }
    });
});
