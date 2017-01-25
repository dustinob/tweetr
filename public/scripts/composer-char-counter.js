$(function() {
  $(".new-tweet form").on("keyup", "textarea", function() {
    var textArea = $(this);
    var keyCount = (140 - (textArea.val().length));
    if (keyCount > 0) {
      textArea.siblings(".counter").addClass("counter").text(keyCount).css("color", "black");
    }
    else {
      textArea.siblings(".counter").addClass("counter").text(keyCount).css("color", "red");
    }
  });
});

$(function() {
  $("article").hover(function() {
    $("footer div").fadeIn();

}, function() {
    $("footer .icons").fadeOut();
});
});
