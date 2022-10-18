// function showDropdown(clicked) {
//   const drop = "dropright-" + clicked;
//   document.getElementById(drop).classList.toggle("active");
//   console.log(clicked);
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("drop-menu");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("active")) {
//         openDropdown.classList.remove("active");
//       }
//     }
//   }
// };

// const btns = document.querySelectorAll(".btn");
// const dropMenus = document.querySelectorAll(".drop-menu");

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     removeActive();
//     btn.classList.add("active");
//     document.querySelector(btn.dataset.target).classList.add("active");
//   });
// });

// const removeActive = () => {
//   btns.forEach((btn) => btn.classList.remove("active"));
//   dropMenus.forEach((dropmenu) => dropmenu.classList.remove("active"));
// };

// window.onclick = (e) => {
//   if (!e.target.matches(".btn")) {
//     removeActive();
//   }
// };

// const btns = document.querySelectorAll(".btn");
// const t_dot = document.querySelectorAll(".three-dot");
// const dropMenus = document.querySelectorAll(".drop-menu");

// t_dot.addEventListener("click", () => {
//   removeActive();
//   t_dot.classList.add("active");
//   document.querySelector(t_dot.dataset.target).classList.add("active");
// });

// const removeActive = () => {
//   t_dot.classList.remove("active");
//   dropMenus.classList.remove("active");
// };

// window.onclick = (e) => {
//   if (!e.target.matches(".three_dot")) {
//     removeActive();
//   }
// };

// const btns = document.querySelectorAll(".btn");
// const t_dot = document.querySelectorAll(".three-dot");
// const dropMenus = document.querySelectorAll(".drop-menu");
// const drop = document.getElementById("dropright");
// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     removeActive();
//     btn.classList.add("active");
//     dropMenus.classList.add("active");
//     document.querySelector(btn.dataset.target).classList.add("active");
//   });
// });

// t_dot.addEventListener("click", function () {
//   t_dot.classList.add("active");
//   drop.classList.add("active");
// });

function showDropdown() {
  document.getElementById("dropright").classList.toggle("active");
}

// const removeActive = () => {
//   btns.forEach((btn) => btn.classList.remove("active"));
//   dropMenus.forEach((dropmenu) => dropmenu.classList.remove("active"));
// };

// window.onclick = (e) => {
//   if (!e.target.matches(".btn")) {
//     removeActive();
//   }
// };

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("drop-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  }
};
