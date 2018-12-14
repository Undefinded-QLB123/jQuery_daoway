$(function () {
  $.get(' http://localhost:3000/service', (data) => {
    let serviceProvider = JSON.parse(data);
    console.log(serviceProvider);
    $('.shopList').append(template('serviceProvider', {data: serviceProvider}));
    
    window.serviceProvider = serviceProvider;
  });
});

$('.getListBtn').click(()=>{
  let serviceProvider = this.serviceProvider;
  serviceProvider.forEach((e)=>{
    this.serviceProvider.push(e);
  });
  $('.shopList').append(template('serviceProvider', {data: this.serviceProvider}))
});
