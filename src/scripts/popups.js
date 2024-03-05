const myPage = $(".body"),
  overlayHigh = $(".overlay.high"),
  overlayLow = $(".overlay.low"),
  closeSubmodals = $('[data-action="close-submodal"]'),
  popups = $('[data-element="popup"]'),
  submodals = $('[data-element="submodal"]'),
  closeForm = $('[data-action="close-popup"]'),
  header = $("header"),
  catalogMenu = $(".header__catalog-menu"),
  catalogBtn = $(".header__catalog-btn"),
  catalogMenus = $('[data-catalog="catalog-menu"]'),
  catalogSections = $("[data-catalog-section]"),
  catalogBlocks = $("[data-catalog-block]"),
  catalogLinks = $(".catalog-menu__center-link"),
  mobileMenuBtn = $('[data-btn="menu-mobile-btn"]'),
  mobileMenu = $('[data-catalog="mobile-menu"]'),
  mobileSubmenu = $('[data-catalog="mobile-submenu"]'),
  catalogPropertiesFormCloseBtn = $('[data-catalog="catalog-close"]'),
  catalogResetPropertiesBtn = $(".material-properties__reset"),
  catalogPropertiesCheckboxes = $("[data-material-parameters]"),
  addToCartBtns = $("[data-btn=add-to-cart]"),
  addToCartPopup = $(".product-hero__cart"),
  addToCartCloseBtn = $(".product-hero__cart-close"),
  removeItemBtns = $('[data-action="remove-item"]'),
  scrollTriggers = $('[data-element="scroll-event"]'),
  headerCartPopupBtn = $('[data-client-target="open-cart"]'),
  headerCartBtnLabel = header.find(".cart__counter"),
  vacationPopupBtns = $('[data-action="apply-vacation"]'),
  openFormBtn = $("[data-client-target]");

export function setHighOverlay() {
  $(overlayHigh).addClass("show");
  $(myPage).addClass("overflow");
}

function setLowOverlay() {
  $(overlayLow).addClass("show");
  $(myPage).addClass("overflow");
}

export function closePopups() {
  popups.each((index, popup) => {
    if (!$(popup).data("catalog-block")) $(popup).removeClass("show");
  });

  $(myPage).removeClass("overflow");

  if (window.innerWidth < 1280) {
    setTimeout(() => {
      $(mobileMenu).css("transition", "");
    }, 500);
  }

  closeCatalogBlocks();
}

export function resetPopups() {
  closePopups();
}

$(closeForm).each(function () {
  $(this).click(() => closePopups());
});

$(myPage).on("keydown", function (e) {
  if (e.key === "Escape") {
    closePopups();
  }
});

$(catalogBtn).click(() => {
  $(catalogMenu).toggleClass("show");
  $(catalogBtn).toggleClass("show");
  $(overlayLow).toggleClass("show");
  $(header).toggleClass("show");
  $(catalogMenus).each((index, section) => $(section).toggleClass("show"));
  $(catalogSections).each((index, section) => $(section).removeClass("show"));
  $(myPage).toggleClass("overflow");
  $(`[data-catalog-block="0"]`).removeClass("show");

  if ($(".catalog-menu__right-inner").hasClass("show"))
    $(".catalog-menu__right-inner").removeClass("show");
});

function closeCatalogBlocks() {
  $(catalogSections).each((index, section) => $(section).removeClass("show"));
  $(`[data-catalog-block="0"]`).removeClass("show");
  if (window.innerWidth >= 1280) {
    $(catalogBlocks).each((index, block) => $(block).removeClass("show"));
  }
}

$(catalogSections).each((index, section) => {
  if (window.innerWidth >= 1280) {
    $(section).on("mouseover", function () {
      closeCatalogBlocks();
      $(this).addClass("show");
      $(`[data-catalog-block="0"]`).addClass("show");
      $(
        `[data-catalog-block="${$(section).data("catalog-section")}"]`
      ).addClass("show");
    });
    return;
  }

  $(section).on("click", function () {
    $(catalogBlocks).each((index, block) => $(block).removeClass("show"));
    $('[data-catalog-block="0"]').addClass("show");
    $(`[data-catalog-block=${$(this).data("catalog-section")}]`).addClass(
      "show"
    );
    $(mobileMenu).css("transition", "0s");
  });
});

$(catalogLinks).each((index, link) => {
  $(link).on("mouseover", function () {
    $(".catalog-menu__right-inner").addClass("show");
    $(".catalog-menu__right-image").addClass("show");
  });

  $(link).on("mouseout", function () {
    $(".catalog-menu__right-inner").removeClass("show");
    $(".catalog-menu__right-image").removeClass("show");
  });
});

$(mobileSubmenu).click(() => {
  $(mobileMenu).css("transition", "");
  $('[data-catalog-block="0"]').removeClass("show");
});

function clearCatalogPropertiesCheckboxes() {
  $(catalogPropertiesCheckboxes).each((index, checkbox) => {
    checkbox.checked = false;
  });
}

$(catalogResetPropertiesBtn).click(() => clearCatalogPropertiesCheckboxes());

$(catalogPropertiesFormCloseBtn).click(() =>
  clearCatalogPropertiesCheckboxes()
);

$(mobileMenuBtn).click(function (e) {
  if (!$(mobileMenu).hasClass("show")) {
    setLowOverlay();
    $(this).addClass("show");
    $(catalogMenus).addClass("show");
    $(mobileMenu).addClass("show");
    return;
  }
  $(catalogMenus).removeClass("show");
  $(mobileMenu).removeClass("show");

  closePopups();
});

