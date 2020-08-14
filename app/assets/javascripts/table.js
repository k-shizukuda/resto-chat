  $(function(){

  $('.Checkbox__box').on('click',function(){
    console.log("aa")
    if($(this).prop('checked')){
      $('.TableFormBtn').removeClass('HiddenBtn')
    }else{
      $('.TableFormBtn').addClass('HiddenBtn')
    }
  })
})