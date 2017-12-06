var count = 500;

var counter = setInterval(timer, 10); //10 will  run it every 100th of a second

var display = '';

var trendingGif = '';

//TIMER
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


//play gif function
function hideTimer() {
    $('#timer').css('visibility', 'hidden');
}


//GIPHY TRENDING
var xhr = $.get('https://api.giphy.com/v1/stickers/trending?&api_key=4yRanWsUp4YQqDowgBx06zumbhVZSZCn&limit=10000');

function playGif() {
        xhr.done(function (data) {
            console.log('success got data', data.data[0].images.original.url);
            var i = 0;
            var interval = setInterval(function () {
                if (i == 10000) clearInterval(interval);
                i++;
                    var trendingGif = data.data[i].images.original.url;
                    window.trendingGif = trendingGif;
                    display = '#gif';
                    $(display).css('background', 'url(' + trendingGif + ')');
                    // $(display).css('background-size', 'center');
            }, 100);
        });
    };


// $( document ).ready(function() {
//     console.log( "ready!" );
// });

//GIF ARRAY COUNTER
// function gifCounter() {

//     var interval = setInterval(countUp, 500);

//     function countUp() {
//         if (i == 100) {
//             clearInterval;
//             return;
//         }
//         i++
//         console.log(i);
//     }

// }





//giphy



//API JSON LINK TO TRENDING
//'http://api.giphy.com/v1/gifs/trending?&api_key=4yRanWsUp4YQqDowgBx06zumbhVZSZCn&limit=5'

// var giphyURL = 'http://api.giphy.com/v1/gifs/trending?'
// var apiKey = '&api_key=4yRanWsUp4YQqDowgBx06zumbhVZSZCn'
// var gifLimit = '&limit=5'





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