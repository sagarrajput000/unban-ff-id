
const buttons = document.querySelectorAll(".select-btn");
const nextStep = document.getElementById("next-step");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("selected-type").textContent =
      button.dataset.type;

    document.getElementById("selected-price").textContent =
      `₹${button.dataset.price}`;

    nextStep.hidden = false;
    nextStep.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});


document.getElementById("continue-btn").addEventListener("click", () => {
  const type = document.getElementById("selected-type").textContent;
  const priceText = document.getElementById("selected-price").textContent;
  const price = Number(priceText.replace(/[^\d]/g, ""));

  const valid =
    (type === "Temporary Ban" && price === 49) ||
    (type === "Permanent Ban" && price === 149);

  if (!valid) {
    alert("Please select a valid ban type.");
    return;
  }

  const params = new URLSearchParams({
    type: type,
    price: String(price)
  });

  window.location.href = `payment.html?${params.toString()}`;
});

