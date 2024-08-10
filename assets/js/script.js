"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
// sidebar variable
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidbar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});



//theme toggle button variables

const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const themeIcon = document.getElementById('theme-icon');

// Initial icon setup based on theme
const setInitialIcon = () => {
  if (rootElement.classList.contains('dark-theme')) {
      themeIcon.src = 'assets/img/sun.png';
      themeIcon.alt = 'Switch to dark Mode';
  } else {
      themeIcon.src = 'assets/img/moon.png';
      themeIcon.alt = 'Switch to light Mode';
  }
};

// theme toggle fuction 
setInitialIcon();
toggleButton.addEventListener('click', () => {
  rootElement.classList.toggle('dark-theme');

  if (rootElement.classList.contains('dark-theme')) {
      themeIcon.src = 'assets/img/sun.png';
      themeIcon.alt = 'Switch to dark Mode';
  } else {
      themeIcon.src = 'assets/img/moon.png';
      themeIcon.alt = 'Switch to  Mode';
  }
});


// testimonials/Certifications & Achievements variables
const dataTestimonialsItem = document.querySelectorAll(
  "[data-testimonials-item]"
);
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[ data-modal-class-btn]");

const overlay = document.querySelector("[data-overlay]");

// toggle function
const testimonialsModalclickFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// modal variables

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal open btn
for (let i = 0; i < dataTestimonialsItem.length; i++) {
  dataTestimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    testimonialsModalclickFunc();
  });
}

// modal close btn
modalCloseBtn.addEventListener("click", testimonialsModalclickFunc);
overlay.addEventListener("click", testimonialsModalclickFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

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
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link;
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// contact form information sent to the gamil function
function sendEmail() {
  console.log("hello");
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "2022ugme112@nitjsr.ac.in",
    Password: "10BFCCF781F80CA09431833BD92D80FCCC1B",
    To: '2022ugme112@nitjsr.ac.in',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message"),
  }).then((message) => alert("message sent succesfully"));
}


           
