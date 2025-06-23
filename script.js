let currentItem = 0;
const items = document.querySelectorAll('.item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showItem(currentItem);

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentItem = (currentItem - 1 + totalItems) % totalItems;
            showItem(currentItem);
        });

        nextBtn.addEventListener('click', () => {
            currentItem = (currentItem + 1) % totalItems;
            showItem(currentItem);
        });
    }
});
