document.addEventListener("DOMContentLoaded", () => {
    const hiddenPosts = document.querySelectorAll(".hidden-post");
    const viewMoreBtn = document.getElementById("viewMoreBtn");

    // Step 1: Auto-reveal 1 more post if screen is between 600px and 992px
    const screenWidth = window.innerWidth;
    if (screenWidth > 599 && screenWidth < 992 && hiddenPosts.length > 0) {
        hiddenPosts[0].classList.remove("hidden-post");
    }
    
    // Step 2: Show remaining hidden posts on button click
    viewMoreBtn.addEventListener("click", () => {
        hiddenPosts.forEach(post => post.classList.remove("hidden-post"));
        viewMoreBtn.style.display = "none";
    });
});