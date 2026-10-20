
const buttons = document.querySelectorAll(".select-btn");
const nextStep = document.getElementById("next-step");
const continueBtn = document.getElementById("continue-btn");
const selectedType = document.getElementById("selected-type");
const selectedPrice = document.getElementById("selected-price");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Stop safely if this page lacks the required elements.
    if (!nextStep || !selectedType || !selectedPrice) return;

    const type = button.dataset.type;
    const price = button.dataset.price;

    selectedType.textContent = type;
    selectedPrice.textContent = `₹${price}`;

    nextStep.hidden = false;
    nextStep.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    alert(
      "Demo only: no payment has been collected and no real appeal has been submitted."
    );
  });
}
