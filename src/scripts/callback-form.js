// const callbackForms = $(".callback-form");

// $(callbackForms).each((index, form) => {
//   $(form)
//     .closest("div")
//     .on("submit", function (e) {
//       e.preventDefault();

//       const myFormWrapper = $(form).closest('[data-element="form-wrapper"]'),
//         mySuccessPopup = $(myFormWrapper).find('[data-success="popup"]'),
//         myInputs = $(form).find("input"),
//         myTextAreas = $(form).find("textarea"),
//         myAttachments = $(myFormWrapper).find('[data-element="file-list"]');

//       if ($(myFormWrapper).length > 0) {
//         $(mySuccessPopup).addClass("show");
//         $(".overlay.high").addClass("show");
//         $(".body").addClass("overflow");
//         if ($(myInputs).length > 0)
//           $(myInputs).map((index, input) => $(input).val(""));
//         if ($(myTextAreas).length > 0)
//           $(myTextAreas).map((index, textArea) => $(textArea).val(""));
//         if ($(myAttachments).length > 0) {
//           $(myAttachments).empty();
//           $(myAttachments).removeClass("added");
//         }
//       }

//       console.log(
//         `form "${$(form)
//           .closest('[data-element="form-wrapper"]')
//           .find("h4")
//           .text()}" submited`
//       );
//     });
// });
