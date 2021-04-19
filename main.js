$(document).ready(
  function(){
    $(".close").click(
      function(){
        $(".hamburger-menu").hide()
      }
    )
    
    $(".header-right i").click(
      function(){
        $(".hamburger-menu").show()
      }
    )
  }
)


