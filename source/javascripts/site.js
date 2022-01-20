// This is where it all goes :)

// Custom JS to show mobile menu on click of hamburger icon
// document.querySelector('#burger').addEventListener('click', () => {
//   document.querySelector('#sideNav__mobile').classList.add('visible');
// });

// // Custom JS to HIDE mobile menu on click of close button
// document.querySelector('#close').addEventListener('click', () => {
//   document.querySelector('#sideNav__mobile').classList.remove('visible');
// }); 

$(document).ready(function(){
  $(".mobileNav__controls__open").click(function(){
    $(".sideNav, .mobileNav__controls__close").css("visibility", "visible");
    $(".mobileNav__controls__open").css("visibility", "hidden");
  });
});

$(document).ready(function(){
  $(".mobileNav__controls__close").click(function(){
    $(".sideNav, .mobileNav__controls__close").css("visibility", "hidden");
    $(".mobileNav__controls__open").css("visibility", "visible");
  });
});