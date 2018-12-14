$(function () {
  $.get('http://localhost:3000/home', (data) => {
    let servicesMsg = JSON.parse(data);
    console.log(servicesMsg);
    $('.service-items').append(template('left-nav', {data: servicesMsg}));
    $('.service-wrap').append(template('service-list', {data: servicesMsg}))
  });
  
  //轮播图
  new Swiper('.swiper-container', {
    effect: 'fade',
    autoplay: {
      delay: 1000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});