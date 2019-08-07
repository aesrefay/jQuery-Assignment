// Make the project great again with jQuery ..
$(document).ready(function(){
  $("#list").on("click",".delete",function(){
    $(this).parent("li").remove();
  });

  $("#add-topic").on("submit", function(e){
    var newtopic = $("#topic-val").val();
    var newElement = '<li><span class="name">' + newtopic + '</span><span class="delete">delete</span></li>';
    $("#list").append(newElement);
    $("#topic-val").val("");
    e.preventDefault();
  });

  $("#hide").on("click", function(e){
    if (!e.target.checked) {
      $("#list").show();
    } else {
      $("#list").hide();
    }
  })
});
