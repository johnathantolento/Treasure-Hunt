$("#button1").click(function() {
    $("#double").show();
});
 $("#double").hide();
 $("#treasure").hide();
 $("#when").hide();
 $("#how").hide();
 $("#double").dblclick(function() {
     $("#treasure").show();
      $("#when").show();
       $("#double").hide();
 });
 $("#treasure").hover(function() {
    $("#how").show();
    $("#when").hide();
});