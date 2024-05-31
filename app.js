function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);
    if (!targetSection) return; // Check if target section exists
    const yOffset = -80; // Adjust this value to fine-tune the scrolling position
    const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.navbar_menu');
    const mobileToggle = document.querySelector('#mobile-menu');

    mobileMenu.classList.toggle('active');
    mobileToggle.classList.toggle('is-active');
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.querySelector('#mobile-menu');
    mobileToggle.addEventListener('click', function () {
        toggleMobileMenu();
    });

    const navbarLinks = document.querySelectorAll('.navbar_links');
    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const sectionId = this.getAttribute('href'); // Get the href attribute
            if (sectionId !== "index.html") {
                scrollToSection(sectionId);
                // Close the mobile menu after clicking on a link
                toggleMobileMenu();
            } else {
                window.location.href = sectionId;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var cards = document.querySelectorAll(".card_work img");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            modal.style.display = "block"; 
            modalImg.src = this.src; 
        });
    });

    // Close the modal when the close button is clicked, if it exists
    var closeButton = document.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }
});
