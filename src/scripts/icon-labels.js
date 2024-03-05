const icons = $("[data-card-icon]");

$(icons).each((index, icon) => {
  $(icon).on("click", function (e) {
    e.preventDefault();
  });
});
