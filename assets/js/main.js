// Loader script

$(document).ready(function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Clients swiper script

var swiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
});

// Sticky navbar script

$(function () {
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= 850) {
      $("header").addClass("header-sticky");
    } else {
      $("header").removeClass("header-sticky");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

// Scroll to top script

$(".scroll-to-top").fadeOut();

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// Countdown timer script

const countDownDate = new Date("April 3, 2025 00:00:00").getTime();

const countdownTimer = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML =
      "<h2>Countdown is over!</h2>";
  }
}, 1000);

// Present year script

$(document).ready(function () {
  document.getElementById("presentYear").innerHTML = new Date().getFullYear();
});
