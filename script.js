document.addEventListener('DOMContentLoaded', function () {
    let reviews = document.querySelectorAll('.review');
    let index = 0;
    setInterval(() => {
        reviews.forEach(r => r.style.display = 'none');
        reviews[index].style.display = 'block';
        index = (index + 1) % reviews.length;
    }, 3000);
});
