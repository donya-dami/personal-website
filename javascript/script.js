/* ON THE PROJECTS PAGE: images change on hover from user */

function addImageHoverEffect(id, newSrc) {
    const img = document.getElementById(id);
    const originalSrc = img.src;

    img.addEventListener("mouseenter", () => {
        img.src = newSrc;
    });

    img.addEventListener("mouseleave", () => {
        img.src = originalSrc;
    });
}

addImageHoverEffect("moogle", "../images/moogle dark.png");
addImageHoverEffect("logo", "../images/logo hover.png"); 