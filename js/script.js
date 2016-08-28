'use strict'
$(document).ready(function(){
  console.log($(window))
  var $input = $('.task-input')
  var $content = $('.content')
  var $btn = $('.btn-add')
  var $del = $('.delete')
  var $check = $('.check')
  var $delcom = $('.btn-clear-complete')
  var $complete

  $btn.click(function() {
    $list.add()
  })

  $input.keyup(function(e) {
    if(e.which == 13){
      $list.add()
    }
  })

  $delcom.click(function(){
    $complete = $('.complete')
    $complete.remove()
  })

  var $list = {

    add : function(){
      var temp = '<li><input type="checkbox" class="check"> <span class="task">'+
                  $input.val() +
                  '</span><span class="delete"> (x)</span></li>'
      $content.prepend(temp)
      $input.val('')
      $del = $('.delete')
      $check = $('.check')

      $check.change(function(event) {
        if ($(this).is(":checked")){
            $(this).parent().addClass("complete")
          }
        else {
            $(this).parent().removeClass("complete")
          }
      })

      $del.click(function(){
        $(this).parent().remove()
      })

    }

  }


})
