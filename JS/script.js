$(document).ready(function () {
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      $("#Profile-Buttons").hide();
    } else {
      $("#Profile-Buttons").show();
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 765px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
  //#region Button Animations / Hover Events

  //Project 1 Mouse ENTER
  $("#Project1").mouseenter(function () {
    $("#Project1").animate({
      scale: "1.1",
    });

    $("#Project1 .Project-Name").animate({
      marginTop: "7vw",
    });
  });

  //Project 2 Mouse ENTER
  $("#Project2").mouseenter(function () {
    $("#Project2").animate({
      scale: "1.1",
    });

    $("#Project2 .Project-Name").animate({
      marginTop: "7vw",
    });
  });

  //Project 3 Mouse ENTER
  $("#Project3").mouseenter(function () {
    $("#Project3").animate({
      scale: "1.1",
    });

    $("#Project3 .Project-Name").animate({
      marginTop: "7vw",
    });
  });

  //Project 1 Mouse LEAVE
  $("#Project1").mouseleave(function () {
    $("#Project1").animate({
      scale: "1",
    });

    $("#Project1 .Project-Name").animate({
      marginTop: "31vw",
    });
  });

  //Project 2 Mouse LEAVE
  $("#Project2").mouseleave(function () {
    $("#Project2").animate({
      scale: "1",
    });

    $("#Project2 .Project-Name").animate({
      marginTop: "31vw",
    });
  });

  //Project 3 Mouse LEAVE
  $("#Project3").mouseleave(function () {
    $("#Project3").animate({
      scale: "1",
    });

    $("#Project3 .Project-Name").animate({
      marginTop: "31vw",
    });
  });

  //#endregion

  //#region OnClick Events
  $("#Projects-Button").click(function () {
    window.location.href = "portfolio.html";
  });

  $("#Project1").click(function () {
    window.location.href = "portfolio.html"; //will take to the actual project page
  });

  $("#Project2").click(function () {
    window.location.href = "portfolio.html"; //will take to the actual project page
  });

  $("#Project3").click(function () {
    window.location.href = "portfolio.html"; //will take to the actual project page
  });

  //#endregion
});
