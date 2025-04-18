document.addEventListener("DOMContentLoaded", () => {
    const allHiddenPosts = document.querySelectorAll(".hidden-post");
    const viewMoreBtn = document.getElementById("viewMoreBtn");

    const handleResize = () => {
        const screenWidth = window.innerWidth;

        // Reset all hidden posts first
        allHiddenPosts.forEach(post => post.classList.add("hidden-post"));

        if (screenWidth > 599 && screenWidth < 992) {
            // Reveal 1 extra post only
            if (allHiddenPosts.length > 0) {
                allHiddenPosts[0].classList.remove("hidden-post");
            }
            viewMoreBtn.style.display = "inline-block";
        } else if (screenWidth >= 992) {
            // Reveal all for large screens
            allHiddenPosts.forEach(post => post.classList.remove("hidden-post"));
            viewMoreBtn.style.display = "none";
        } else {
            // On small screens (<600), hide all extras
            allHiddenPosts.forEach(post => post.classList.add("hidden-post"));
            viewMoreBtn.style.display = "inline-block";
        }
    };

    // Show all remaining posts on button click
    viewMoreBtn.addEventListener("click", () => {
        allHiddenPosts.forEach(post => post.classList.remove("hidden-post"));
        viewMoreBtn.style.display = "none";
    });

    // Initial render
    handleResize();

    // Handle window resizing
    window.addEventListener("resize", handleResize);
});
