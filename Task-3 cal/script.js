let display = document.getElementById("display");
let buttons = document.querySelectorAll("button[data]");
let historyList = document.getElementById("historyList");
let clickSound = document.getElementById("clickSound");
let copyBtn = document.getElementById("copy");
let expr = "";
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.play();
    let value = btn.getAttribute("data");
    if (value === "AC") {
      expr = "";
      display.innerText = "0";
      return;
    }
    if (value === "DEL") {
      expr = expr.slice(0, -1);
      display.innerText = expr || "0";
      return;
    }
    if (value === "=") {
      try {
        let result = eval(expr);
        historyList.innerHTML += `<li>${expr} = ${result}</li>`;
        expr = result.toString();
        display.innerText = expr;
      } catch {
        display.innerText = "Error";
      }
      return;
    }
    expr += value;
    display.innerText = expr;
  });
});
copyBtn.onclick = () => {
  navigator.clipboard.writeText(display.innerText);
  copyBtn.innerText = "Copied!";
  setTimeout(() => copyBtn.innerText = "Copy Result", 1000);
};
document.getElementById("neon").onclick = () => {
  document.body.className = "neon";
};

document.getElementById("glass").onclick = () => {
  document.body.className = "glass";
};

document.getElementById("pastel").onclick = () => {
  document.body.className = "pastel";
};
