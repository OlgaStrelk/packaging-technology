const slider = new Swiper(".slider__container", {
  slidesPerView: 1,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  centeredSlides: false,
  autoHeight: true,

  navigation: {
    nextEl: ".slider__next",
    prevEl: ".slider__prev",
  },

  speed: 800,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: "fulse",
    disableOnInteraction: "true"
  },
  breakpoints: {
    1679: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const sliderProduct = new Swiper(".recommended__slider", {
  slidesPerView: 1,
  spaceBetween: 20,

  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  centeredSlides: false,
  autoHeight: true,

  navigation: {
    nextEl: ".slider__next",
    prevEl: ".slider__prev",
  },

  speed: 800,


  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    743: {
      slidesPerView: 2,
      spaceBetween: 19,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
    1679: {
      slidesPerView: 4,
      spaceBetween: 15,
    }
  },
});

// счетчик

function countFunc(count) {
  var btnPlus = count.querySelector(".js-plus-btn");
  var btnMinus = count.querySelector(".js-minus-btn");
  var field = count.querySelector(".js-number");
  var fieldValue = parseFloat(field.value, 10);

  btnMinus.addEventListener("click", function () {
    if (fieldValue > 1) {
      fieldValue--;
      field.value = fieldValue;
    } else {
      return 1;
    }
  });
  btnPlus.addEventListener("click", function () {
    fieldValue++;
    field.value = fieldValue;
  });
}
var counts = document.querySelectorAll(".wrapper-form");
counts.forEach(countFunc);

// попапы
const call = document.querySelector(".intro__contact-link");
const close = document.querySelector(".intro__close-btn");
const popupArray = document.querySelectorAll(".popup");
const videoBtn = document.querySelector(".intro__video-container");
const videoPopup = document.querySelector(".popup_type_video");
const consultPopup = document.querySelector(".popup_type_consult");

// close.addEventListener("click", () => {
//   call.classList.add("intro__contact-link_hidden")

// })

// function handleEscClose(evt) {
//   //переписать
//   if (evt.key === "Escape") {
//     closePopup();
//   }
// }

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  // document.addEventListener("keydown", handleEscClose);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  // document.removeEventListener("keydown", handleEscClose);
}

function closeConsultBtn() {
  call.classList.add("intro__contact-link_hidden")
}

function setPopupEventListeners() {
  if (call) {
    call.addEventListener("click", (evt) => {
      (evt.target.classList.contains("intro__close-btn")) ?
      closeConsultBtn(): openPopup(consultPopup)
    });
  }
  if (videoBtn) videoBtn.addEventListener("click", () => openPopup(videoPopup));
  if (popupArray) {
    popupArray.forEach((popup) => {
      popup.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup_is-opened")) {
          closePopup(evt.target);
        }
        if (evt.target.classList.contains("popup__close")) {
          closePopup(evt.target.parentNode.parentNode);
        }
      });
    });
  }
  return;
}
setPopupEventListeners();

//

const seal = document.querySelector(".benefit__list-seal");
const decor = document.querySelector(".benefit__list-decor");
const mix = document.querySelector(".benefit__list-mix");
const hover = document.querySelector(".benefit__cover-hover");

function setEventListeners() {
  if (seal) {
    seal.addEventListener("mouseover", () => {
      return hover.classList.remove("benefit__cover-hermetic");
    });

    seal.addEventListener("mouseout", () => {
      return hover.classList.add("benefit__cover-hermetic");
    });
  }
  if (decor) {
    decor.addEventListener("mouseover", () => {
      return hover.classList.remove("benefit__cover-hermetic");
    });

    decor.addEventListener("mouseout", () => {
      return hover.classList.add("benefit__cover-hermetic");
    });
  }
  if (mix) {
    mix.addEventListener("mouseover", () => {
      return hover.classList.remove("benefit__cover-hermetic");
    });

    mix.addEventListener("mouseout", () => {
      return hover.classList.add("benefit__cover-hermetic");
    });
  }
  return
}

setEventListeners();

// меню
const burgerBtn = document.getElementById("nav-icon1");
const headerEl = burgerBtn.parentNode.parentNode;
const menuEl = document.querySelector(".menu");

function openMenu() {
  burgerBtn.classList.add("fixed")
  burgerBtn.classList.add("open");
  headerEl.classList.add("header__moving");
  menuEl.classList.add("menu_is_active");
}

function closeMenu() {
  burgerBtn.classList.remove("fixed")
  burgerBtn.classList.remove("open");
  headerEl.classList.remove("header__moving");
  menuEl.classList.remove("menu_is_active");
}

function setBurgerEventListener() {
  if (burgerBtn)
    burgerBtn.addEventListener("click", (e) => {
      if (burgerBtn.classList.contains("open")) {
        closeMenu();
      } else openMenu();
    });
}

setBurgerEventListener();

// Клик по цвету

const productList = document.querySelectorAll('.container-card__list');
const blackPrice = "5000"
const transparentPrice = "8000"
const priceContainer = (el) => {
  return el.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.container-card__price')
}
productList.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('container-card_color_black')) {

      priceContainer(evt.target).textContent = blackPrice;

    } else if (evt.target.classList.contains('container-card_color_transparent')) {
      priceContainer(evt.target).textContent = transparentPrice;
    }
    return;
  })
})

// тест

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
