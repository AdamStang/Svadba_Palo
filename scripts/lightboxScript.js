const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-img');
let activeImage;

const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const lightboxBtnLeft = document.querySelectorAll('#left');
const lightboxBtnRight = document.querySelectorAll('#right');
const lightboxBtnClose = document.querySelector('#close');

const showLightBox = () => { lightboxContainer.classList.add('active'); }
const hideLightBox = () => { lightboxContainer.classList.remove('active'); }

const setActiveImage = (image) => {
    console.log(image.height);
    console.log(image.width);
    lightboxImage.src = image.dataset.imagesrc;
    activeImage = lightboxArray.indexOf(image);
}

const transitionSlideLeft = () => {
    activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : setActiveImage(lightboxArray[activeImage].previousElementSibling);
}

const transitionSlideRight = () => {
    activeImage === lastImage ? setActiveImage(lightboxArray[0]) : setActiveImage(lightboxArray[activeImage].nextElementSibling);
}

const transitionSlideHandler = (moveItem) => {
    if (moveItem.includes('left')) 
        transitionSlideLeft();

    if (moveItem.includes('right')) 
        transitionSlideRight();
}

lightboxEnabled.forEach(image => {
    image.addEventListener('click', (e) => {
        showLightBox();
        setActiveImage(image);
    });
});

lightboxContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-container'))
        hideLightBox();
});

lightboxBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        transitionSlideHandler(e.currentTarget.id);
    });
});

lightboxBtnClose.addEventListener('click', (e) => {
    hideLightBox();
})

window.addEventListener('keydown', (e) => {
    if (!lightboxContainer.classList.contains('active')) return;
    if (e.key.includes('Left') || e.key.includes('Right')) {
        e.preventDefault();
        transitionSlideHandler(e.key.toLowerCase());
    }

    if (e.key.includes('Escape')) {
        e.preventDefault();
        hideLightBox();
    }
});