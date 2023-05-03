var quotes = ["\"I don't wanna look at anything else now that I saw you.\" (Daylight)", "\"Have I known you twenty seconds or twenty years?\" (Lover)","\"All I know since yesterday is everything has changed.\" (Everything Has Changed)","\"I see sparks fly whenever you smile.\" (Sparks Fly)","\"Everything will be alright if you keep me next to you.\" (22)","\"You got that James Dean daydream look in your eye and I got that red lip classic thing that you like\" (Style)","\"I'll spend forever wondering if you knew I was enchanted to meet you.\" (Enchanted)","\"And I never saw you coming and I’ll never be the same. \"(State of Grace)", "\"You are the best thing that's ever been mine.\" (Mine)"];
function newQuote(){
var val = Math.floor(Math.random()*quotes.length);
document.getElementById('displayQuote').innerHTML = quotes[val];
 };

// $('a[data-text]').each(function(){
//   $(this).html('data-text', this) ;
// });

$('twitter-share-button').change(function(){
	var current_quote = document.getElementById('displayQuote').innerHTML.value
	document.getElementsByTagName("a")[0].setAttribute("data-text", current_quote);
});

$.getScript('https://platform.twitter.com/widgets.js');