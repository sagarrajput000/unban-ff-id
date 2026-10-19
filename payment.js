
const params = new URLSearchParams(window.location.search);

const type = params.get("type");
const price = Number(params.get("price"));

const qrImage = document.getElementById("payment-qr");
const planTitle = document.getElementById("plan-title");
const paymentAmount = document.getElementById("payment-amount");

if (type === "Temporary Ban" && price === 49) {
  qrImage.src = "assests/qr49.png";
  planTitle.textContent = "Temporary Ban Plan";
  paymentAmount.textContent = "Amount: ₹49";
} else if (type === "Permanent Ban" && price === 149) {
  qrImage.src = "assests/qr149.png";
  planTitle.textContent = "Permanent Ban Plan";
  paymentAmount.textContent = "Amount: ₹149";
} else {
  planTitle.textContent = "Invalid plan selected";
  paymentAmount.textContent = "";
  qrImage.hidden = true;
}
