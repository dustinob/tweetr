/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(function() {

  function createTweetElement(tweetData) {

    var $tweet = $("<article>").addClass("tweet");

    var $header = $("<header>").appendTo($tweet);
    var $avatar =  $("<img>").addClass("profile-pic").attr("src", tweetData.user.avatars.small).appendTo($header);
    var $div = $("<div>").appendTo($header);
    var $fullName = $("<p>").addClass("fullname").text(tweetData.user.name).appendTo($div);
    var $tweetrName = $("<p>").addClass("tweetr-name").text(tweetData.user.handle).appendTo($div);
    var $tweetText = $("<p>").addClass("tweet-text").text(tweetData.content.text).appendTo($tweet);

    var $footer = $("<footer>").appendTo($tweet);
    var $hr = $("<hr>").appendTo($footer);
    var $divSplit = $("<div>").addClass("split").appendTo($footer);

    var $date = $("<p>").text(tweetData.created_at).appendTo($divSplit);
    var $divIcons = $("<div>").addClass("icons").appendTo($divSplit);
    var $flagIcon = $("<i>").addClass("fa fa-flag").appendTo($divIcons);
    var $flagIcon = $("<i>").addClass("fa fa-retweet").appendTo($divIcons);
    var $flagIcon = $("<i>").addClass("fa fa-heart").appendTo($divIcons);

    return $tweet;

  }

  function renderTweets(tweets) {

    for (var tweetObject of tweets) {
      $(".all-tweets").prepend(createTweetElement(tweetObject));
    }
  }




  // $(".tweet").hover(function() {
  //     console.log("In")
  //   $("footer div").fadeIn();
  // },
  // function() {
  //   console.log("out")
  //   $("footer .icons").fadeOut();
  // });

$("#compose").click(function() {
  $(".new-tweet").slideToggle("slow", function() {
    $("textarea").focus()
  });
});

//block the form submission

  $("form").on("submit", function (event) {
    event.preventDefault();

    var charCount = $(".new-tweet textarea").val().length;

    if (charCount > 140 || charCount === 0) {
      alert("Fuck off");
      return;
    }


    $.ajax({
      url: "/tweets" ,
      method: "POST",
      data: $(this).serialize(),
      success: function() {
        loadTweets();
      }
    });



  });

  function loadTweets() {


    $.ajax({
          dataType: "JSON",
          url: '/tweets',
          method: 'GET',
          success: function(tweets) {
            renderTweets(tweets);
          }
    });

  }

loadTweets();

});














