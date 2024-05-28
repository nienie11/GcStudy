window.onscroll = function() {
    var scrollToTopButton = document.getElementById('scrollToTopBtn');
    scrollToTopButton.style.display = (window.scrollY > 200) ? 'block' : 'none';
};

function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
    }
}
