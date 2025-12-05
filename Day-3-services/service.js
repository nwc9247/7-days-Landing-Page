const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
    card.addEventListener('click', () => {
        console.log(`You clicked: ${card.dataset.name}`);
        // alert(`You clicked: ${card.dataset.name}`);
    });
});