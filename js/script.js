//Скрипты для модального окна фидбека
var feedbackModal = document.querySelector(".feedback-modal");
var feedbackOpen = document.querySelector(".feedback-open");
var feedbackClose = feedbackModal.querySelector(".close-btn");
var nameField = feedbackModal.querySelector(".name input");
var emailField = feedbackModal.querySelector(".e-mail input");
var textField = feedbackModal.querySelector("textarea");
var storageName = "";
var storageEmail = "";
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

feedbackOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("visually-hidden");
  feedbackModal.classList.add("animation-open");
  if (storageName) {
    nameField.value = storageName;
    if (storageEmail) {
      emailField.value = storageEmail;
      setTimeout(function () { textField.focus(); }, 1000);
    } else {
      setTimeout(function () { emailField.focus(); }, 1000);
    }
  } else {
    setTimeout(function () { nameField.focus(); }, 1000);
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("visually-hidden");
  feedbackModal.classList.remove("animation-open");
  feedbackModal.classList.remove("animation-error");
});

feedbackModal.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("animation-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("animation-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!feedbackModal.classList.contains("visually-hidden")) {
      evt.preventDefault();
      feedbackModal.classList.add("visually-hidden");
      feedbackModal.classList.remove("animation-open");
      feedbackModal.classList.remove("animation-error");
    }
  }
});

//Скрипты для модального окна карты
var mapModal = document.querySelector(".map-modal");
var mapOpen = document.querySelector(".map-open");
var mapClose = mapModal.querySelector(".close-btn");

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("visually-hidden");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!mapModal.classList.contains("visually-hidden")) {
      evt.preventDefault();
      mapModal.classList.add("visually-hidden");
    }
  }
});

//Скрипты для слайдера спец. предложений 
var offersCardsList = document.querySelector(".offer-cards-list");
var offersCards = offersCardsList.querySelectorAll("li");
var offersNavigation = document.querySelector(".offers-navigation");
var offersButtons = offersNavigation.querySelectorAll("button");

for (var i = 0; i < offersCards.length; i = i + 1) {
  //Работа по клику
  offersButtons[i].onclick = function (evt) {
    evt.preventDefault;
    for (var j = 0; j < offersCards.length; j = j + 1) {
      offersCards[j].classList.remove("current");
      offersButtons[j].classList.remove("current");
      if (this === offersButtons[j]) {
        offersCards[j].classList.add("current");
      }
    }
    this.classList.add("current");
  };
  //Работа по табу
  offersButtons[i].addEventListener('focus', function (evt) {
    for (var j = 0; j < offersCards.length; j = j + 1) {
      offersCards[j].classList.remove("current");
      offersButtons[j].classList.remove("current");
      if (this === offersButtons[j]) {
        offersCards[j].classList.add("current");
      }
    }
    this.classList.add("current");
  })
};

//Скрипты для слайдера сервисов 
var servicesFilter = document.querySelector(".purchase-services-filter");
var filterItems = servicesFilter.querySelectorAll("li");
var filterButtons = servicesFilter.querySelectorAll(".main-button");
var services = document.querySelector(".purchase-services-items");
var servicesItems = services.querySelectorAll("li");
var currentService;

for (var i = 0; i < filterItems.length; i = i + 1) {
  //Работа по клику
  filterItems[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j = 0; j < filterItems.length; j = j + 1) {
      filterItems[j].classList.remove("current");
      servicesItems[j].classList.remove("current");
    }
    if (this.className === "delivery") {
      currentService = services.querySelector(".delivery");
      currentService.classList.add("current");
    } else {
      if (this.className === "warranty") {
        currentService = services.querySelector(".warranty");
        currentService.classList.add("current");
      } else {
        if (this.className === "credit") {
          currentService = services.querySelector(".credit");
          currentService.classList.add("current");
        }
      }
    };
    this.classList.add("current");
  });
  filterButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j = 0; j < filterButtons.length; j = j + 1) {
      filterButtons[j].classList.remove("current");
    }
    this.classList.add("current");
  });

  //Работа по табу
  filterButtons[i].addEventListener('focus', function (evt) {
    for (var j = 0; j < filterItems.length; j = j + 1) {
      servicesItems[j].classList.remove("current");
      filterButtons[j].classList.remove("current");
      filterItems[j].classList.remove("current");
      if (this === filterButtons[j]) {
        servicesItems[j].classList.add("current");
        filterItems[j].classList.add("current");
      }
    }
    this.classList.add("current");
  });
};
