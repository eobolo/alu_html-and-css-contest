#!/usr/bin/node
$(function () {
  const header_image = $('header');
  const trademark = $('h1');
  const navlinks = $('.nav_links > a');
  header_image.on('mouseenter', () => {
  if (header_image.hasClass('header_image1') && trademark.hasClass('trademark')) {
    header_image.removeClass('header_image1');
    header_image.addClass('header_image2');
    trademark.removeClass('trademark');
    trademark.addClass('trademark1');
    navlinks.removeClass('nav_links_color1');
    navlinks.addClass('nav_links_color2');
  } else if (header_image.hasClass('header_image2') && trademark.hasClass('trademark1')) {
    header_image.removeClass('header_image2');
    header_image.addClass('header_image3');
    trademark.removeClass('trademark1');
    trademark.addClass('trademark2');
    navlinks.removeClass('nav_links_color2');
    navlinks.addClass('nav_links_color3');
  } else {
    header_image.removeClass('header_image3');
    header_image.addClass('header_image1');
    trademark.removeClass('trademark2');
    trademark.addClass('trademark');
    navlinks.removeClass('nav_links_color3');
    navlinks.addClass('nav_links_color1');
  }
  });
})
