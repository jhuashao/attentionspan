//counter
var count = 505;

var counter = setInterval(timer, 10); //10 will  run it every 100th of a second

function timer() {
    if (count <= 0) {
        // clearInterval(counter);
        // return;
    }
    count--;
    document.getElementById("timer").innerHTML = count / 100;
}

//giphy

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=4yRanWsUp4YQqDowgBx06zumbhVZSZCn&limit=5");
xhr.done(function (data) {
    console.log("success got data", data);
});


//jquery experiment
$(document).ready(function () {
    $('#about')
        .mouseover(function () {
            $('body').css('background', 'url(https://media.giphy.com/media/3ov9jJGropK0I8QmWY/giphy.gif) repeat left center fixed');

        })
});


//julian kelly code
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