$(function(){

  $('.Checkbox__box').on('click',function(){
    if($(this).prop('checked')){
      $('.SettingTableNumber__button').removeClass('HiddenBtn')
    }else{
      $('.SettingTableNumber__button').addClass('HiddenBtn')
    }
  })
  $('.SecretField').click(function(){
    $('.SettingTableNumber__input').removeClass('Hidden')
  })

})