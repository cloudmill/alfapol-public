const upBtn = $('[data-btn="data-up"]')

upBtn.click(() => $('html, body').animate({ scrollTop: 0 }, 500))