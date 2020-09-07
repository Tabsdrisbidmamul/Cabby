/* global $ */
/* eslint-env jquery */
/* global waypoint */

const $nav = $(".nav");
const $link = $(".nav__link");
const date = new Date();

$(function () {
  $(".js--btn-call").waypoint((direction) => {
    if (direction === "down") {
      $nav.addClass("nav--light-bar");
      $link.addClass("nav__link--dark");
    } else {
      $nav.removeClass("nav--light-bar");
      $link.removeClass("nav__link--dark");
    }
  });

  $(".footer__legal").html(
    `Copyright &copy; 2020-${date.getFullYear()} of Wimborne and Ferndown Cabby`
  );
});
