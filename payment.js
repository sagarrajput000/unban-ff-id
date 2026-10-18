
const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const price = Number(params.get("price"));

const valid =
  (type === "Temporary Ban" && price === 49) ||
  (type === "Permanent Ban" && price === 149);

if (!valid) {
  document.getElementById("payment-type").textContent =
    "Invalid selection";
  document.getElementById("payment-amount").textContent = "—";
  document.getElementById("utr-form").hidden = true;
} else {
  document.getElementById("payment-type").textContent = type;
  document.getElementById("payment-amount").textContent = `₹${price}`;
}

document.getElementById("utr-form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!valid) return;

  const utr = document.getElementById("utr").value.trim();

  if (!/^[a-zA-Z0-9]{6,40}$/.test(utr)) {
    document.getElementById("payment-status").textContent =
      "Enter a valid-looking transaction reference.";
    return;
  }

  const next = new URLSearchParams({
    type,
    price: String(price),
    utr
  });

  window.location.href = `request.html?${next.toString()}`;
});
