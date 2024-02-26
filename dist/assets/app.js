(()=>{var e,t={206:(e,t,a)=>{"use strict";var o=a(579),n=a(638);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}n(window).on("load",(function(){var e;(e=n("[data-slider-id]")).length&&e.each((function(){var e,t,a=n(this),s=a.data("slider-id"),c=a.data("slider-prev"),r=a.data("slider-next"),d=n('[data-slider-button="'.concat(c,'"]')),u=n('[data-slider-button="'.concat(r,'"]')),p=n("[data-slider-buttons]");if(p.length&&a.find(".swiper-slide").length<+p.data("slider-buttons")&&p.addClass("hidden"),a[0].hasAttribute("data-thumbs-slider")){var h=n('[data-thumbs-id="'.concat(s,'"]'));e=new o.Z(h[0],{direction:"vertical",slidesPerView:"auto",on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,a){e.onclick=function(){t.slideTo(a)}}))}}})}var f={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:i({},1280,{spaceBetween:40})};switch(s){case 2:f=l(l({},f),{},{loop:!0});break;case 11:case"m11":f={pagination:{el:'[data-swiper-pagination="'.concat(s,'"]'),type:"bullets"},on:{slideChange:function(t){var a=t.realIndex,o=e.el.querySelectorAll("[data-thumb]");e.el.querySelector("[data-thumb].active").classList.remove("active"),o[a].classList.add("active"),e.slideTo(a)}}}}t=new o.Z(a[0],f),d.on("click",(function(){t.slidePrev()})),u.on("click",(function(){t.slideNext()}))}))}));a(490);var c=a(638);c((function(){c(".select__select").each((function(){var e=c(this),t=e.closest(".select-wrapper"),a=getComputedStyle(t[0]),o=c(this).data("select-placeholder");"static"===a.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var a="scroll.select2";c(e.target).parents().off(a),c(window).off(a);var o=t.find(".select2-dropdown");o.hide();var n=setTimeout((function(){o.slideDown({duration:500}),clearTimeout(n)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var n=t.find(".select2-dropdown"),s=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),n.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(s)}),0)}))}))}));a(329),a(117);var r,d,u=a(835),p=a(502),h=a(638),f=document.querySelector(".objects-slider");document.addEventListener("DOMContentLoaded",(function(){new u.Z(".product-similar__swiper",{modules:[p.W_],speed:500,spaceBetween:8,slidesPerView:"auto",loop:!0,allowTouchMove:!0,navigation:{nextEl:".product-similar__btn.right",prevEl:".product-similar__btn.left"},breakpoints:{1280:{allowTouchMove:!1},768:{allowTouchMove:!0}},on:{init:function(){this.el.querySelectorAll(".swiper-slide").length<3&&(this.el.closest(".product-subslider__inner").querySelector(".product-subslider__buttons").style.display="none")}}}),new u.Z(".product-recent__swiper",{modules:[p.W_],speed:500,spaceBetween:8,slidesPerView:"auto",loop:!0,allowTouchMove:!0,navigation:{nextEl:".product-recent__btn.right",prevEl:".product-recent__btn.left"},breakpoints:{1280:{allowTouchMove:!1},768:{allowTouchMove:!0}}}),new u.Z(".product-examples__swiper",{modules:[p.W_,p.tl],speed:500,spaceBetween:8,slidesPerView:"auto",allowTouchMove:!0,loop:!0,pagination:{el:".product-examples__slider-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".product-examples__slider-button.right",prevEl:".product-examples__slider-button.left"},breakpoints:{allowTouchMove:!1,1280:{allowTouchMove:!1},768:{allowTouchMove:!0}}}),new u.Z(".product-hero__slider",{modules:[p.W_,p.tl],speed:500,spaceBetween:8,slidesPerView:"auto",loop:!0,allowTouchMove:!0,pagination:{el:".product-hero__slider-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".product-hero__slider-button.right",prevEl:".product-hero__slider-button.left"},breakpoints:{1280:{allowTouchMove:!1}}});var e=new u.Z(".objects-slider__icon",{modules:[p.W_,p.tl],speed:0,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!1,loop:!0}),t=new u.Z(".objects-slider__swiper",{modules:[p.W_,p.tl],speed:1e3,spaceBetween:8,slidesPerView:"auto",slidesPerGroup:"auto",allowTouchMove:!1,loop:!0});d=new u.Z(".objects-swiper-image",{modules:[p.W_,p.tl],speed:1e3,spaceBetween:8,slidesPerView:"auto",loop:!0,breakpoints:{1280:{spaceBetween:0,allowTouchMove:!1},768:{spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!0,loop:!0}},pagination:{el:".objects-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".objects-slider__btn_right",prevEl:".objects-slider__btn_left"},on:{slideChange:function(){var a=this.realIndex;t.slideToLoop(a),e.slideToLoop(a)},init:function(){f.querySelectorAll(".swiper-slide__thumb-object").forEach((function(e,t){e.addEventListener("click",(function(){d.slideToLoop(t)}))}))}}});new u.Z(".production-slider",{slidesPerView:"auto",mousewheel:{enabled:!0,eventsTarget:".production-slider"},freeMode:{enabled:!0,sticky:!0}});var a=new u.Z(".main-hero__title-slider",{speed:0,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!1,loop:!0});new u.Z(".main-hero__slider",{modules:[p.W_,p.tl],speed:1e3,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!0,loop:!0,breakpoints:{1280:{allowTouchMove:!1}},pagination:{el:".main-hero__pagination",type:"bullets",clickable:!0},navigation:{prevEl:".main-hero__btn.left",nextEl:".main-hero__btn-right"},on:{slideChange:function(){var e=h(".main-hero__title"),t=this.realIndex;h(r).find(".swiper-pagination-bullet-active"),document.querySelector(".main-hero__pagination").querySelectorAll(".swiper-pagination-bullet");0!==t?e.removeClass("show"):e.addClass("show"),a.slideToLoop(t)},init:function(){r=h(".main-hero__pagination").find(".swiper-pagination-bullet")}}}),new u.Z(".about-company__awards-slider",{modules:[p.W_,p.tl],speed:500,spaceBetween:8,slidesPerView:"auto",allowTouchMove:!0,loop:!0,breakpoints:{1280:{allowTouchMove:!1}},pagination:{el:".about-company__awards-pagination",type:"bullets",clickable:!0},navigation:{prevEl:".about-company__awards-btn.left",nextEl:".about-company__awards-btn.right"}}),new u.Z(".sales-department__slider",{modules:[p.W_],speed:500,spaceBetween:9,slidesPerView:"auto",loop:!0,allowTouchMove:!0,breakpoints:{1280:{allowTouchMove:!1},768:{allowTouchMove:!0}},navigation:{prevEl:".sales-department__btn.left",nextEl:".sales-department__btn.right"}})}));a(566),a(563);var m=a(419),v=a.n(m),w=a(638);document.addEventListener("DOMContentLoaded",(function(){w("form").parsley(),v()({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),window.Parsley.addValidator("phoneRequired",{validateString:function(e){return null!=e&&11===e.replace(/\D/g,"").length},messages:{ru:"Пожалуйста, введите полный номер телефона."}}),w("[data-mask-phone]").attr("data-parsley-phone-required",""),Parsley.addMessages("ru",{defaultMessage:"Формат данных не совсем корректный",type:{email:"Формат данных не совсем корректный",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Здесь не хватает данных",pattern:"Формат данных не совсем корректный",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru")}));a(847);var b,g=a(948),_=a.n(g),y=a(638);(b=document.querySelectorAll(".accordion-container"))&&b.forEach((function(e){new(_())(e,{duration:500,onOpen:function(e){e.hasAttribute("data-header-menu")&&(e.querySelector(".ac-panel").style.height=e.querySelector(".ac-panel").offsetHeight,y(document).on("click",(function(t){e.querySelector(".ac-panel"),e.contains(t.target)||(y(e).removeClass("is-active"),e.querySelector(".ac-panel").style.height="0",e.querySelector(".ac-trigger").setAttribute("aria-expanded","false"))})))}})}));a(315),a(911),a(525),a(793),a(373)},315:(e,t,a)=>{var o=a(638),n=o(".callback-form");o(n).each((function(e,t){o(t).closest("div").on("submit",(function(e){e.preventDefault();var a=o(t).closest('[data-element="form-wrapper"]'),n=o(a).find('[data-success="popup"]'),s=o(t).find("input"),l=o(t).find("textarea"),i=o(a).find('[data-element="file-list"]');o(a).length>0&&(o(n).addClass("show"),o(".overlay.high").addClass("show"),o(".body").addClass("overflow"),o(l).length>0&&o(s).map((function(e,t){return o(t).val("")})),o(l).length>0&&o(l).map((function(e,t){return o(t).val("")})),o(i).length>0&&(o(i).empty(),o(i).removeClass("added"))),console.log('form "'.concat(o(t).closest('[data-element="form-wrapper"]').find("h4").text(),'" submited'))}))}))},847:(e,t,a)=>{var o=a(638),n=o("[data-catalog-btn]"),s=o("[data-catalog-chapter]");o(n).each((function(e,t){o(t).on("click",(function(e){var t=this;o(n).each((function(e,t){o(t).removeClass("active")})),o(this).addClass("active"),o(s).each((function(e,t){o(t).fadeOut(250)})),setTimeout((function(){o('[data-catalog-chapter="'.concat(o(t).data("catalog-btn"),'"]')).fadeIn(250)}),250)}))}))},117:()=>{window.addEventListener("load",(function(e){var t=document.querySelector(".footer__copyright");t&&(t.textContent="© 1997–"+(new Date).getFullYear()+" Производственное предприятие ООО «АЛЬФАПОЛ». Все права защищены. Копирование информации или данных, в частности, использование текстов, фрагментов текста или иллюстраций, требует предварительного согласия компании ООО «АЛЬФАПОЛ»")}))},793:(e,t,a)=>{var o=a(638);a(638).each;document.addEventListener("DOMContentLoaded",(function(){var e;!function(){var e=o(".about-company__history.mobile");if(e){var t=o(e).find("[data-history-slide-btn]"),a=1,n=null;o(t).each((function(t,s){o(s).on("click",(function(t){n=a,a=o(this).data("history-slide-btn"),o(e).find("[data-history-slide-btn=".concat(n,"]")).removeClass("active"),o(this).addClass("active"),o(e).find("[data-history-slide=".concat(n,"]")).fadeOut(250,(function(){return o(e).find("[data-history-slide=".concat(a,"]")).fadeIn(250)}))}))}))}}(),0!=(e=o("[data-chapter-btn]")).length&&o(e).each((function(e,t){o(t).on("click",(function(){var e=o("[data-chapter-content].active"),t=o("[data-chapter-content=".concat(o(this).data("chapter-btn"),"]"));o(e).removeClass("active"),o(t).addClass("active"),o("[data-chapter-btn].active").removeClass("active"),o(this).addClass("active"),o(e).fadeOut(250,(function(){return o(t).fadeIn(250)}))}))}))}))},911:(e,t,a)=>{var o=a(638),n=o("[data-card-icon]");o(n).each((function(e,t){o(t).on("click",(function(e){e.preventDefault()}))}))},525:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-marquee-wrapper]");e&&function(e,t){var a=e.querySelector("[data-marquee]");if(a){var o=a.offsetWidth,n=a.cloneNode(!0);e.appendChild(n);var s,l,i=performance.now();requestAnimationFrame((function e(c){(s=(c-i)/t)>1&&(s%=1,i=c),l=o*s,a.style.transform="translate3d(-".concat(l,"px, 0 , 0)"),n.style.transform="translate3d(-".concat(l,"px, 0 , 0)"),requestAnimationFrame(e)}))}}(e,1e5)}))},329:(e,t,a)=>{var o=a(638),n=o(".body"),s=o(".overlay.high"),l=o(".overlay.low"),i=(o(".overlay.submodal"),o('[data-action="close-submodal"]')),c=o('[data-element="popup"]'),r=o('[data-element="submodal"]'),d=o('[data-action="contact-us"]'),u=o('[data-action="close-popup"]'),p=o(".header__contact-form"),h=o(".contact-form__inputs"),f=(o(".contact-form__success"),o(".contact-form__success-close")),m=o("header"),v=o(".header__catalog-menu"),w=o(".header__catalog-btn"),b=o('[data-catalog="catalog-menu"]'),g=o("[data-catalog-section]"),_=o("[data-catalog-block]"),y=(o(".catalog-menu__list-link"),o(".catalog-menu__center-link")),C=o('[data-btn="menu-mobile-btn"]'),k=o('[data-catalog="mobile-menu"]'),O=o('[data-catalog="mobile-submenu"]'),T=o(".material-properties"),x=o('[data-catalog="catalog-close"]'),P=o(".catalog-filter__properties-btn"),q=o(".material-properties__reset"),S=o("[data-material-parameters]"),L=o('[data-btn="product-more-colors"]'),M=o(".colors-popup"),E=o("[data-product-example]"),j=o(".product-popup"),A=o("[data-btn=add-to-cart]"),D=o(".product-hero__cart"),B=o(".product-hero__cart-close"),V=o('[data-action="remove-item"]'),W=o('[data-element="scroll-event"]'),F=o(".header__cart"),Z=o('[data-action="open-cart"]'),I=m.find(".cart__counter"),R=o('[data-element="window"]'),z=o('[data-element="window-content"]'),G=o('[data-element="window-stub"]'),H=o("[data-client-type]"),N=o('[data-popup="about-popup"]'),U=o('[data-action="attach-file"]'),Y=o('[data-action="remove-file"]'),J=o('[data-action="apply-vacation"]');function K(){c.each((function(e,t){o(t).data("catalog-block")||o(t).removeClass("show")})),o(n).removeClass("overflow"),window.innerWidth<1280&&setTimeout((function(){o(k).css("transition","")}),500),Q()}function Q(){o(g).each((function(e,t){return o(t).removeClass("show")})),o('[data-catalog-block="0"]').removeClass("show"),window.innerWidth>=1280&&o(_).each((function(e,t){return o(t).removeClass("show")}))}function X(){o(S).each((function(e,t){t.checked=!1}))}o(d).click((function(){K(),s.addClass("show"),p.addClass("show"),o(n).addClass("overflow")})),o(u).each((function(){o(this).click((function(){return K()}))})),o(p).on("submit",(function(e){!function(e){e.preventDefault(),t=h,a=t.closest('[data-element="popup"]'),n=o(a).find('[data-element="popup-content"]'),s=o(a).find('[data-element="popup-stub"]'),o(n).fadeOut(500,(function(){return o(s).addClass("show")}));var t,a,n,s}(e)})),o(n).on("keydown",(function(e){"Escape"===e.key&&K()})),o(f).click((function(){K();var e=this.closest('[data-element="popup"]');e.querySelectorAll("input").forEach((function(e){e.value=""})),e.querySelectorAll("textArea").forEach((function(e){e.value=""})),setTimeout((function(){o(e).find('[data-element="popup-stub"]').removeClass("show"),o(e).find('[data-element="popup-content"]').fadeIn(0)}),800)})),o(w).click((function(){o(v).toggleClass("show"),o(w).toggleClass("show"),o(l).toggleClass("show"),o(m).toggleClass("show"),o(b).each((function(e,t){return o(t).toggleClass("show")})),o(g).each((function(e,t){return o(t).removeClass("show")})),o(n).toggleClass("overflow"),o('[data-catalog-block="0"]').removeClass("show"),o(".catalog-menu__right-inner").hasClass("show")&&o(".catalog-menu__right-inner").removeClass("show")})),o(g).each((function(e,t){window.innerWidth>=1280?o(t).on("mouseover",(function(){Q(),o(this).addClass("show"),o('[data-catalog-block="0"]').addClass("show"),o('[data-catalog-block="'.concat(o(t).data("catalog-section"),'"]')).addClass("show")})):o(t).on("click",(function(){o(_).each((function(e,t){return o(t).removeClass("show")})),o('[data-catalog-block="0"]').addClass("show"),o("[data-catalog-block=".concat(o(this).data("catalog-section"),"]")).addClass("show"),o(k).css("transition","0s")}))})),o(y).each((function(e,t){o(t).on("mouseover",(function(){o(".catalog-menu__right-inner").addClass("show"),o(".catalog-menu__right-image").addClass("show")})),o(t).on("mouseout",(function(){o(".catalog-menu__right-inner").removeClass("show"),o(".catalog-menu__right-image").removeClass("show")}))})),o(O).click((function(){o(k).css("transition",""),o('[data-catalog-block="0"]').removeClass("show")})),P.click((function(){o(n).addClass("overflow"),o(s).addClass("show"),o(T).addClass("show")})),o(q).click((function(){return X()})),o(x).click((function(){return X()})),o(C).click((function(e){if(!o(k).hasClass("show"))return o(n).addClass("overflow"),o(l).addClass("show"),o(this).addClass("show"),o(b).addClass("show"),void o(k).addClass("show");o(b).removeClass("show"),o(k).removeClass("show"),K()})),o(L).on("click",(function(){K(),o(n).addClass("overflow"),s.addClass("show"),M.addClass("show")})),o(E).each((function(e,t){o(t).on("click",(function(){j.addClass("show"),s.addClass("show"),o(n).addClass("overflow")}))})),o(A).each((function(e,t){o(t).on("click",(function(){var e=document.createElement("div");o(e).addClass("product-hero__image-to-cart"),e.innerHTML='<picture class="picture product-hero__image-pic">\n    '.concat(o(".product-hero").find(".product-hero__image-pic").html(),"</picture>"),o(".product-hero").append(e);var t=o('[data-element="product-image"]'),a=o(t)[0].getBoundingClientRect().left,n=o(t)[0].getBoundingClientRect().top,s=o(Z)[0].getBoundingClientRect().left+o(Z).height()/2,l=o(Z)[0].getBoundingClientRect().top+o(Z).width()/2,i=o(t).width(),c=o(t).height();o(e).css("top","".concat(n)),o(e).css("left","".concat(a)),o(e).css("height","".concat(c)),o(e).css("width","".concat(i)),o(e).css("transform","scale(1.1)"),setTimeout((function(){o(e).css("top","".concat(l)),o(e).css("left","".concat(s)),o(e).css("height","0"),o(e).css("width","0"),o(e).addClass("run")}),250),setTimeout((function(){o(I).addClass("show"),o(I).css("transform","scale(1.25");var t=+o(I).html();o(I).html(++t),setTimeout((function(){o(I).css("transform","")}),150),o(D).addClass("show"),o(e).remove()}),750)}))})),o(B).on("click",(function(){return o(D).removeClass("show")})),o(V).each((function(e,t){var a;o(t).on("click",(function(){var e=o(t).closest('[data-element="item"]');o(e).fadeOut(250,(function(){o(e).remove()}));var n=e.closest('[data-element="popup"]'),s=o(n).find(o('[data-element="popup-title"]')),l=o(n).find(".contact-form__controls"),i=o(n).find('[data-element="scroll-event"]'),c=o(n).find('[data-element="popup-content"]'),r=o(n).find('[data-element="popup-stub"]');if(emptyCart=o(n).find(".header__cart-empty"),(a=o(n).find(o('[data-element="item"]')).length-1)>=0&&o(I).html(a),0===a)return o(I).removeClass("show"),o(s).addClass("hide"),o(l).addClass("hide"),o(c).fadeOut(500,(function(){return o(r).fadeIn(500)})),void o(i).fadeOut(500,(function(){o(emptyCart).removeClass("hide")}));a>0&&o(I).addClass("show")}))})),o(W).each((function(e,t){o(t).scroll((function(){o(this).scrollTop()>1?this.closest('[data-element="popup"]').querySelector('[data-element="popup-header-separator"]').classList.add("show"):this.closest('[data-element="popup"]').querySelector('[data-element="popup-header-separator"]').classList.remove("show")}))})),o(Z).on("click",(function(){K(),o(".product-hero__cart").removeClass("show"),o(n).addClass("overflow"),s.addClass("show"),F.addClass("show")})),o(R).on("submit",(function(e){e.preventDefault(),o(z).fadeOut(500,(function(){return o(G).fadeIn(500)}))})),o(H).each((function(e,t){o(t).on("click",(function(){o(N).find(".contact-form__title").text(o(this).data("popup-title")),""!==o(this).data("popup-subtitle")?o(N).find("#about-subtitle").html("<div class=contact-form__subtitle>".concat(o(this).data("popup-subtitle"),"</div>")):o(N).find("#about-subtitle").empty(),!0===o(this).data("popup-comment")?(o(N).find("#about-additional-input").html('<label class="contact-form__text-area-label contact-form__input" for=contact-form-text-area>\n        <textarea class=contact-form__text-area id=contact-form-text-area name=contact-form-text-area placeholder="Дополнительная информация" maxlength=255></textarea>\n    </label>'),o(N).find('[data-element="add-files-block"]').html(' <ul class="add-attachment__files" data-element=file-list></ul>\n      <button class=add-attachment__btn data-action=attach-file>\n          <div class=add-attachment__icon></div>\n          <div class=add-attachment__text>Прикрепить файл</div>\n      </button>')):(o(N).find('[data-element="add-files-block"]').empty(),o(N).find('[data-element="file-list"]').removeClass("added"),o(N).find("#about-additional-input").empty()),o(s).addClass("show"),o(n).addClass("overflow"),o(N).addClass("show")}))})),o(U).each((function(e,t){o(t).on("click",(function(e){e.preventDefault(),console.log("attach file")}))})),o(Y).each((function(e,t){o(t).on("click",(function(e){e.preventDefault(),myFile=o(this).closest('[data-element="file"]'),myFile.fadeOut(500,(function(){return myFile.remove()})),myFileList=o(this).closest('[data-element="file-list"]'),myFileListLength=myFileList[0].children.length-1,myFileListLength<1&&setTimeout((function(){myFileList.removeClass("added")}),500)}))})),o(N).on("submit",(function(e){e.preventDefault(),console.log("submit"),o(N).find('[data-element="popup-content"]').fadeOut(500,(function(){return o(N).find('[data-element="popup-stub"]').addClass("show")}))})),o(J).map((function(e,t){o(t).on("click",(function(e){var t=o('[data-popup="vacation-popup"]');o(t).length>0&&(o(t).addClass("show"),o(n).addClass("overflow"),o(s).addClass("show"))}))}));var $=o('[data-element="vacation-form"]').closest("div");o($).on("submit",(function(e){e.preventDefault(),console.log("submit vacation");var t=o(this).closest('[data-element="popup"]'),a=o(t).find('[data-element="popup-content"]'),n=o(t).find('[data-element="popup-stub"]');o(a).fadeOut(500,(function(){o(n).addClass("show")}))})),o(i).each((function(e,t){o(t).on("click",(function(){o(r).map((function(e,t){o(t).removeClass("show")}))}))}))},566:(e,t,a)=>{var o=a(638);o('[data-btn="data-up"]').click((function(){return o("html, body").animate({scrollTop:0},500)}))},373:()=>{var e=null,t=document.querySelectorAll('[data-action="ymap-popup-show"]'),a=document.querySelectorAll('[data-element="submodal-btn"]'),o=document.querySelector(".overlay.submodal"),n=document.querySelector('[data-popup="ymap-submodal"]');function s(t){ymaps.ready((function(){ymaps.ready((function(){var a=new ymaps.Map("map",{center:t,zoom:10},{searchControlProvider:"yandex#search"}),o=new ymaps.Placemark(a.getCenter(),{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/ya-placemark.svg",iconImageSize:[70.57,85],iconImageOffset:[-35.285,-85]});a.geoObjects.add(o),e=a}))}))}s([59.859542,30.328265]),t.forEach((function(t){t.onclick=function(){null!==e&&e.destroy(),myCoords=this.getAttribute("data-coords").split(",").map((function(e){return+e})),s(myCoords);var t=document.querySelector('[data-popup="ymap-popup"]'),a=document.querySelector(".body"),o=document.querySelector(".overlay.high");t&&(this.hasAttribute("data-submodal")?t.classList.add("contacts__ymap_submodal"):t.classList.remove("contacts__ymap_submodal"),t.querySelector(".contact-form__title").textContent=this.getAttribute("data-title"),t.classList.add("show"),a.classList.add("overflow"),o.classList.add("show"))}})),a.forEach((function(e){e.onclick=function(){o.classList.add("show"),n.classList.add("show")}}))}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,a,n,s)=>{if(!a){var l=1/0;for(d=0;d<e.length;d++){for(var[a,n,s]=e[d],i=!0,c=0;c<a.length;c++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](a[c])))?a.splice(c--,1):(i=!1,s<l&&(l=s));if(i){e.splice(d--,1);var r=n();void 0!==r&&(t=r)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var n,s,[l,i,c]=a,r=0;if(l.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var d=c(o)}for(t&&t(a);r<l.length;r++)s=l[r],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=o.O(void 0,[479,532],(()=>o(206)));n=o.O(n)})();