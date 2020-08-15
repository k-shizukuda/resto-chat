$(function(){

  let buildHTML = function(message){
    let html =`<div class="Message">
                <div class="Message__text">
                  ${message.content}
                </div>
                <div class="Message__tableNo">
                  tableNo,
                  ${message.table_id}
                </div>
              </div>`
    return html;
  }
  $('.Emoji').on('click',function(){
    let inputEmoji = $(this).text();
    let inputText = $('.FormContent__inputContent');
    let inputStamp = $('.FormContent__inputStamp')
    inputText.val(inputText.val() + inputEmoji);
    inputStamp.val(inputStamp.val() + inputEmoji)
  })
  $('.EmojiBtn').on('click',emojiesHidden)
  $('.Emoji').on('click', emojiesHidden)
  $('.Form__submit').click(function(){
    if(!($(this).hasClass('hidden'))){
      emojiesHidden
    }
  })
  function emojiesHidden(){
    $('.Emojies').toggleClass('Hidden');
  }
  let reloadStamp = function(){
    let last_stamp_ids = [];
    let num = 1;
    while(num <= 8){
      //let tableNum = $('.StampChat__table' + num);
      let last_stamp_id = $('.StampChat__table' + num).children('.TableMessage').data("stamp-id");
      last_stamp_ids.push(last_stamp_id);
      num++;
    }
    $.get({
      url: 'api/messages',
      data: {id: last_stamp_ids},
      datatype: 'json'
      
    })
    .done(function(messages){
      $.each(messages,function(i, message){
        if(last_stamp_ids[i] !== message.id){
          let id = message.table_id
          if($(".Form").data("id") !== id){
          let html = buildHTML(message);
          $(".MessageBox").prepend(html);
          }
          $('.StampChat__table'+id).children('.TableMessage').html(message.stamp);
          $('.StampChat__table'+id).children('.TableMessage').data('stamp-id', message.id)
          $(".StampChat__table"+id).removeClass("Hidden");
          setTimeout(function(){
            $(".StampChat__table"+id).addClass("Hidden");
          },30000)//30秒で消える
        }
      });
    });
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      if(data.content){
      let html = buildHTML(data);
      $(".MessageBox").prepend(html);
      }
      let id = data.table_id
      $(".StampChat__table"+id).children().html(data.stamp);
      $('.FormContent__inputContent').val('');
      $('.FormContent__inputStamp').val('');
      $('.Form__submit').prop('disabled', false);
      $(".StampChat__table"+id).removeClass("Hidden");
      setTimeout(function(){
        $(".StampChat__table"+id).addClass("Hidden");
      },30000)//30秒で消える
    })
  })
  // $('.Cashier').on('click',reloadStamp)
  //setTimeout(reloadStamp, 7000);
  setInterval(reloadStamp, 7000);
});
