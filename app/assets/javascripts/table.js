  $(function(){

  $('.Checkbox__box').on('click',function(){
    if($(this).prop('checked')){
      $('.TableFormBtn').removeClass('HiddenBtn')
    }else{
      $('.TableFormBtn').addClass('HiddenBtn')
    }
  })
})