$(addToCartBtns).each((index, btn) => {
  $(btn).on("click", function () {
    const productMovingImage = document.createElement("div");
    $(productMovingImage).addClass("product-hero__image-to-cart");
    productMovingImage.innerHTML = `<picture class="picture product-hero__image-pic">
    ${$(".product-hero").find(".product-hero__image-pic").html()}</picture>`;

    $(".product-hero").append(productMovingImage);

    const productImage = $('[data-element="product-image"]'),
      startCoordX = $(productImage)[0].getBoundingClientRect().left,
      startCoordY = $(productImage)[0].getBoundingClientRect().top,
      finishCoordX =
        $(headerCartPopupBtn)[0].getBoundingClientRect().left +
        $(headerCartPopupBtn).height() / 2,
      finishCoordY =
        $(headerCartPopupBtn)[0].getBoundingClientRect().top +
        $(headerCartPopupBtn).width() / 2,
      startWidth = $(productImage).width(),
      startHeight = $(productImage).height();

    $(productMovingImage).css("top", `${startCoordY}`);
    $(productMovingImage).css("left", `${startCoordX}`);
    $(productMovingImage).css("height", `${startHeight}`);
    $(productMovingImage).css("width", `${startWidth}`);
    $(productMovingImage).css("transform", `scale(1.1)`);

    setTimeout(() => {
      $(productMovingImage).css("top", `${finishCoordY}`);
      $(productMovingImage).css("left", `${finishCoordX}`);
      $(productMovingImage).css("height", "0");
      $(productMovingImage).css("width", "0");
      $(productMovingImage).addClass("run");
    }, 250);

    setTimeout(() => {
      $(headerCartBtnLabel).addClass("show");
      $(headerCartBtnLabel).css("transform", "scale(1.25");
      let cartCounter = +$(headerCartBtnLabel).html();

      $(headerCartBtnLabel).html(++cartCounter);

      setTimeout(() => {
        $(headerCartBtnLabel).css("transform", "");
      }, 150);
      $(addToCartPopup).addClass("show");
      $(productMovingImage).remove();
    }, 750);
  });
});

$(addToCartCloseBtn).on("click", () => $(addToCartPopup).removeClass("show"));

// корзина
$(removeItemBtns).each((index, btn) => {
  let itemsCount;

  $(btn).on("click", function () {
    const itemToRemove = $(btn).closest('[data-element="item"]');
    $(itemToRemove).fadeOut(250, function () {
      $(itemToRemove).remove();
    });

    const myPopup = itemToRemove.closest('[data-element="popup"]'),
      popupTitle = $(myPopup).find($('[data-element="popup-title"]')),
      popupControls = $(myPopup).find(".contact-form__controls"),
      popupScrollContent = $(myPopup).find('[data-element="scroll-event"]'),
      popupContent = $(myPopup).find('[data-element="popup-content"]'),
      popupStub = $(myPopup).find('[data-element="popup-success"]');

    emptyCart = $(myPopup).find(".header__cart-empty");

    itemsCount = $(myPopup).find($('[data-element="item"]')).length - 1;

    if (itemsCount >= 0) $(headerCartBtnLabel).html(itemsCount);

    if (itemsCount === 0) {
      $(headerCartBtnLabel).removeClass("show");
      $(popupTitle).addClass("hide");
      $(popupControls).addClass("hide");
      $(popupContent).fadeOut(500, () => $(popupStub).fadeIn(500));

      $(popupScrollContent).fadeOut(500, () => {
        $(emptyCart).removeClass("hide");
      });
      return;
    }

    if (itemsCount > 0) {
      $(headerCartBtnLabel).addClass("show");
      return;
    }
  });
});

$(scrollTriggers).each((index, trigger) => {
  $(trigger).scroll(function () {
    if ($(this).scrollTop() > 1) {
      this.closest('[data-element="popup"]')
        .querySelector('[data-element="popup-header-separator"]')
        .classList.add("show");
      return;
    }
    this.closest('[data-element="popup"]')
      .querySelector('[data-element="popup-header-separator"]')
      .classList.remove("show");
  });
});

// $(orderStubWindow).on("submit", function (e) {
//   e.preventDefault();
//   $(orderStubContent).fadeOut(500, () => $(orderStub).fadeIn(500));
// });

// $(aboutPopup).on("submit", function (e) {
//   e.preventDefault();
//   console.log("submit");
//   $(this)
//     .find('[data-element="popup-content"]')
//     .fadeOut(500, () =>
//       $(this).find('[data-element="popup-success"]').addClass("show")
//     );
// });

// $(vacationFormWrapper).on("submit", function (e) {
//   e.preventDefault();
//   console.log("submit vacation");

//   const myPopup = $(this).closest('[data-element="popup"]');
//   const myForm = $(myPopup).find('[data-element="popup-content"]');
//   const myStub = $(myPopup).find('[data-element="popup-success"]');

//   $(myForm).fadeOut(500, () => {
//     $(myStub).addClass("show");
//   });
// });

$(closeSubmodals).each((index, submodal) => {
  $(submodal).on("click", function () {
    $(submodals).map((index, popup) => {
      $(popup).removeClass("show");
    });
  });
});

$(openFormBtn).map((index, btn) => {
  $(btn).on("click", function () {
    closePopups();

    const myPopup = document.querySelector(
      `[data-form-target="${this.getAttribute("data-client-target")}"]`
    );

    setHighOverlay();
    myPopup.classList.add("show");
  });
});

$(headerCartPopupBtn).on("click", () => {
  $(".product-hero__cart").removeClass("show");
});

/////////////////////////////////////////

$(vacationPopupBtns).map((index, btn) => {
  $(btn).on("click", function (e) {
    const myForm = $('[data-popup="vacation-popup"]');

    if ($(myForm).length > 0) {
      $(myForm).addClass("show");
      setHighOverlay();
    }
  });
});

/////////////////////////////
