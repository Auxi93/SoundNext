const $line = $('.slider-line')
const $bigSlider =  $('.big-slider')

let photo = 0

$line.on('click', function(){
     
      photo = $line.index($(this))
 
      moveToElement()

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

