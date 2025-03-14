document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach(t => t.style.display = "none");
        testimonials[index].style.display = "block";
        index = (index + 1) % testimonials.length;
    }

    showTestimonial();
    setInterval(showTestimonial, 3000);
});