const catalogSectionsBtns = $("[data-catalog-btn]");
const catalogSections = $("[data-catalog-chapter]");

$(catalogSectionsBtns).each(function (index, btn) {
  $(btn).on("click", function (e) {
    $(catalogSectionsBtns).each(function (index, btn) {
      $(btn).removeClass("active");
    });
    $(this).addClass("active");
    $(catalogSections).each(function (index, section) {
      $(section).fadeOut(250);
    });
    setTimeout(() => {
      $(`[data-catalog-chapter="${$(this).data("catalog-btn")}"]`).fadeIn(250);
    }, 250);
  });
});
