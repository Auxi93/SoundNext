const $line = $('.slider-line')
const $bigSlider =  $('.big-slider')
const $btn = $('.btn-new')


let photo = 0

$line.on('click', function(){
     
      photo = $line.index($(this))
 
      moveToElement()

})

$(window).on('scroll', function(){

      let pixel = $(window).scrollTop()
      $btn.addClass('hide')

  
      $('.parallax1').css({
          transform: `translateY(${-pixel}px)`
      })
      $('.parallax2').css({
          transform: `translateY(${-pixel/5}px)`
      })
})
  

function moveToElement(){
      
      let operation = photo* -33.33

      let property = 'translateX('+ operation + '%)'
         
      $bigSlider.css({
            transform:property
      })

      $line.removeClass('active')
      $line.eq(photo).addClass('active')
}