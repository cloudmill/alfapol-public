window.addEventListener("load", function (event) {
  const myCopyright = document.querySelector(".footer__copyright");

  if (!myCopyright) return;

  myCopyright.textContent =
    "© 1997–" +
    new Date().getFullYear() +
    " Производственное предприятие ООО «АЛЬФАПОЛ». Все права защищены. Копирование информации или данных, в частности, использование текстов, фрагментов текста или иллюстраций, требует предварительного согласия компании ООО «АЛЬФАПОЛ»";
});
