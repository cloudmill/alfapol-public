// import { log } from "console";
import Swiper from "swiper";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

const mySlider = document.querySelector(".objects-slider");
let paginationDots;

let objectsImgSlider;

document.addEventListener("DOMContentLoaded", () => {
  const productExamplesSimilarSlider = new Swiper(".product-similar__swiper", {
    modules: [Navigation],
    speed: 500,
    spaceBetween: 8,
    slidesPerView: "auto",
    loop: true,
    allowTouchMove: true,

    navigation: {
      nextEl: ".product-similar__btn.right",
      prevEl: ".product-similar__btn.left",
    },

    breakpoints: {
      1280: {
        allowTouchMove: false,
        // loop: true,
      },

      768: {
        allowTouchMove: true,
        // loop: false,
      },
    },

    on: {
      init: function () {
        const slidesCount = this.el.querySelectorAll(".swiper-slide").length;

        if (slidesCount < 3) {
          this.el
            .closest(".product-subslider__inner")
            .querySelector(".product-subslider__buttons").style.display =
            "none";
        }
      },
    },
  });
  const productExamplesRecentSlider = new Swiper(".product-recent__swiper", {
    modules: [Navigation],
    speed: 500,
    spaceBetween: 8,
    slidesPerView: "auto",
    loop: true,
    allowTouchMove: true,

    navigation: {
      nextEl: ".product-recent__btn.right",
      prevEl: ".product-recent__btn.left",
    },

    breakpoints: {
      1280: {
        allowTouchMove: false,
        // loop: true,
      },

      768: {
        allowTouchMove: true,
        // loop: false,
      },
    },
  });

  const productExamplesSlider = new Swiper(".product-examples__swiper", {
    modules: [Navigation, Pagination],
    speed: 500,
    spaceBetween: 8,
    slidesPerView: "auto",
    allowTouchMove: true,
    loop: true,

    pagination: {
      el: ".product-examples__slider-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".product-examples__slider-button.right",
      prevEl: ".product-examples__slider-button.left",
    },

    breakpoints: {
      allowTouchMove: false,
      1280: {
        allowTouchMove: false,
        // loop: true,
      },

      768: {
        // loop: false,
        allowTouchMove: true,
      },
    },
  });

  const productHeroSlider = new Swiper(".product-hero__slider", {
    modules: [Navigation, Pagination],
    speed: 500,
    spaceBetween: 8,
    slidesPerView: "auto",
    loop: true,
    allowTouchMove: true,

    pagination: {
      el: ".product-hero__slider-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".product-hero__slider-button.right",
      prevEl: ".product-hero__slider-button.left",
    },

    breakpoints: {
      1280: {
        allowTouchMove: false,
      },

      // 768: {
      //   allowTouchMove: true,
      // },
    },
  });

  const objectsIconSlider = new Swiper(".objects-slider__icon", {
    modules: [Navigation, Pagination],
    speed: 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: false,
    loop: true,
  });

  const objectsSlider = new Swiper(".objects-slider__swiper", {
    modules: [Navigation, Pagination],
    speed: 1000,
    spaceBetween: 8,
    slidesPerView: "auto",
    slidesPerGroup: "auto",
    allowTouchMove: false,
    loop: true,

    //
  });

  objectsImgSlider = new Swiper(".objects-swiper-image", {
    modules: [Navigation, Pagination],
    speed: 1000,

    spaceBetween: 8,

    slidesPerView: "auto",
    loop: true,

    // mousewheel: {
    //     enabled: true,
    //     // invert: true,
    //     eventsTarget: '.production-slider',
    // },

    // freeMode: {
    //     enabled: true,
    //     sticky: true,
    // },

    breakpoints: {
      1280: {
        spaceBetween: 0,
        allowTouchMove: false,
      },

      768: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        allowTouchMove: true,
        loop: true,
      },
    },

    pagination: {
      el: ".objects-slider__pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".objects-slider__btn_right",
      prevEl: ".objects-slider__btn_left",
    },
    on: {
      slideChange: function () {
        // const swiperIndex = objectsImgSlider.realIndex;
        // const swiperIndex = objectsImgSlider.activeIndex;
        const swiperIndex = this.realIndex;

        // console.log(swiperIndex);

        objectsSlider.slideToLoop(swiperIndex);
        objectsIconSlider.slideToLoop(swiperIndex);
      },
      init: function () {
        const objects = mySlider.querySelectorAll(
          ".swiper-slide__thumb-object"
        );

        objects.forEach((obj, i) => {
          obj.addEventListener("click", () => {
            objectsImgSlider.slideToLoop(i);
          });
        });
      },
    },
  });

  const productsHorizontalSlider = new Swiper(".production-slider", {
    slidesPerView: "auto",

    mousewheel: {
      enabled: true,
      // invert: true,
      eventsTarget: ".production-slider",
    },

    freeMode: {
      enabled: true,
      sticky: true,
    },
  });

  const mainHeroDescSlider = new Swiper(".main-hero__title-slider", {
    speed: 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: false,
    loop: true,
  });

  const mainHeroSlider = new Swiper(".main-hero__slider", {
    modules: [Navigation, Pagination],
    speed: 1000,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: true,
    loop: true,

    breakpoints: {
      1280: {
        allowTouchMove: false,
      },
    },

    pagination: {
      el: ".main-hero__pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      prevEl: ".main-hero__btn.left",
      nextEl: ".main-hero__btn-right",
    },

    on: {
      slideChange: function () {
        const myTitle = $(".main-hero__title");
        // const slideIndex = mainHeroSlider.realIndex;
        const slideIndex = this.realIndex;
        const paginationIndex = $(paginationDots).find(
          ".swiper-pagination-bullet-active"
        );
        const pag = document.querySelector(".main-hero__pagination");
        const bullets = pag.querySelectorAll(".swiper-pagination-bullet");

        // console.log(pag);

        // console.log(paginationDots.prevObject.find('.swiper-pagination-bullet-active').index());
        if (slideIndex !== 0) {
          myTitle.removeClass("show");
        } else {
          myTitle.addClass("show");
        }

        // console.log(slideIndex);

        mainHeroDescSlider.slideToLoop(slideIndex);
      },
      init: function () {
        paginationDots = $(".main-hero__pagination").find(
          ".swiper-pagination-bullet"
        );
      },
    },
  });

  const awardsSliderImages = new Swiper(".about-company__awards-slider", {
    modules: [Navigation, Pagination],
    speed: 500,
    spaceBetween: 8,
    slidesPerView: "auto",
    allowTouchMove: true,
    loop: true,

    breakpoints: {
      1280: {
        allowTouchMove: false,
      },
    },

    pagination: {
      el: ".about-company__awards-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      prevEl: ".about-company__awards-btn.left",
      nextEl: ".about-company__awards-btn.right",
    },
  });

  const salesDepartmentSlider = new Swiper(".sales-department__slider", {
    modules: [Navigation],
    speed: 500,
    spaceBetween: 9,
    slidesPerView: "auto",
    // slidesPerGroup: "auto",
    loop: true,
    allowTouchMove: true,

    breakpoints: {
      1280: {
        allowTouchMove: false,
      },

      768: {
        allowTouchMove: true,
      },
    },

    navigation: {
      prevEl: ".sales-department__btn.left",
      nextEl: ".sales-department__btn.right",
    },
  });
});
