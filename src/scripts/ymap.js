var myMap;

let currentMap = null;

const openMapBtns = document.querySelectorAll(
    '[data-action="ymap-popup-show"]'
  ),
  openSubmodal = document.querySelectorAll('[data-element="submodal-btn"]'),
  overlaySubmodal = document.querySelector(".overlay.submodal"),
  popupSubmodal = document.querySelector('[data-popup="ymap-submodal"]'),
  defaultCoords = [59.859542, 30.328265];

// Дождёмся загрузки API и готовности DOM.

document.addEventListener("DOMContentLoaded", () => {
  const myMap = document.querySelector("#map");

  if (!myMap) return;

  function initMap(myCoords) {
    ymaps.ready(init);

    function init() {
      ymaps.ready(function () {
        var myMap = new ymaps.Map(
            "map",
            {
              center: myCoords,

              zoom: 10,
            },
            {
              searchControlProvider: "yandex#search",
            }
          ),
          // Создаём макет содержимого.
          // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          //   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          // ),
          myPlacemark = new ymaps.Placemark(
            myMap.getCenter(),
            {
              // hintContent: "Собственный значок метки",
              // balloonContent: "Это красивая метка",
            },
            {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: "assets/images/svg/ya-placemark.svg",
              // Размеры метки.
              iconImageSize: [70.57, 85],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-35.285, -85],
            }
          );

        myMap.geoObjects.add(myPlacemark);

        currentMap = myMap;
      });
    }
  }

  // создание карты при загрузке страницы для ускорения первого вызова

  initMap(defaultCoords);

  // вызов окна с картой и передача параметров карты

  openMapBtns.forEach((btn) => {
    btn.onclick = function () {
      if (currentMap !== null) currentMap.destroy();

      myCoords = this.getAttribute("data-coords")
        .split(",")
        .map((coord) => +coord);

      initMap(myCoords);

      const myPopup = document.querySelector('[data-popup="ymap-popup"]'),
        myPage = document.querySelector(".body"),
        myMainOverlay = document.querySelector(".overlay.high");

      if (myPopup) {
        this.hasAttribute("data-submodal")
          ? myPopup.classList.add("contacts__ymap_submodal")
          : myPopup.classList.remove("contacts__ymap_submodal");

        myPopup.querySelector(".contact-form__title").textContent =
          this.getAttribute("data-title");

        myPopup.classList.add("show");
        myPage.classList.add("overflow");
        myMainOverlay.classList.add("show");
      }
    };
  });

  openSubmodal.forEach((btn) => {
    btn.onclick = function () {
      overlaySubmodal.classList.add("show");
      popupSubmodal.classList.add("show");
    };
  });
});
