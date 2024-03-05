import { resetPopups } from "./popups";
import { closePopups } from "./popups";
import { setHighOverlay } from "./popups";

const forms = [...document.querySelectorAll("form")];
const contactFormSuccessClose = $(".contact-form__success-close");
const attachFileBtns = $('[data-action="attach-file"]');
const removeFileBtns = $('[data-action="remove-file"]');

/* по невыявленным причинам форма успешно сабмитится при каждой попытке сабмита,
 даже не пройдя валидацию полей, при этом все корректно отрабатывает, если повесить 
 событие "сабмит" на ближайший родительский div, а не на саму форму */

// submit forms

forms.map((form) => {
  form.closest("div").addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("submit " + form.className);

    // success для формы в модальном окне

    if (form.closest('[data-element="popup"]')) {
      const popup = form.closest('[data-element="popup"]');
      const popupContent = $(popup).find('[data-element="popup-content"]');
      const popupSuccess = $(popup).find('[data-element="popup-success"]');

      $(popupContent).fadeOut(500, () => $(popupSuccess).addClass("show"));

      return;
    }

    // success в полном окне

    if (form.closest('[data-element="window-content"]')) {
      const formContent = form.closest('[data-element="window-content"]');
      const formSuccess = form
        .closest('[data-element="window"]')
        .querySelector('[data-element="window-success"]');

      $(formContent).fadeOut(500, () => $(formSuccess).fadeIn(500));

      return;
    }

    // success во всплывающем окне

    const formWrapper = form.closest('[data-element="form-wrapper"]');
    const formSuccess = formWrapper.querySelector('[data-success="popup"]');
    const myInputs = $(form).find("input");
    const myTextAreas = $(form).find("textarea");
    const myAttachments = $(formWrapper).find('[data-element="file-list"]');

    if ($(formWrapper).length > 0) {
      if ($(myInputs).length > 0)
        $(myInputs).map((index, input) => $(input).val(""));
      if ($(myTextAreas).length > 0)
        $(myTextAreas).map((index, textArea) => $(textArea).val(""));
      if ($(myAttachments).length > 0) {
        $(myAttachments).empty();
        $(myAttachments).removeClass("added");
      }
    }

    setTimeout(() => {
      $(formSuccess).addClass("show");
    }, 500);

    setHighOverlay();
  });
});

// возврат из success form к пустой форме

$(contactFormSuccessClose).on("click", function () {
  resetPopups();

  const myPopup = this.closest('[data-element="popup"]');

  myPopup.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });

  myPopup.querySelectorAll("textArea").forEach((textArea) => {
    textArea.value = "";
  });

  setTimeout(() => {
    $(myPopup).find('[data-element="popup-success"]').removeClass("show");
    $(myPopup).find('[data-element="popup-content"]').fadeIn(0);
  }, 800);
});

// прикрепить файл - логгирование кнопки

$(attachFileBtns).each((index, btn) => {
  $(btn).on("click", function (event) {
    event.preventDefault();
    console.log("attach file");
  });
});

// удалить прикрепленный файл из формы

$(removeFileBtns).each((index, btn) => {
  $(btn).on("click", function (e) {
    e.preventDefault();

    const myFile = $(this).closest('[data-element="file"]');

    myFile.fadeOut(500, () => myFile.remove());

    const myFileList = $(this).closest('[data-element="file-list"]');
    const myFileListLength = myFileList[0].children.length - 1;

    if (myFileListLength < 1)
      setTimeout(() => {
        myFileList.removeClass("added");
      }, 500);
  });
});
