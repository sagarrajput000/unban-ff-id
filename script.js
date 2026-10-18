
const buttons = document.querySelectorAll(".select-btn");
const nextStep = document.getElementById("next-step");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const price = button.dataset.price;

    document.getElementById("selected-type").textContent = type;
    document.getElementById("selected-price").textContent =
      `₹${price}`;

    nextStep.hidden = false;
    nextStep.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

document.getElementById("continue-btn").addEventListener("click", () => {
  alert(
    "Demo only: no payment has been collected and no real appeal has been submitted."
  );
});
