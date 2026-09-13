function changeSlide(button, direction) {

    const gallery = button.closest(".project-gallery");

    const images = gallery.querySelectorAll(".gallery-images img");
    const dots = gallery.querySelectorAll(".dot");

    let currentIndex = 0;

    images.forEach((image, index) => {
        if (image.classList.contains("active")) {
            currentIndex = index;
        }
    });

    images[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex += direction;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
}