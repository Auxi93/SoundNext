//Constants
const $btn = $('.btn-new')
const $spanModel = $('.span-model')

const $line = $('.slider-line')
const $lineOpa = $('.line-opa')
const $bigSlider =  $('.big-slider')


let photo = 0

//Module 2, Slider with three images
$line.on('click', function(){

     //First, mark the position.
      photo = $line.index($(this))
 
      moveToElement()
      
      //Removes the active class from all line and hide the blue lines.
      $line.removeClass('active')
      $lineOpa.removeClass('active')

      //Adds the active class to the line you click on and shows the blue line indicating the position of the photo.
      $line.eq(photo).addClass('active')
      $lineOpa.eq(photo).addClass('active')
})

$(window).on('scroll', function(){
      
      // Take from the window the scrollTop
      let pixel = $(window).scrollTop()
      let elementDistance = $('.model-2').offset().top
      let heightV = $(window).height()
      let activated = elementDistance - ( heightV / 2)

      //Sound next appears when you scroll down in module 2
      if( pixel >= activated){
            $spanModel.addClass('active')
      }else{
            $spanModel.removeClass('active')
      }

      //The button is hidden when scrolling down and appears when scrolling up again
      if (pixel > 80)
      {
            $btn.css({
                  animation: 'none'
            })
            $btn.addClass('hide')
      }
      else
      {
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
function moveToElement(){

      // //Calculate the percentage that needs to move the slider      
      let operation = photo * - (100 / $line.length)

      //Move it on the horizontal axis
      let property = 'translateX(' + operation + '%)'
         
      $bigSlider.css({
            transform:property
      })
}