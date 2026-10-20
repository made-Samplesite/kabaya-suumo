/* ライフデザイン・カバヤ様 SUUMO フリーページ（スマホ用）
   スマホのページは jQuery 1.11 系。ギャラリーは Swiper で動かす */
(function () {
  if (typeof Swiper === "undefined") return;
  var el = document.querySelector("#kosha_free .kby-gallery");
  if (!el) return;
  new Swiper(el, {
    loop: true,
    speed: 600,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
    navigation: { nextEl: el.querySelector(".swiper-button-next"), prevEl: el.querySelector(".swiper-button-prev") }
  });
})();
