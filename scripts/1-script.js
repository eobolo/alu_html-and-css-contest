#!/usr/bin/node
$(function () {
  const purpose_container = $('div.purpose_container');
  const purpose_text = $('h2.purpose');
  const purpose_para = $('p.purpose_para');
  
  purpose_container.on('mouseenter', () => {
    if (purpose_container.hasClass('purpose_cont1')) {
      purpose_container.removeClass('purpose_cont1');
      purpose_container.addClass('purpose_cont2');
      purpose_text.text('Alumni News and Updates')
      purpose_text.removeClass('purpose_color1');
      purpose_text.addClass('purpose_color2');
      purpose_para.text('Welcome to our alum news and updates. The section features the latest news and updates on alumni achievements, career milestones, and community initiatives. It helps keep our visitors informed about what\'s happening within the alum network.');
      purpose_para.removeClass('purpose_para_color1');
      purpose_para.addClass('purpose_para_color2');
    } else if (purpose_container.hasClass('purpose_cont2')) {
      purpose_container.removeClass('purpose_cont2');
      purpose_container.addClass('purpose_cont3');
      purpose_text.text('Alumni Resources')
      purpose_text.removeClass('purpose_color2');
      purpose_text.addClass('purpose_color3');
      purpose_para.text('You will learn and be Offered a repository of valuable resources such as job listings, career advice articles, and educational materials to aid alums in personal and professional development.');
      purpose_para.removeClass('purpose_para_color2');
      purpose_para.addClass('purpose_para_color3');
    } else if (purpose_container.hasClass('purpose_cont3')) {
      purpose_container.removeClass('purpose_cont3');
      purpose_container.addClass('purpose_cont4');
      purpose_text.text('Alumni Stories and Memories')
      purpose_text.removeClass('purpose_color3');
      purpose_text.addClass('purpose_color4');
      purpose_para.text('This space allows alums to share their anecdotes, memories, and experiences at the institution. Encouraging alums to contribute their stories can foster a sense of nostalgia and community.');
      purpose_para.removeClass('purpose_para_color3');
      purpose_para.addClass('purpose_para_color4');
    } else {
      purpose_container.removeClass('purpose_cont4');
      purpose_container.addClass('purpose_cont1');
      purpose_text.text('Purpose')
      purpose_text.removeClass('purpose_color4');
      purpose_text.addClass('purpose_color1');
      purpose_para.text('Welcome to our Alumni Connect website, dedicated to fostering a strong bond among our university alumni community. Our primary purpose is to create an online hub where former students can reunite, stay updated, and actively engage with their alma mater.');
      purpose_para.removeClass('purpose_para_color4');
      purpose_para.addClass('purpose_para_color1');
    }
  })
});
