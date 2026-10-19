
const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const price = Number(params.get("price"));

const qrImage = document.getElementById("payment-qr");
const planTitle = document.getElementById("payment-type");
const paymentAmount = document.getElementById("payment-amount");
const form = document.getElementById("utr-form");
const utrInput = document.getElementById("utr");
const status = document.getElementById("payment-status");

const validPlan =
  (type === "Temporary Ban" && price === 49) ||
  (type === "Permanent Ban" && price === 149);

if (validPlan) {
  planTitle.textContent = `${type} Plan`;
  paymentAmount.textContent = `₹${price}`;
  qrImage.src =
    type === "Temporary Ban" ? "assests/qr49.png" : "assests/qr149.png";
  qrImage.hidden = false;
} else {
  planTitle.textContent = "Invalid plan selected";
  paymentAmount.textContent = "";
  qrImage.hidden = true;
  form.querySelector('button[type="submit"]').disabled = true;
  status.textContent = "Please return and select a plan first.";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validPlan) {
    status.textContent = "Invalid plan. Please select a plan again.";
    return;
  }

  const utr = utrInput.value.trim();

  if (!/^[0-9]{12}$/.test(utr)) {
    status.textContent = "Enter a 12-digit numeric reference.";
    return;
  }

  const nextParams = new URLSearchParams({
    type: type,
    price: String(price),
    utr: utr
  });

  window.location.href = `request.html?${nextParams.toString()}`;
});
