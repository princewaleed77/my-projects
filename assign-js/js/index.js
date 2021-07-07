$(document).ready(function () {
  // sideNave

  $("#open").click(function () {
    $(".sideNave").animate({ left: `0` }, 300);
    $(".open").animate({ left: `20%` }, 300);
    $(".main-heading").animate({ marginLeft: `10%` }, 300);
  });

  $(".close_btn").click(function () {
    $(".sideNave").animate({ left: `-20%` }, 300);
    $(".open").animate({ left: `0%` }, 300);
    $(".main-heading").animate({ marginLeft: `0%` }, 300);
  });
  // ======================
  // sidebar navigation

  $("a").click(function () {
    let id = $(this).attr("href");
    let position = $(id).offset().top;
    $("html body").animate({ scrollTop: position }, 1000);
  });

  // ============================
  // accordion
  $(".collapse:first").css("display", "block");
  $(".btn-link").click(function () {
    let x = $(this).parentsUntil(".accordion").children(".collapse");
    x.slideToggle(300);
    $(".collapse").not(x).slideUp(300);
  });
  //   ==============
  // counters

  setInterval(function () {
    let end = new Date("2021,02,10");
    let start = new Date();
    let elapsed = end.getTime() - start.getTime();
    // console.log(53808.2664%60); //3228495989

    let days = Math.floor(elapsed / (1000 * 3600 * 24));
    let hours = Math.floor((elapsed / (1000 * 3600)) % 24);
    let minuts = Math.floor((elapsed / 60000) % 60);
    let seconds = Math.floor((elapsed / 1000) % 60);

    $(".days").html(`${days} days`);
    $(".hours").html(`${hours} hours`);
    $(".minuts").html(`${minuts} minuts`);
    $(".seconds").html(`${seconds} seconds`);
  });

  // const today = new Date();
  // const endDate = new Date(startDate.setDate(startDate.getDate() + 7));
  // const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
  // const hours = parseInt(Math.abs(endDate - today) / (1000 * 60 * 60) % 24);
  // const minutes = parseInt(Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60) % 60);
  // const seconds = parseInt(Math.abs(endDate.getTime() - today.getTime()) / (1000) % 60);

  //  another way for calculation

  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // ============================

  // message

  $("textarea").on("focus keyup", function () {
    let value = $("textarea").val();
    // let maxlength = 100;
    let maxlength = parseInt($("textarea").attr("maxlength"));
    let remainingLetters = maxlength - value.length;
    if (remainingLetters <= 0) {
      $(".text")
        .text("Sorry, 100 Character is available only")
        .css("color", "orange");
      setTimeout(function () {
        $(".text").text("Letters remaning").css("color", "black");
        $(".letters").css({ display: "block", color: "defalut" });
      }, 2000);
    }
    $("#counter").html(`${remainingLetters}`);
  });
});

// ===============================
// email validation

let emailValid = $("#Email");

function validateEmail() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; ///^(?=.*\w)@(?=.*\w)(.\w){3}$/;
  if (regex.test(emailValid.value) == true) {
    $(emailValid).addClass("is-valid");
    $(emailValid).removeClass("is-invalid");
  } else {
    $(emailValid).addClass("is-invalid");
    $(emailValid).removeClass("is-valid");
  }
  return regex.test(emailValid.value);
}

$(emailValid).keyup(function () {
  validateEmail();
});
