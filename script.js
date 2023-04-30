var quotes = ["\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" (Nelson Mandela)", "\"Life is 10% what happens to us and 90% how we react to it.\" (Charles R. Swindoll)", "\"Believe you can and you're halfway there.\" (Theodore Roosevelt)", "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" (Winston Churchill)"]
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