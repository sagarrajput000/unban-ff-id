
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
      "bypass tool: when payment has collected. tool start to bypass account suspension."
    );
  });
}

/* ===== Animate the IDs Recovered counter ===== */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count-up");

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);

    if (!Number.isFinite(target) || target <= 0) {
      counter.textContent = "0";
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease-out animation
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target).toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  });
});
