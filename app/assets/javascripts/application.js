// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.slick
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var items;
var lastHat;
$(document).ready(function(){
$(".hat").hide();
$('#title-name').addClass('slide-effect')
$('.title-description').addClass('slide-effect2')

  $.ajax({
    url: '/',
    method: "GET",
    data: 'swag',
    dataType: "JSON"
  }).done(function(response) {
    items = response
  });


  function slideIn(hat){
    $('#title-name').css('width', '550px');
    $(hat).show();
    $('#title-name').addClass('slide-effect')
    $('.title-description').addClass('slide-effect2')
    $(hat).removeClass('slideOutRight')
    $(hat).addClass('slideInRight')
  }
  function slideOut(hat){
    $('#title-name').removeClass('slide-effect')
    $('.title-description').removeClass('slide-effect2')
    $('#title-name').css('width', '390px');
    $(hat).removeClass('slideInRight')
    $(hat).addClass('slideOutRight')
  }
  function changeNameTimer(num, hat){
    setTimeout(function changeName(){
    $('#title-name').html(items[num].title)
    $('.title-description').html(items[num].description)
    if(num === 0 || num === 5){$('.title-description').append("<div id='contact-icons'><i class='fa fa-envelope-square' aria-hidden='true'></i><i class='fa fa-git-square' aria-hidden='true'></i><i class='fa fa-linkedin-square' aria-hidden='true'></i><i class='fa fa-phone-square' aria-hidden='true'></i></div>")};

    slideIn(hat);
    }, 1000)
  }
  function resetSquare(){
    $('#icon-container').children().css('background-color', "transparent")
  }

  $('#square1').click(function(event){ 
    var hat = '#wizard'
    resetSquare();
    $('#square1').css('background-color', "white")
    slideOut(lastHat);
    changeNameTimer(0, hat);
    lastHat = '#wizard'
  })

  $('#square2').click(function(event){ 
    var hat = '#cowboy'
    resetSquare();
    $('#square2').css('background-color', "white")
    slideOut(lastHat);
    changeNameTimer(1, hat);
    lastHat = '#cowboy'
  })
  $('#square3').click(function(event){ 
    var hat = '#miner'
    resetSquare();
    $('#square3').css('background-color', "white")
    slideOut(lastHat);
    changeNameTimer(2, hat);
    lastHat = '#miner'
  })
  $('#square4').click(function(event){ 
    var hat = '#wizard'
    resetSquare();
    $('#square4').css('background-color', "white")
    slideOut(lastHat);
    changeNameTimer(3, hat);
    lastHat = '#wizard'
  })
  $('#square5').click(function(event){ 
    var hat = '#cowboy'
    resetSquare();
    $('#square5').css('background-color', "white")
    slideOut(lastHat);
    changeNameTimer(4, hat);
    lastHat = '#cowboy'
  })
  $('#contact').click(function(event){ 
    var hat = 'none'
    resetSquare();
    slideOut(lastHat);
    changeNameTimer(5, hat);
    lastHat = '#miner'
  })
  
}); 