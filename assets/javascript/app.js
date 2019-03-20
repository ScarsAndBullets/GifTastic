$(function() {
	populateButtons(searchArray, "searchButton", "#buttonsArea");
	console.log("Page Loaded");
});

var searchArray = ["Goth Sullus", "Wraith", "Tyrus Rechs"];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
	$(areaToAddTo).empty();
	for (var i = 0; i < searchArray.length; i++) {
		var a = $("<button>");
		a.addClass(classToAdd);
		a.attr("data-type", searchArray[i]);
		a.text(searchArray[i]);
		$(areaToAddTo).append(a);
	}
}

$(document).on("click", ".searchButton", function() {
	var type = $(this).data("type");
	console.log(type);
	const APIKey = "w5roQjrAR2tVFE6PiCn5LSgEnl7LixUP";
	var queryURL = `http://api.giphy.com/v1/gifs/search?q=${type}&api_key=${APIKey}&limit=10`;
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
	});
});
