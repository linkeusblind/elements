$(document).ready(function () { 
  $('#menu1 li.dropDown').hover(
    function () {
      $('> ul', this).hide();
      $('> ul', this).stop().fadeIn(300);
    }, 
    function () {
      $('> ul', this).stop().fadeOut(300);         
    }
  );
  $('#menu1 li.dropDown li').hover(
    function () {
      $('> ul', this).hide();
      $('> ul', this).stop().fadeIn(300);
    }, 
    function () {
      $('> ul', this).stop().fadeOut(300);         
    }
  );
  $('#menu2 li.dropDown').hover(
    function () {
      $('> ul', this).hide();
      $('> ul', this).stop().fadeIn(300);
    }, 
    function () {
      $('> ul', this).stop().fadeOut(300);         
    }
  );
  $('#menu2 li.dropDown li').hover(
    function () {
      $('> ul', this).hide();
      $('> ul', this).stop().fadeIn(300);
    }, 
    function () {
      $('> ul', this).stop().fadeOut(300);         
    }
  );
});