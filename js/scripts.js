
let clickedBtn
// Everything below this line is user interface logic:
$(document).ready(function() {
  $(".ordbtn").click(function(e1) {
    e1.preventDefault();
    clickedBtn = this.id;
    $("#order").show();
  });

  $("form#checkout").submit(function(e2) {
    e2.preventDefault();

    const nameInput = $("input#name").val();
    const addressInput = $("input#addr").val();

   
    $(".name").text(nameInput);
    $(".cake").text(clickedBtn);
    $(".address").text(addressInput);

    $("#receipt").show();
  });

});