const $point = $('.slider-point')
const $bigSlider =  $('.big-slider')

let photo = 0

$point.on('click', function(){
     
      photo = $point.index($(this))
 
      moveToElement()

})

function moveToElement(){
      
      let operation = photo* -33.33

      let property = 'translateX('+ operation + '%)'
         
      $bigSlider.css({
            transform:property
      })

      $point.removeClass('active')
      $point.eq(photo).addClass('active')
}

