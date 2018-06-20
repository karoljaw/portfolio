$(document).ready(function() {
  
    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 60
      }, 1000 );
    });
});


$(document).on('scroll', function(){
    let scrollTop = $(document).scrollTop();
    
    if (scrollTop > 99){
        $('.navbar').addClass('sticky');
    } 
    else{
        $('.navbar').removeClass('sticky');
    }
})

$('#trigger-menu').on('click', function(){
    $('#menu').toggleClass('toggle');
    $('#trigger-menu').toggleClass('active');
})

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top  + element_height/2;
    var element_bottom_position = (element_top_position - element_height/2);
 
    if ((element_bottom_position>= window_top_position) &&
        (element_top_position<= window_bottom_position)) {
      $element.addClass('in-view');
      $element.addClass('active-icon');
    }
  });
}


$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');