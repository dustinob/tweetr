/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


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
      $(".all-tweets").append(createTweetElement(tweetObject));
    }
  }

  renderTweets(tweetData);




  $("article").hover(function() {
    $("footer div").fadeIn();
  },
  function() {
    $("footer .icons").fadeOut();
  });
});