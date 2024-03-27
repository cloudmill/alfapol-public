(()=>{var e,t={857:(e,t,o)=>{"use strict";o(490);var a=o(638);a((function(){a(".select__select").each((function(){var e=a(this),t=e.closest(".select-wrapper"),o=getComputedStyle(t[0]),n=a(this).data("select-placeholder");"static"===o.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var o="scroll.select2";a(e.target).parents().off(o),a(window).off(o);var n=t.find(".select2-dropdown");n.hide();var r=setTimeout((function(){n.slideDown({duration:500}),clearTimeout(r)}),0)})),e.on("select2:closing",(function(o){o.preventDefault();var a=t.find(".select2-dropdown"),r=setTimeout((function(){t.css("z-index","");var o=t.find(".select2");o.addClass("closing"),o.removeClass("select2-container--open"),a.slideUp(500,(function(){var o=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(o)}),300)})),clearTimeout(r)}),0)}))}))}));o(373),o(563);var n=o(638),r=o.n(n),i=o(419),c=o.n(i),s=o(688),l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),u=0;if(window.screen.width>1280&&!l){u=new s.Z({duration:1.5,easing:function(e){return 1===e?1:1-Math.pow(2,-10*e)},direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2}),document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(t){var o;t.preventDefault();var a=null===(o=e.getAttribute("href"))||void 0===o?void 0:o.slice(1);if(a){var n=document.getElementById(a);n&&n.scrollIntoView({behavior:"smooth"})}}))})),requestAnimationFrame((function e(t){u.raf(t),requestAnimationFrame(e)}))}function d(){window.screen.width>1024&&!l&&u.stop()}function f(){window.screen.width>1024&&!l&&u.start()}var p=o(638);function m(){var e=p(".body"),t=p(".overlay.high");p(t).addClass("show"),p(e).addClass("overflow"),d()}var h=o(638);function v(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}var g=1280;var y=o(638);function b(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}var S=y(".body"),q=y('[data-action="close-submodal"]'),k=y('[data-element="popup"]'),C=y('[data-element="submodal"]'),L=y('[data-action="close-popup"]'),E=y(".header__catalog-menu").find(y('[data-catalog="mobile-menu"]')),A=y('[data-action="material-properties-reset"]'),T=y("[data-material-parameters]"),O=y(".product-hero__cart"),P=y(".product-hero__cart-close"),x=y('[data-element="scroll-event"]'),M=y('[data-client-target="open-cart"]'),j=y("[data-client-target]"),W=y("[data-btn=add-to-cart]"),I=y("[data-no-overlay-target]");function Z(){f(),k.each((function(e,t){y(t).data("catalog-block")||y(t).removeClass("show")})),function(){if(!(window.innerWidth<g)){var e=h("[data-catalog-section]"),t=h("[data-catalog-block]");h(e).each((function(e,t){return h(t).removeClass("show")})),h("[data-catalog-block-wrapper]").removeClass("show"),window.innerWidth>=g&&h(t).each((function(e,t){h(t).removeClass("show"),h(t).fadeOut(400)}))}}(),y(S).removeClass("overflow"),window.innerWidth<g&&setTimeout((function(){y(E).css("transition","")}),500)}function V(){y(L).each((function(){y(this).on("click",(function(){Z()}))})),y(S).on("keydown",(function(e){"Escape"===e.key&&Z()})),y(A).click((function(){y(T).each((function(e,t){t.checked=!1}))})),y(P).on("click",(function(){return y(O).removeClass("show")})),y(M).on("click",(function(){y(".product-hero__cart").removeClass("show")})),y(x).each((function(e,t){y(t).scroll((function(){y(this).scrollTop()>1?this.closest('[data-element="popup"]').querySelector('[data-element="popup-header-separator"]').classList.add("show"):this.closest('[data-element="popup"]').querySelector('[data-element="popup-header-separator"]').classList.remove("show")}))})),y(q).each((function(e,t){y(t).on("click",(function(){y(C).map((function(e,t){y(t).removeClass("show")}))}))})),y(j).map((function(e,t){y(t).on("click",(function(){d();var e=document.querySelector('[data-form-target="'.concat(this.getAttribute("data-client-target"),'"]'));if(b(k).some((function(e){return e.classList.contains("show")})))return Z(),void setTimeout((function(){t(e)}),500);function t(e){m(),e.classList.add("show");var t=y(e).find("[search-input]");t&&t.focus()}t(e)}))})),y(W).each((function(e,t){y(t).on("click",(function(){y(O).addClass("show")}))})),y(I).each((function(e,t){y(t).on("click",(function(){var e=this;if(b(k).some((function(e){return e.classList.contains("show")})))return Z(),void setTimeout((function(){t(e)}),500);function t(e){var t=y("[data-no-overlay-modal=".concat(e.getAttribute("data-no-overlay-target"),"]"));t.addClass("show");var o=y(t).find("[search-input]");o&&o.focus()}t(this)}))}))}var B=o(638);function D(){document.querySelectorAll("form").forEach((function(e){e.addEventListener("submit",(function(e){var t;e.preventDefault(),t=this,r()(t).parsley().isValid()&&function(e){var t=e.closest('[data-element="popup"]');document.querySelectorAll(".contact-form__success-close");if(t){var o=t.querySelector('[data-element="popup-content"]'),a=t.querySelector('[data-element="popup-success"]'),n=t.querySelector(".contact-form__success-close");return B(o).fadeOut(500,(function(){B(a).addClass("show")})),setTimeout((function(){H(e)}),0),void n.addEventListener("click",(function(){Z(),a.classList.remove("show"),setTimeout((function(){B(o).css("display","")}),500)}))}var r=e.closest('[data-element="form-wrapper"]');if(r){m();var i=r.querySelector('[data-success="popup"]');return setTimeout((function(){i.classList.add("show")}),500),void setTimeout((function(){H(e)}),0)}var c=e.closest('[data-element="window-content"]');if(c){var s=c.closest('[data-element="window"]').querySelector('[data-element="window-success"]');B(c).fadeOut(500,(function(){B(s).fadeIn(500)}))}}(this)}))}))}function H(e){var t=e.querySelectorAll("input"),o=e.querySelectorAll("textarea");t.forEach((function(e){e.blur(),e.value=""})),o.forEach((function(e){e.blur(),e.value=""})),F(e)}var F=function(e){e.querySelectorAll(".input-wrapper").forEach((function(e){return e.classList.remove("filled")}))};var z=o(638);var G=o(175),R=o.n(G),U=o(357),Y=o(638),$=function(){var e=document.querySelector(".production-slider__inner"),t=/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);if(e&&!t){if(!(window.screen.width<1280)){var o=window.screen.width/1920*115;R().registerPlugin(U.Z),function(e){e(document).ready((function(){var e;e=document.querySelector(".production-slider__inner"),document.querySelector(".section-slider"),R().to(e,{scrollTrigger:{trigger:".section-slider",start:"top top",end:function(){return"+="+e.offsetWidth},pin:!0,scrub:!0},x:function(){return-(e.scrollWidth+o-document.documentElement.clientWidth)+"px"},ease:"none"})}))}(Y)}}else{var a=document.querySelector(".production-slider ");if(!a)return;a.classList.add("safari-scroll")}},N=function(){var e=document.querySelector(".animation-scroll"),t=/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);if(e&&!t)window.screen.width<1280||(R().registerPlugin(U.Z),function(e){e(document).ready((function(){var e,t,o,a,n,r,i,c;e=document.querySelector(".animation-scroll"),t=document.querySelector(".section-proposal"),o=document.querySelector(".section-proposal__item.first"),a=document.querySelector(".section-proposal__item.third"),n=window.screen.width,r=n/1920*120,i=n/1920*241,(c=R().timeline({scrollTrigger:{trigger:".animation-scroll",start:function(){return"+="+e.offsetHeight-e.offsetHeight+500+"px"},end:function(){return"+="+1.5*t.offsetHeight},scrub:!0,pin:!0}})).to(".section-proposal",{y:function(){return-(t.scrollHeight-document.documentElement.clientHeight)+"px"},ease:"true"}),c.to(".section-about",{scale:.7,y:-r+"px",ease:"true",opacity:.5},"<10%"),c.to(o,{y:i+"px",ease:"true"},"<"),c.to(a,{y:-i+"px",ease:"true"},"<")}))}(Y));else{var o=document.querySelector(".section-proposal");if(!o)return;o.classList.add("safari-realtive")}},X=o(579),J=o(638);function K(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function Q(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?K(Object(o),!0).forEach((function(t){ee(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):K(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function ee(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var te=o(835),oe=o(502),ae=o(638);var ne=o(638);var re=o(638);var ie=o(948),ce=o.n(ie),se=o(638),le=o(638);function ue(e,t){var o=e.querySelector("[data-marquee]");if(o){var a=o.offsetWidth,n=o.cloneNode(!0);e.appendChild(n);var r,i,c=performance.now();requestAnimationFrame((function e(s){(r=(s-c)/t)>1&&(r%=1,c=s),i=a*r,o.style.transform="translate3d(-".concat(i,"px, 0 , 0)"),n.style.transform="translate3d(-".concat(i,"px, 0 , 0)"),requestAnimationFrame(e)}))}}var de=o(638);var fe=o(638);function pe(){if(!(window.innerWidth>=g)){var e=fe("header"),t=fe(".header__catalog-menu"),o=t.find(fe('[data-catalog="catalog-menu"]')),a=e.find(fe('[data-btn="menu-mobile-btn"]')),n=t.find(fe("[data-mobile-menu]")),r=t.find(fe("[data-mobile-submenu-button]")),i=t.find(fe('[data-catalog="mobile-submenu"]')),c=t.find(fe("[data-mobile-submenu-back]"));fe(i).click((function(){fe(n).css("transition",""),fe("[data-catalog-block-wrapper]").removeClass("show")})),fe(a).click((function(e){if(!fe(n).hasClass("show"))return function(){var e=p(".body"),t=p(".overlay.low");p(t).addClass("show"),p(e).addClass("overflow"),d()}(),fe(this).addClass("show"),fe(o).addClass("show"),void fe(n).addClass("show");fe(o).removeClass("show"),fe(n).removeClass("show"),Z()})),fe(r).each((function(e,o){return fe(o).on("click",(function(){fe(t).find("[data-mobile-submenu='".concat(fe(this).attr("data-mobile-submenu-button"),"']")).addClass("show")}))})),fe(c).each((function(e,o){fe(o).on("click",(function(){fe(t).find("[data-mobile-submenu='".concat(fe(this).attr("data-mobile-submenu-back"),"']")).removeClass("show")}))}))}}o(638);var me=o(809),he=o.n(me),ve=function(){var e=document.querySelector(".preloader");e&&setTimeout((function(){e.classList.add("hideIt"),setTimeout((function(){!function(){var e="",t=document.querySelector(".main-hero__slider-img");e=window.screen.width>1280?"desktop":"mobile";var o=document.querySelector(".main-hero__slider-video.".concat(e));o&&(o.play(),setTimeout((function(){t.classList.add("active")}),16500))}()}),2500)}),3e3)};R().registerPlugin(U.Z);document.addEventListener("DOMContentLoaded",(function(){var e,t,o,a,n,i,s,l,u,p,m,w,y,b,_;!function(){var e=h(".body"),t=h("header"),o=h(".overlay.low"),a=h('[data-element="popup"]'),n=h(".header__catalog-menu"),r=h('[data-catalog="mobile-menu"]'),i=n.find(h('[data-catalog="catalog-menu"]')),c=h(".header__catalog-menu"),s=t.find(h(".header__catalog-btn")),l=n.find(h("[data-catalog-section]")),u=n.find(h("[data-catalog-block]")),p=n.find(h(".catalog-menu__center-link"));h(l).each((function(e,t){window.innerWidth>=g?h(t).on("click",(function(){var e=n.find(h(".show[data-catalog-section]"));h(e).length>0&&h(e).removeClass("show"),h(this).addClass("show"),n.find(h("[data-catalog-block-wrapper]")).addClass("show");var o=n.find(h('[data-catalog-block="'.concat(h(t).data("catalog-section"),'"]'))),a=n.find(h(".show[data-catalog-block]"));h(a).length>0?h(a).fadeOut(200,(function(){h(a).removeClass("show"),h(o).fadeIn(200),h(o).addClass("show")})):(h(o).addClass("show"),h(o).fadeIn(400))})):h(t).on("click",(function(){window.innerWidth<g||(h(u).each((function(e,t){return h(t).removeClass("show")})),n.find(h("[data-catalog-block-wrapper]")).addClass("show"),n.find(h("[data-catalog-block=".concat(h(this).data("catalog-section"),"]"))).addClass("show"),h(r).css("transition","0s"))}))})),h(p).each((function(e,t){window.innerWidth<g||(h(t).on("mouseover",(function(){n.find(h(".catalog-menu__right-inner")).addClass("show"),n.find(h(".catalog-menu__right-image")).addClass("show")})),h(t).on("mouseout",(function(){n.find(h(".catalog-menu__right-inner")).removeClass("show"),n.find(h(".catalog-menu__right-image")).removeClass("show")})))})),h(s).on("click",(function(){if(!(window.innerWidth<g)){if(h(c).toggleClass("show"),h(s).toggleClass("show"),h(o).toggleClass("show"),h(t).toggleClass("show"),h(i).each((function(e,t){return h(t).toggleClass("show")})),h(l).each((function(e,t){return h(t).removeClass("show")})),h(e).toggleClass("overflow"),n.find(h("[data-catalog-block-wrapper]")).removeClass("show"),n.find(h(".catalog-menu__right-inner")).hasClass("show")&&n.find(h(".catalog-menu__right-inner")).removeClass("show"),v(a).some((function(e){return e.classList.contains("show")})))return d();f()}}))}(),pe(),ne('[data-btn="data-up"]').click((function(e){e.preventDefault(),ne("html, body").animate({scrollTop:0},500)})),V(),0!==(e=document.querySelectorAll("[data-input-parent]")).length&&e.forEach((function(e){var t=e.querySelector("[data-input]"),o=e.querySelector(".input-wrapper-svg");t&&(t.addEventListener("input",(function(){""!==t.value.trim()?e.classList.add("filled"):e.classList.remove("filled")})),o&&o.addEventListener("click",(function(){t.value="",e.classList.remove("filled")})))})),(t=document.querySelectorAll(".accordion-container"))&&t.forEach((function(e){new(ce())(e,{duration:500,onOpen:function(e){e.hasAttribute("data-header-menu")&&(e.querySelector(".ac-panel").style.height=e.querySelector(".ac-panel").offsetHeight,se(document).on("click",(function(t){e.querySelector(".ac-panel"),e.contains(t.target)||(se(e).removeClass("is-active"),e.querySelector(".ac-panel").style.height="0",e.querySelector(".ac-trigger").setAttribute("aria-expanded","false"))})))}})})),o=le("[data-card-icon]"),le(o).each((function(e,t){le(t).on("click",(function(e){e.preventDefault()}))})),(a=J("[data-slider-id]")).length&&a.each((function(){var e,t,o=J(this),a=o.data("slider-id"),n=o.data("slider-prev"),r=o.data("slider-next"),i=J('[data-slider-button="'.concat(n,'"]')),c=J('[data-slider-button="'.concat(r,'"]')),s=J("[data-slider-buttons]");if(s.length&&o.find(".swiper-slide").length<+s.data("slider-buttons")&&s.addClass("hidden"),o[0].hasAttribute("data-thumbs-slider")){var l=J('[data-thumbs-id="'.concat(a,'"]'));e=new X.Z(l[0],{direction:"vertical",slidesPerView:"auto",on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,o){e.onclick=function(){t.slideTo(o)}}))}}})}var u={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:ee({},1280,{spaceBetween:40})};switch(a){case 2:u=Q(Q({},u),{},{loop:!0});break;case 11:case"m11":u={pagination:{el:'[data-swiper-pagination="'.concat(a,'"]'),type:"bullets"},on:{slideChange:function(t){var o=t.realIndex,a=e.el.querySelectorAll("[data-thumb]");e.el.querySelector("[data-thumb].active").classList.remove("active"),a[o].classList.add("active"),e.slideTo(o)}}}}t=new X.Z(o[0],u),i.on("click",(function(){t.slidePrev()})),c.on("click",(function(){t.slideNext()}))})),function(){new te.Z(".product-similar__swiper",{modules:[oe.W_],speed:500,spaceBetween:8,slidesPerView:"auto",loop:!0,allowTouchMove:!0,navigation:{nextEl:".product-similar__btn.right",prevEl:".product-similar__btn.left"},breakpoints:{1280:{allowTouchMove:!1},768:{allowTouchMove:!0}},on:{init:function(){this.el.querySelectorAll(".swiper-slide").length<3&&(this.el.closest(".product-subslider__inner").querySelector(".product-subslider__buttons").style.display="none")}}}),new te.Z(".product-recent__swiper",{modules:[oe.W_],speed:500,spaceBetween:8,slidesPerView:"auto",loop:!0,allowTouchMove:!0,navigation:{nextEl:".product-recent__btn.right",prevEl:".product-recent__btn.left"},breakpoints:{1280:{allowTouchMove:!1},768:{allowTouchMove:!0}}}),new te.Z(".product-examples__swiper",{modules:[oe.W_,oe.tl],speed:500,spaceBetween:8,slidesPerView:"auto",allowTouchMove:!0,loop:!0,pagination:{el:".product-examples__slider-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".product-examples__slider-button.right",prevEl:".product-examples__slider-button.left"},breakpoints:{allowTouchMove:!1,1280:{allowTouchMove:!1},768:{allowTouchMove:!0}}}),new te.Z(".product-hero__slider",{modules:[oe.W_,oe.tl],speed:500,spaceBetween:8,slidesPerView:"auto",loop:!0,allowTouchMove:!0,pagination:{el:".product-hero__slider-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".product-hero__slider-button.right",prevEl:".product-hero__slider-button.left"},breakpoints:{1280:{allowTouchMove:!1}}});var e,t=new te.Z(".objects-slider__icon",{modules:[oe.W_,oe.tl],speed:0,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!1,loop:!0}),o=new te.Z(".objects-slider__swiper",{modules:[oe.W_,oe.tl],speed:1e3,spaceBetween:8,slidesPerView:"auto",slidesPerGroup:"auto",allowTouchMove:!0,loop:!0}),a=document.querySelector(".objects-slider"),n=new te.Z(".objects-swiper-image",{modules:[oe.W_,oe.tl],speed:1e3,spaceBetween:8,slidesPerView:"auto",loop:!0,breakpoints:{1280:{spaceBetween:0,allowTouchMove:!1}},pagination:{el:".objects-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".objects-slider__btn_right",prevEl:".objects-slider__btn_left"},on:{slideChange:function(){var e=this.realIndex;o.slideToLoop(e),t.slideToLoop(e)},init:function(){a.querySelectorAll(".swiper-slide__thumb-object").forEach((function(e,t){e.addEventListener("click",(function(){n.slideToLoop(t)}))}))}}}),r=new te.Z(".main-hero__title-slider",{speed:1e3,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!1,loop:!0});new te.Z(".main-hero__slider",{modules:[oe.W_,oe.tl],speed:1e3,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,allowTouchMove:!0,loop:!0,breakpoints:{1280:{allowTouchMove:!1}},pagination:{el:".main-hero__pagination",type:"bullets",clickable:!0},navigation:{prevEl:".main-hero__btn.left",nextEl:".main-hero__btn-right"},on:{slideChange:function(){var t=ae(".main-hero__title"),o=this.realIndex;ae(e).find(".swiper-pagination-bullet-active"),document.querySelector(".main-hero__pagination").querySelectorAll(".swiper-pagination-bullet"),0!==o?t.removeClass("show"):t.addClass("show"),r.slideToLoop(o)},init:function(){document.querySelector(".main-hero__btn-right"),e=ae(".main-hero__pagination").find(".swiper-pagination-bullet")}}}),new te.Z(".about-company__awards-slider",{modules:[oe.W_,oe.tl],speed:500,spaceBetween:8,slidesPerView:"auto",allowTouchMove:!0,loop:!0,breakpoints:{1280:{allowTouchMove:!1}},pagination:{el:".about-company__awards-pagination",type:"bullets",clickable:!0},navigation:{prevEl:".about-company__awards-btn.left",nextEl:".about-company__awards-btn.right"}}),new te.Z(".sales-department__slider",{modules:[oe.W_],speed:500,spaceBetween:8,slidesPerView:"auto",loop:!0,allowTouchMove:!0,breakpoints:{1280:{allowTouchMove:!1},768:{allowTouchMove:!0}},navigation:{prevEl:".sales-department__btn.left",nextEl:".sales-department__btn.right"}})}(),function(){var e=de(".about-company__history.mobile");if(e){var t=de(e).find("[data-history-slide-btn]"),o=1,a=null;de(t).each((function(t,n){de(n).on("click",(function(t){a=o,o=de(this).data("history-slide-btn"),de(e).find("[data-history-slide-btn=".concat(a,"]")).removeClass("active"),de(this).addClass("active"),de(e).find("[data-history-slide=".concat(a,"]")).fadeOut(250,(function(){return de(e).find("[data-history-slide=".concat(o,"]")).fadeIn(250)}))}))}))}}(),n=document.querySelectorAll("[data-privacy-select]"),i=document.querySelector("[data-privacy-buttons]"),s=document.querySelector("[data-privacy-articles]"),n.forEach((function(e){e.addEventListener("click",(function(){var e=s.querySelector(".active"),t=i.querySelector(".active"),o=s.querySelector("[data-privacy-article='".concat(this.getAttribute("data-privacy-select"),"']"));t.classList.remove("active"),this.classList.add("active"),z(e).fadeOut(250,(function(){e&&e.classList.remove("active"),z(o).fadeIn(250),o.classList.add("active")}))}))})),(l=document.querySelector(".footer__copyright"))&&(l.textContent="© 1997–"+(new Date).getFullYear()+" Производственное предприятие ООО «АЛЬФАПОЛ». Все права защищены. Копирование информации или данных, в частности, использование текстов, фрагментов текста или иллюстраций, требует предварительного согласия компании ООО «АЛЬФАПОЛ»"),function(){var e=re("[data-catalog-btn]"),t=re("[data-catalog-chapter]");re(e).each((function(o,a){re(a).on("click",(function(o){re(e).each((function(e,t){re(t).removeClass("active")})),re(this).addClass("active");var a=re(t).toArray().find((function(e){return re(e).hasClass("active")})),n=re('[data-catalog-chapter="'.concat(re(this).data("catalog-btn"),'"]'));re(a).removeClass("active"),re(n).addClass("active"),re(a).fadeOut(250,(function(){return re(n).fadeIn(250)}))}))}))}(),D(),r()("form").parsley({errorsContainer:function(e){return e.$element.closest(".select-wrapper")}}),c()({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),window.Parsley.addValidator("phoneRequired",{validateString:function(e){return null!=e&&11===e.replace(/\D/g,"").length},messages:{ru:"Пожалуйста, введите полный номер телефона."}}),r()("[data-mask-phone]").attr("data-parsley-phone-required",""),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Обязательное поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru"),function(){var e=document.querySelector("[data-marquee-wrapper]");if(e)window.innerWidth>=g?ue(e,7e4):ue(e,35e3)}(),u=document.querySelectorAll('[data-card="open-content"]'),p=document.querySelectorAll('[data-card="close-content"]'),m=document.querySelectorAll('[data-card="card"]'),u.forEach((function(e){e.addEventListener("click",(function(){var e=this.closest('[data-card="card"]');m.forEach((function(e){return e.classList.remove("show")})),e.classList.add("show")}))})),p.forEach((function(e){e.addEventListener("click",(function(){this.closest('[data-card="card"]').classList.remove("show")}))})),$(),(w=document.querySelector(".main-map__banner"))&&he().loadAnimation({container:w,renderer:"svg",autoplay:!0,loop:!0,path:"./assets/videos/alfapol-map-animation.json"}),(y=document.querySelector(".main-hero"))&&(window.screen.width<1280||window.addEventListener("scroll",(function(){window.pageYOffset>10?y.classList.add("z-0"):window.pageYOffset<10&&y.classList.remove("z-0")}))),(b=document.querySelector('[data-element="window-content"]'))&&b.querySelectorAll("[data-client-btn]").forEach((function(e){e.addEventListener("click",(function(e){b.querySelector("[data-client-btn].active").classList.remove("active"),this.classList.add("active");var t=b.querySelector("[data-client-form].active");b.querySelector('[data-client-form="'.concat(this.getAttribute("data-client-btn"),'"]')).classList.add("active"),t.classList.remove("active");var o=b.querySelectorAll("[data-client-form-submit].active"),a=b.querySelectorAll('[data-client-form-submit="'.concat(this.getAttribute("data-client-btn"),'"]'));o.forEach((function(e){return e.classList.remove("active")})),a.forEach((function(e){return e.classList.add("active")})),this.blur()}))})),N(),ve(),(_=document.querySelectorAll("[data-frame-src]"))&&_.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.frameSrc,o=e.querySelector("[data-element='video-plug']"),a=e.querySelector("[data-action='video-play']"),n=document.createElement("iframe");n.setAttribute("src",t),n.setAttribute("allowfullscreen",!0),n.setAttribute("allow",""),n.classList.add("youtube-player"),e.append(n),o.remove(),a.classList.add("hidden")}))})),document.querySelector(".modal-search__inner .search-results__form-btn").addEventListener("click",(function(){document.querySelector(".modal-search__results").classList.toggle("show")})),function(){var e=document.querySelector(".about-company__history");if(e&&!(!window.screen.width>1280)){R().registerPlugin(U.Z);var t=document.querySelector(".about-company__history-text-slider"),o=document.querySelector(".last-slide"),a=document.querySelector(".about-company__history-progress"),n=e.offsetHeight+t.offsetHeight,r=R().timeline({scrollTrigger:{trigger:".about-company__history",start:"top top",end:function(){return"+="+n},scrub:!0,pin:!0}});document.querySelector(".about-company__accordions").addEventListener("click",(function(){setTimeout((function(){r.scrollTrigger.refresh(),U.Z.refresh()}),500)})),r.to(t,{y:function(){return-(t.scrollHeight+2*o.offsetHeight-document.documentElement.clientHeight)+"px"},ease:"false"},"mylabel"),r.to(".about-company__history-progress-bar",{height:a.offsetHeight,ease:"false"},"mylabel")}}(),function(){var e=document.querySelector(".partners-order");if(!(window.screen.width<1280)&&(document.querySelector(".partners__get-orders"),e)){var t=document.querySelectorAll(".partners__get-orders-card"),o=R().timeline({scrollTrigger:{trigger:e,start:"top top",end:function(){return"+="+2*e.offsetHeight},scrub:!0,pin:!0}});document.querySelector(".partners__advantages").addEventListener("click",(function(){setTimeout((function(){o.scrollTrigger.refresh(),U.Z.refresh()}),500)})),t.forEach((function(e,t){0===t&&o.to(e,{scaleX:.8,ease:"false"}),1===t&&(o.to(e,{y:"0%",ease:"false"},"<"),o.to(e,{scaleX:.9,ease:"false"})),2===t&&o.to(e,{y:"0%",ease:"false"},"<")}))}}()}))},373:()=>{var e=null,t=document.querySelectorAll('[data-action="ymap-popup-show"]'),o=document.querySelectorAll('[data-element="submodal-btn"]'),a=document.querySelector(".overlay.submodal"),n=document.querySelector('[data-popup="ymap-submodal"]'),r=[59.859542,30.328265];document.addEventListener("DOMContentLoaded",(function(){function i(t){ymaps.ready((function(){ymaps.ready((function(){var o=new ymaps.Map("map",{center:t,zoom:10},{searchControlProvider:"yandex#search"}),a=new ymaps.Placemark(o.getCenter(),{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/ya-placemark.svg",iconImageSize:[70.57,85],iconImageOffset:[-35.285,-85]});o.geoObjects.add(a),e=o}))}))}document.querySelector("#map")&&(i(r),t.forEach((function(t){t.onclick=function(){null!==e&&e.destroy(),myCoords=this.getAttribute("data-coords").split(",").map((function(e){return+e})),i(myCoords);var t=document.querySelector('[data-popup="ymap-popup"]'),o=document.querySelector(".body"),a=document.querySelector(".overlay.high");t&&(this.hasAttribute("data-submodal")?t.classList.add("contacts__ymap_submodal"):t.classList.remove("contacts__ymap_submodal"),t.querySelector(".contact-form__title").textContent=this.getAttribute("data-title"),t.classList.add("show"),o.classList.add("overflow"),a.classList.add("show"))}})),o.forEach((function(e){e.onclick=function(){a.classList.add("show"),n.classList.add("show")}})))}))}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,a.amdO={},e=[],a.O=(t,o,n,r)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,r]=e[u],c=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](o[s])))?o.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[i,c,s]=o,l=0;if(i.some((t=>0!==e[t]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(s)var u=s(a)}for(t&&t(o);l<i.length;l++)r=i[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=a.O(void 0,[556,532],(()=>a(857)));n=a.O(n)})();