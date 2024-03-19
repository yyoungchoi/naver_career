$(".header .gnb-item").hover(function () {
  if ($(this).children().find(".sub-item").length) {
    $(".header").toggleClass("on");
  }
  $(this).children().toggleClass("on");
});
$(".header .lang-item").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
});
$(".header .btn-menu").click(function () {
  $(".header .side-menu,.header .btn-menu").toggleClass("on");
});
// 모바일메뉴
$(".side-list .side-item").click(function (e) {
  if ($(this).find(".side-sub-item").length) {
    e.preventDefault();
  }
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(this).siblings().removeClass("active");
    $(this).parent().siblings(".side-list").find("li").removeClass("active");
  }
});
$(".side-sub-item a").on("click", function () {
  window.location.href = $(this).attr("href");
});

// sc-search
$("select").change(function () {
  $(this).css("color", "#000");
});
//  모바일 sc-search
$(".sc-search .btn-search2").click(function () {
  $(".pop-search").addClass("on");
  $("body").addClass("overflow");
});
// 체크박스 체크/해제
$(".title-label").click(function () {
  parent = $(this).data("parent");
  if ($(this).siblings("input").prop("checked") === true) {
    $("#" + parent)
      .find(".child input")
      .prop("checked", false);
  } else {
    $("#" + parent)
      .find(".child input")
      .prop("checked", true);
  }
});
$(".btn-clear").click(function () {
  $(".filter-box input").prop("checked", false);
});

$(".depth1-item > span").click(function () {
  $(this).siblings(".depth2-list").toggleClass("on");
  $(this).toggleClass("on");
});
$(".depth2-item > span").click(function () {
  $(this).siblings(".depth3-list").toggleClass("on");
  $(this).toggleClass("on");
});
$(".pop-search .btn-close").click(function () {
  $(".pop-search").removeClass("on");
  $("body").removeClass("overflow");
});
// 푸터
$(".footer .btn-relate").click(function () {
  $(this).parent().toggleClass("active");
});

const mainSlide = new Swiper(".sc-visual .swiper", {
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});
const peopleSlide = new Swiper(".sc-people .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.1,
    },
  },
});
const benefitsSlide = new Swiper(".sc-benefits .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  },
});
