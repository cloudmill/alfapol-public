import Accordion from "accordion-js";
// import 'accordion-js/dist/accordion.min.css';

export const accordion = () => {
  const accordions = document.querySelectorAll(".accordion-container");
  if (!accordions) return;

  accordions.forEach((elem) => {
    new Accordion(elem, {
      duration: 500,

      onOpen: function (currentElement) {
        if (!currentElement.hasAttribute("data-header-menu")) return;

        currentElement.querySelector(".ac-panel").style.height =
          currentElement.querySelector(".ac-panel").offsetHeight;
        $(document).on("click", (e) => {
          const myContainer = currentElement.querySelector(".ac-panel");
          if (!currentElement.contains(e.target)) {
            $(currentElement).removeClass("is-active");
            currentElement.querySelector(".ac-panel").style.height = "0";
            currentElement
              .querySelector(".ac-trigger")
              .setAttribute("aria-expanded", "false");
          }
        });
      },
    });
  });
};

accordion();
