const $line = $('.slider-line')
const $lineOpa = $('.line-opa')
const $bigSlider =  $('.big-slider')
const $btn = $('.btn-new')


let photo = 0

$line.on('click', function(){
     
      photo = $line.index($(this))
 
      moveToElement()

})

$(window).on('scroll', function(){

      let pixel = $(window).scrollTop()
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
  
      $('.parallax1').css({
            transform: `translateY(${-pixel}px)`
      })
      
      $('.parallax2').css({
            transform: `translateY(${-pixel/2}px)`
      })

      $('.parallax3').css({
            transform: `translateY(${-pixel/4}px)`
      })
})
  
//Function
function moveToElement(){
      
      let operation = photo* -33.33

      let property = 'translateX('+ operation + '%)'
         
      $bigSlider.css({
            transform:property
      })

      $line.removeClass('active')
      $lineOpa.removeClass('active')
      $line.eq(photo).addClass('active')
      $lineOpa.eq(photo).addClass('active')
}