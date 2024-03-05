const { each } = require("jquery");

document.addEventListener("DOMContentLoaded", () => {
  /////// history slider mobile

  function initHistorySlider() {
    const historySlider = $(".about-company__history.mobile");

    if (!historySlider) return;

    const yearSlidesBtn = $(historySlider).find("[data-history-slide-btn]");

    let activeIndex = 1,
      prevActiveIndex = null;

    $(yearSlidesBtn).each((index, btn) => {
      $(btn).on("click", function (e) {
        prevActiveIndex = activeIndex;
        activeIndex = $(this).data("history-slide-btn");

        $(historySlider)
          .find(`[data-history-slide-btn=${prevActiveIndex}]`)
          .removeClass("active");
        $(this).addClass("active");

        $(historySlider)
          .find(`[data-history-slide=${prevActiveIndex}]`)
          .fadeOut(250, () =>
            $(historySlider)
              .find(`[data-history-slide=${activeIndex}]`)
              .fadeIn(250)
          );
      });
    });
  }

  initHistorySlider();

  function vacanciesToggleDirection() {
    const toggleBtns = $("[data-chapter-btn]");
    if (toggleBtns.length == 0) return;

    $(toggleBtns).each((index, btn) => {
      $(btn).on("click", function () {
        let prevActiveChapter = $("[data-chapter-content].active");
        let newActiveChapter = $(
          `[data-chapter-content=${$(this).data("chapter-btn")}]`
        );
        $(prevActiveChapter).removeClass("active");
        $(newActiveChapter).addClass("active");

        $("[data-chapter-btn].active").removeClass("active");
        $(this).addClass("active");
        $(prevActiveChapter).fadeOut(250, () =>
          $(newActiveChapter).fadeIn(250)
        );
      });
    });
  }

  vacanciesToggleDirection();
});
