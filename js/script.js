// owl carousel responsiveness
$(".owl-carousel").owlCarousel({
  autoplayHoverPause: true,
  loop: true,
  margin: 10,
  autoWidth: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});
// owl carousel disable enable start

var $homeSlider = $(".home-slider");

$(window).resize(function () {
  showHomeSlider();
});

function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(max-width: 600px)").matches) {
      destroyHomeSlider();
    } else {
      initialHomeSlider();
    }
  }
}
showHomeSlider();

function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    // items: 1,
    // loop: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // smartSpeed: 1000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    autoWidth: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
}

function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}

// owl carousel disable enable end

function menuToggle() {
  const toggleMenu = document.querySelector(".pro-menu");
  toggleMenu.classList.toggle("active");
}

window.addEventListener("mouseup", function (event) {
  var box = this.document.getElementById("drpdwn");
  if (event.target != box && event.target.parentNode != box) {
    box.style.display = "none";
  }
});

const $menu = $("#clickable");

$(document).mouseup((e) => {
  if (
    !$menu.is(e.target) && // if the target of the click isn't the container...
    $menu.has(e.target).length === 0
  ) {
    // ... nor a descendant of the container
    $menu.removeClass("is-active");
  }
});

$(".toggle").on("click", () => {
  $menu.toggleClass("is-active");
});

// Search Half done

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});

// OTP Number

$(".otp-number")
  .find("input")
  .each(function () {
    $(this).attr("maxlength", 1);
    $(this).on("keyup", function (e) {
      var parent = $($(this).parent());

      if (e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find("input#" + $(this).data("previous"));

        if (prev.length) {
          $(prev).select();
        }
      } else if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 39
      ) {
        var next = parent.find("input#" + $(this).data("next"));

        if (next.length) {
          $(next).select();
        } else {
          if (parent.data("autosubmit")) {
            parent.submit();
          }
        }
      }
    });
  });

// YES NO TOGGLE
$(".btn-toggle").click(function () {
  $(this).find(".btn").toggleClass("active");

  if ($(this).find(".btn-orange").length > 0) {
    $(this).find(".btn").toggleClass("btn-orange");
  }

  $(this).find(".btn").toggleClass("btn-default");
});

$("form").submit(function () {
  var radioValue = $("input[name='options']:checked").val();
  if (radioValue) {
    alert("You selected - " + radioValue);
  }
  return false;
});

// #######################  Calender #############################

var Cal = function (divId) {
  //Store div id
  this.divId = divId;

  // Days of week, starting on Sunday
  this.DaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Months, stating on January
  this.Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Set the current month, year
  var d = new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();
};

// Goes to next month
Cal.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  } else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  } else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function () {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function (y, m) {
  var d = new Date(),
    // First day of the week in the selected month
    firstDayOfMonth = new Date(y, m, 1).getDay(),
    // Last day of the selected month
    lastDateOfMonth = new Date(y, m + 1, 0).getDate(),
    // Last day of the previous month
    lastDayOfLastMonth =
      m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

  var html = "<table>";

  // Write selected month and year
  html += "<thead><tr>";
  html += '<td colspan="7">' + this.Months[m] + " " + y + "</td>";
  html += "</tr></thead>";

  // Write the header of the days of the week
  html += '<tr class="days">';
  for (var i = 0; i < this.DaysOfWeek.length; i++) {
    html += "<td>" + this.DaysOfWeek[i] + "</td>";
  }
  html += "</tr>";

  // Write the days
  var i = 1;
  do {
    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if (dow == 0) {
      html += "<tr>";
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if (i == 1) {
      html += "<tr>";
      var k = lastDayOfLastMonth - firstDayOfMonth + 1;
      for (var j = 0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + "</td>";
    } else {
      html += '<td class="normal">' + i + "</td>";
    }
    // If Saturday, closes the row
    if (dow == 6) {
      html += "</tr>";
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if (i == lastDateOfMonth) {
      var k = 1;
      for (dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    i++;
  } while (i <= lastDateOfMonth);

  // Closes table
  html += "</table>";

  // Write HTML to the div
  document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function () {
  // Start calendar
  var c = new Cal("divCal");
  c.showcurr();

  // Bind next and previous button clicks
  getId("btnNext").onclick = function () {
    c.nextMonth();
  };
  getId("btnPrev").onclick = function () {
    c.previousMonth();
  };
};

// Get element by id
function getId(id) {
  return document.getElementById(id);
}

// ################################## CART ITEMS ##############################

//initialising a variable name data

var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
  data = data + 1;
  document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
  data = data - 1;
  document.getElementById("counting").innerText = data;
}
var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting1").innerText = data;

//creation of increment function
function increment1() {
  data = data + 1;
  document.getElementById("counting1").innerText = data;
}
//creation of decrement function
function decrement1() {
  data = data - 1;
  document.getElementById("counting1").innerText = data;
}
