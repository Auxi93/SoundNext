const $line = $('.slider-line')
const $bigSlider =  $('.big-slider')
const $btnNew = $('.btn-new')


let photo = 0

$line.on('click', function(){
     
      photo = $line.index($(this))
 
      moveToElement()

})

//funciona pero quiero que primero aparezca el texto y luego el borde no al revés

// setTimeout(function(){
//       $btnNew.addClass('active')
// },)

function moveToElement(){
      
      let operation = photo* -33.33

      let property = 'translateX('+ operation + '%)'
         
      $bigSlider.css({
            transform:property
      })

      $line.removeClass('active')
      $line.eq(photo).addClass('active')
}

