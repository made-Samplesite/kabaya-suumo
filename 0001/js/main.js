/* ライフデザイン・カバヤ様 SUUMO フリーページ（PC用）
   SUUMO の PC ページは jQuery 1.4 系のため、新しい書き方（.on() など）は使わない */
(function () {
  if (typeof Swiper === "undefined") return;
  var el = document.querySelector("#includeContent .kby-gallery");
  if (!el) return;
  new Swiper(el, {
    loop: true,
    speed: 600,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
    navigation: { nextEl: el.querySelector(".swiper-button-next"), prevEl: el.querySelector(".swiper-button-prev") }
  });
})();
