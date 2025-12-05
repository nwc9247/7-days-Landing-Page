priceBtn = document.querySelectorAll("#plan-btn")

priceBtn.forEach(plan => {
    plan.addEventListener("click", () => {
        plan.style.opacity = "0";
        setTimeout(() => {
            plan.textContent = "Plan Selected";
            plan.style.opacity = "1"
        }, 100);
    })
});