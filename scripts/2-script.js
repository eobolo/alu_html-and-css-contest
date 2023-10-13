#!/usr/bin/node
$(function () {
  const body = $('body');
  body.on('mouseenter', function () {
    if (body.hasClass('body1')) {
      body.removeClass('body1');
      body.addClass('body2');
    } else if (body.hasClass('body2')) {
      body.removeClass('body2');
      body.addClass('body3');
    } else {
      body.removeClass('body3');
      body.addClass('body1');
    }
  });
});
