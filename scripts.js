//counter
var count = 100;

var counter = setInterval(timer, 10); //10 will  run it every 100th of a second

var display = '';


function timer() {
    if (count <= 0) {
        clearInterval(counter);
        playGif();
        hideTimer();
        return;
    }
    count--;
    document.getElementById("timer").innerHTML = count / 100;
}

function playGif() {
    display = '#gif';

    $(display).css('background', 'url("https://media.giphy.com/media/3ov9jJGropK0I8QmWY/giphy.gif")');

    $(display).css('background-size', 'cover');
}

function hideTimer() {
    $('#timer').css('visibility', 'hidden');
}

//giphy
var xhr = $.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=4yRanWsUp4YQqDowgBx06zumbhVZSZCn&limit=5');
xhr.done(function (data) {
    console.log('success got data', data);
});







//julian kelly code reference
// function getGiphyData ( keyword ) {
//     var splitKeyword = keyword.split(' ');
//     var parsedSearchTerm = splitKeyword.join('+');

// 	var giphyURL = "http://api.giphy.com/v1/gifs/search"
// 					+ "?q=" + parsedSearchTerm +
//                     + "&limit=5"
// 					+ "&api_key=dc6zaTOxFJmzC";
// 	$.ajax({
// 		url: giphyURL,
// 		type: "get",
// 		dataType: "json",
// 		error: function(data) {
// 			console.log("No Flickr data");
// 		},
// 		success: function(data) {
// 			var imgURL = data.data[parseInt(Math.random()*10)].images.downsized_large.url;
//             gifs.push(imgURL);
//             giphyResolved = true;
// 		}
// 	});
// }