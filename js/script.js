'use strict'
$(document).ready(function(){
  console.log($(window))
  var $input = $('.task-input')
  var $content = $('.content')
  var $btn = $('.btn-add')
  var $del = $('.delete')
  var $check = $('.check')
  var $delcom = $('.btn-clear-complete')
  var $status = $('.status')
  var $complete
  var numCom = 0
  var numItem = 0

  $btn.click(function() {
    $app.add()
  })

  $input.keyup(function(e) {
    if(e.which == 13){
    $app.add()
    }
  })

  $delcom.click(function(){
    $complete = $('.complete')
    $complete.remove()
    $app.updateStatus();
  })

  var $app = {

    add : function(){
      if($input.val()==''){
        console.log('trap empty input')
        return false;
      }

      var temp = '<tr class="incomplete"><td><input type="checkbox" class="check"></td>'+
                  '<td class="val">'+$input.val() + '</td>'+
                  '<td class="delete"><img src="images/remove-hi.png" style="width:20px;height:20px;"></td></tr>'
      $content.prepend(temp)
      $input.val('')
      this.updateCheck()
      this.updateDel()
      this.updateStatus()
    },

    updateStatus : function(){
      numItem = $('.incomplete').length + $('.complete').length
      numCom = $('.complete').length
      var temp = '<pre>Items list : '+numItem+'                        <font color="green">Items Completed : '+numCom+'</font></pre>'
      $status.empty()
      $status.prepend(temp)
    },

    updateCheck : function(){
      $check = $('.check')
      $check.change(function(event) {
        if ($(this).is(":checked")){
            $(this).parent().parent().removeClass("incomplete")
            $(this).parent().parent().addClass("complete")
          }
        else {
            $(this).parent().parent().removeClass("complete")
            $(this).parent().parent().addClass("incomplete")
          }
          $app.updateStatus();
      })
    },

    updateDel : function(){
      $del = $('.delete')
      $del.click(function(){
        $(this).parent().remove()
        $app.updateStatus();
      })
    }

  }


})
