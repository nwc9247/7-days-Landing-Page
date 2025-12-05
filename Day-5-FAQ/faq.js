const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        // Close all other items if you want only one open at a time
        faqItems.forEach(i => i !== item && i.classList.remove("active"));

        // Toggle current item
        if (!isOpen) {
            item.classList.add("active"); // open
        } else {
            item.classList.remove("active"); // optional: click again to close
        }
    });
});

// Close all FAQ answers on ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        faqItems.forEach(i => i.classList.remove("active"));
    }
});
