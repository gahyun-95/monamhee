$('#fullpage').fullpage({
  responsiveWidth: 1024,
  navigation: false, // 기본값 false
  navigationPosition: 'left', // 기본값 right
  navigationTooltips: ['SINSIWAY', 'Solution', 'Business', 'Partner'],
  showActiveTooltip: true, // 기본값 false
  anchors: ['home', 'archive', 'shop', 'sns']
});









/* archive */
const archive_list = new Swiper('.archive_list', {

  autoplay: {
    delay: 2000, // ms 3000 = 3초
    disableOnInteraction: false,
  },

  loop: true,

  speed: 1000, /* 슬라이드 동작속도 */



  breakpoints: {
    1200: {
      slidesPerView: 4, /* 한 슬라이드에서 보여지는 갯수 */
      spaceBetween: 30,
      centeredSlides: true, /* 첫번째 슬라이드 중앙으로 */
    },

    1024: { // 태블릿 환경
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: { // 태블릿 환경
      slidesPerView: 1,
      spaceBetween: 20,
    },


  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },




});







/* shop 슬라이드 */

const logo_list = new Swiper(".logo_list", {
  autoplay: {
    delay: 0, /* 슬라이드가 머무르는 시간 */
    disableOnInteraction: false,
  },
  speed: 6000,
  loop: true,

  breakpoints: {


    1200: {
      slidesPerView: 8,
      spaceBetween: 130,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 65,
    }


  },


});


/* sns 슬라이드 */

const insta_list = new Swiper(".insta_list", {
  autoplay: {
    delay: 0, /* 슬라이드가 머무르는 시간 */
    disableOnInteraction: false,
  },
  speed: 4000,
  loop: true,

  breakpoints: {


    1200: {
      slidesPerView: 1,
      spaceBetween: 50,

    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },




});
