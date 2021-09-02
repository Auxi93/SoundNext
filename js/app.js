//Constants
const $btn = $('.btn-new')
const $spanModel = $('.span-model')

const $line = $('.slider-line')
const $lineOpa = $('.line-opa')
const $bigSlider =  $('.big-slider')

const verticalPixelToHideButton = 80

let photoIndex = 0

//Slider with three images
$line.on('click', function() {

     //Store the position.
      photoIndex = $line.index($(this))
 
      moveToElement($bigSlider, photoIndex, $line.length)
      
      //Remove the active class from all line and hide the blue lines.
      $line.removeClass('active')
      $lineOpa.removeClass('active')

      //Add the active class to the line you click on and shows the blue line indicating the position of the photoIndex.
      $line.eq(photoIndex).addClass('active')
      $lineOpa.eq(photoIndex).addClass('active')
})

//Scroll 
$(window).on('scroll', function() {
      
      // Take from the window the scrollTop
      let pixel = $(window).scrollTop()
      let elementDistance = $('.model-2').offset().top
      let heightV = $(window).height()
      let activated = elementDistance - ( heightV / 2)

      //Sound next appears when you scroll down in module 2
      if( pixel >= activated) {
            $spanModel.addClass('active')
      } else {
            $spanModel.removeClass('active')
      }

      //The button is hidden when scrolling down and appears when scrolling up again
      if (pixel > verticalPixelToHideButton) {
            $btn.css({
                  animation: 'none'
            })
            $btn.addClass('hide')
      } else {
            $btn.removeClass('hide')
      } 

      //Some elements move up when you scroll up the page  
      $('.parallax1').css({
            transform: `translateY(${-pixel}px)`
      })
      
      $('.parallax2').css({
            transform: `translateY(${-pixel / 2}px)`
      })

      $('.parallax3').css({
            transform: `translateY(${-pixel / 4}px)`
      })
})
  
//Function
function moveToElement($slider, elementIndex, maxElementCount) {

      // //Calculate the percentage that needs to move the slider      
      let operation = elementIndex * - (100 / maxElementCount)

      //Move it on the horizontal axis
      let property = 'translateX(' + operation + '%)'
         
      $slider.css({
            transform:property
      })
}