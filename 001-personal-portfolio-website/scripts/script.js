"use strict";


const moreInfoButton = document.querySelector(".more-info-button");
const dataSidebar = document.querySelector("#data-sidebar");

moreInfoButton.addEventListener('click', () => {
    dataSidebar.classList.toggle("active");
});


// Page navigation variable
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add events to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (let j = 0; j < pages.length; j++) {
            if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                pages[j].classList.add("active");
                navigationLinks[j].classList.add("active");
                window.scroll(0, 0);
            } else {
                pages[j].classList.remove("active");
                navigationLinks[j].classList.remove("active");
            }
        }
    });
}

// testimonials variables

const testimonialsListItem = document.querySelectorAll("[data-testimonials-list-item]");


// Portfolio Page

// Custom select variables

const selectButton = document.querySelector("[data-select-button]");
const selectListItems = document.querySelectorAll("[data-select-list-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterButton = document.querySelectorAll("[data-filter-button]");

selectButton.addEventListener("click", function () {
    this.classList.toggle("active");
});

for (let i = 0; i < selectListItems.length; i++) {
    selectListItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        selectButton.classList.toggle("active");
        filterFunc(selectedValue);
    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-list-item]");

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-list-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
