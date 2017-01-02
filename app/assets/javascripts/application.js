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
$(document).ready(function(){

  $.ajax({
    url: '/',
    method: "GET",
    data: 'swag',
    dataType: "JSON"
  }).done(function(response) {
    items = response
  });


  function slideIn(){
    $('#title-name').addClass('slide-effect')
    $('#title-description').addClass('slide-effect2')
  }
  function slideOut(){
    $('#title-name').removeClass('slide-effect')
    $('#title-description').removeClass('slide-effect2')
  }

  $('#cowboy').click(function(event){ 
    slideOut();
    setTimeout(function changeName(){
    $('#title-name').html(items[0].title)
    $('#title-description').html(items[0].description)
    slideIn();
    }, 1000)
    
  })
  $('#wizard').click(function(event){ 
    slideOut();
    setTimeout(function changeName(){
    $('#title-name').html(items[1].title)
    $('#title-description').html(items[1].description)
    slideIn();
    }, 1000)
    // $('#title-name').addClass('slide-effect')
    // $('#title-description').addClass('slide-effect2')
    


  })
  $('#fucker').click(function(event){ 
    $('#title-name').html(items[2].title)
    $('#title-description').html(items[2].description)
    $('#title-name').addClass('slide-effect')
    // $('#title-description').addClass('slide-effect2')
  })
  
}); 