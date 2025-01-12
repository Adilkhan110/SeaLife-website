document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.dataset.category;
        alert(`You clicked on the ${category} category!`);
    });
});
