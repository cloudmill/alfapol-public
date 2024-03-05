import "parsleyjs";

import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", () => {
  $("form").parsley();

  Inputmask({ mask: "+7 (999) 999-99-99", showMaskOnHover: false }).mask(
    "[data-mask-phone]"
  );

  window.Parsley.addValidator("phoneRequired", {
    validateString: function (value) {
      if (value === null || value === undefined) {
        return false;
      } else {
        var digits = value.replace(/\D/g, "");
        return digits.length === 11;
      }
    },
    messages: {
      ru: "Пожалуйста, введите полный номер телефона.",
    },
  });

  $("[data-mask-phone]").attr("data-parsley-phone-required", "");

  Parsley.addMessages("ru", {
    defaultMessage: "Формат данных не совсем корректный",
    type: {
      email: "Формат данных не совсем корректный",
      url: "Введите URL адрес",
      number: "Введите число",
      integer: "Введите целое число",
      digits: "Введите только цифры",
      alphanum: "Введите буквенно-цифровое значение",
    },
    notblank: "Это поле должно быть заполнено",
    required: "Здесь не хватает данных",
    pattern: "Формат данных не совсем корректный",
    min: "Это значение должно быть не менее чем %s",
    max: "Это значение должно быть не более чем %s",
    range: "Это значение должно быть от %s до %s",
    minlength: "Минимум %s символов",
    maxlength: "Это значение должно содержать не более %s символов",
    length: "Это значение должно содержать от %s до %s символов",
    mincheck: "Выберите не менее %s значений",
    maxcheck: "Выберите не более %s значений",
    check: "Выберите от %s до %s значений",
    equalto: "Пароли не совпадают",
  });

  Parsley.setLocale("ru");

  // const form = $('.edit-data-form')
  // const FormInputs = $(".edit-data-form__inputs")
  // const FormSuccess = $(".edit-data-form__success")
  // const FormSuccessBtn = $(".edit-data-form__success-close-btn")

  // $(form).on('submit', function(e) {
  // e.preventDefault()

  // $(FormInputs).fadeOut(500);
  // setTimeout(() => {
  //     $(FormSuccess).fadeIn(500)
  // }, 500);
  // })

  // $(FormSuccessBtn).on("click", function(e) {
  //     e.preventDefault()

  //     closeForm()
  //     setTimeout(() => {
  //         $(FormSuccess).fadeOut()
  //         $(FormInputs).fadeIn()
  //         clearForm()
  //     }, 500);

  //     setTimeout(() => {
  //         showForm()
  //     }, 1000);
  // })
});
