const dropdown = () => {
    const menuImg = document.getElementById("menu-img");
    const menuImgStyle = menuImg.style.rotate;
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (menuImgStyle !== '90deg') {
        menuImg.style.rotate = '90deg'
        dropdownMenu.style.display = 'block'
    }
    else {
        menuImg.style.rotate = '0deg'
        dropdownMenu.style.display = 'none'
    }
}
document.getElementById("menu").addEventListener('click', dropdown)

const carousel = document.querySelector(".carousel");
const carousel2 = document.querySelector(".carousel2");
const arrowBtns = document.querySelectorAll(".icon");
const arrowBtns2 = document.querySelectorAll(".icon2");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const firstCardWidth2 = carousel2.querySelector(".card").offsetWidth;
let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})
arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id === "left2" ? -firstCardWidth2 : firstCardWidth2;
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = e => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const dragStart2 = e => {
    isDragging = true;
    carousel2.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel2.scrollLeft;
}

const dragging2 = e => {
    if (!isDragging) return;
    carousel2.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop2 = () => {
    isDragging = false;
    carousel2.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
carousel2.addEventListener("mouseup", dragStop2);