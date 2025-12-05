// ---------------------FFAQ------------------------------
const faqItems = document.querySelectorAll(".faq-items");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answers = item.querySelector(".faq-answer");
    const arrow = item.querySelector(".arrow");

    question.addEventListener("click", () => {
        // Toggle open or close state
        answers.classList.toggle("open");
        arrow.classList.toggle("rotated")
    })

})

// -----------------------Contact Form----------------------------
const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".msg");

let arr = [];

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    const nameV = nameInput.value.trim();
    const emailV = emailInput.value.trim();
    const messageV = messageInput.value.trim();

    if (nameV === "") {
        console.log("Enter name first");
        return;
    }

    if (emailV === "") {
        console.log("Enter email first");
        return;
    }

    if (messageV === "") {
        console.log("Enter message first");
        return;
    }

    // store the submission
    arr.push({ name: nameV, email: emailV, message: messageV });

    console.log("Form info:", arr);

    // Optional: Clear form after submit
    contactForm.reset();
});

// -----------------------Price Planning-------------------------------
const pricingCard = document.querySelectorAll(".pricing-card");

pricingCard.forEach(item => {
    const planBtn = item.querySelector(".plan-btn");

    planBtn.addEventListener('click', () => {
        planBtn.textContent = "Plan Selected";
    })
})