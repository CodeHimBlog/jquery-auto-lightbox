/*  Plugin: AutoLightbox.js
 *   Author: Asif Mughal
 *   URL: https://www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2019 - Asif Mughal
 *
 *   USEAGE: This lite weight plug-in automatically
 *           create "Image Lightbox" of all images available in given selector. 
 *           Also automatically detect image caption (from alt text) and show on the image. 
 */
/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

(function($){
      $.fn.AutoLightbox = function(options) {
if($(window).width() < 720){
      var setting = $.extend({
    		        width: 320,
                 height: 240,
                 dimBackground: true
  		   }, options);
   } else{
       var setting = $.extend({
    		        width: 560,
                 height: 340,
                 dimBackground: true
  		}, options);
  }

        return this.each(function() {
             var lightBox = document.createElement("div");
             var closeBox = document.createElement("span");
$(closeBox).html("&times;").addClass("close-light-box");
            var capArea = document.createElement("span"); 

$(closeBox).css({
     'position' : 'absolute',
     'border' : '1px solid rgba(255, 255, 255, 0.4)',
     'width' : '32px',
     'height' : '32px',
     'right' : '5px',
     'top' : '5px',
     'textAlign' : 'center',
     'lineHeight' : '32px',
     'borderRadius' : '50%',
     'cursor' : 'pointer',
     'background' : 'rgba(0, 0, 0, 0.4)',
     'fontSize' : '26px',
     'color' : 'rgba(255, 255, 255, 0.8)',
});

         var galleryPhoto = $(this).find('img');

$(galleryPhoto).bind('click', function(){
         var caption = $(this).attr('alt');
   if ($(this).prop('alt') == false){
      caption = "This image has no caption";
   }
         var singlePhoto = $(this).clone().css({
    'width' : setting.width,
    'height' : setting.height,
    'objectFit' : 'cover'
   }); 

$(lightBox).css({
    'width' : setting.width,
    'height' : setting.height,
    'position' : 'fixed',
    'border' : '4px solid #f2f2f2',
    'borderRadius' : '6px',
    'boxShadow' : '2px 2px 6px rgba(0, 0, 0, 0.5)',
    'top' : '50%',
    'marginTop' : -(setting.height/2),
    'left' : '50%',
    'marginLeft' : -(setting.width/2),
    'zIndex' : '999',
    'display' : 'none',
    
});
 $(lightBox).html(singlePhoto).appendTo("body").fadeIn();
    $(lightBox).addClass("light-box").prepend(closeBox);

if (setting.dimBackground == true){
        var dimmy =  document.createElement("div");
   $(dimmy).css({
       'width' : '100%',
       'height' : '100vh',
       'background' : 'rgba(0, 0, 0, 0.5)',
       'zIndex' : '2', 
       'position' : 'fixed',
       'top' : '0', 
       'left' : '0'
}).appendTo("body").fadeIn("slow");
}

$(closeBox).click(function(){
       $(lightBox).remove();
          if (setting.dimBackground == true){
            $(dimmy).remove(); }
}); 

$(capArea).html(caption).appendTo(lightBox).css({'position' : 'relative',
           'padding' : '10px',
           'bottom' : '45px',
           'fontSize' : '15px',  
           'textAlign' : 'center',
           'background' : 'rgba(0, 0, 0, 0.3)', 
           'color' : 'rgba(255, 255, 255, 1)',
           'display' : 'block'});
    //hide Image caption if mouse enter on it
   $(lightBox).bind('mouseenter', function(){
        $(capArea).fadeOut();
    });
    //show image caption if mouse leave
    $(lightBox).bind('mouseleave', function(){
         $(capArea).fadeIn();  });
});
        });
      };
    
    })(jQuery);
