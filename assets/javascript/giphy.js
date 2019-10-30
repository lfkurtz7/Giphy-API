var topics = ["Raccoons", "French Bulldogs", "Guinea Pigs", "Turtles", "Goats", "Otters", "Elephants", "Dogs", "Sloths"];

DisplayOptionButtons(topics)

$(document).on("click", ".btnClick", HandleGIFClick);

$("#add-category").on("click", HandleCategoryADD);

$(document).on("click", ".gifCard", GIFmove);


function HandleGIFClick() {
    $("#GIFArea").empty();
    var x = $(this).attr("data-search");
    console.log(x)

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=aRbD2Jz1V9nKARvMpsFPRtUxQVgaLmUH&limit=10";
    console.log(queryURL);

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                CreateGIFCard(response.data[i])
            }

        })

}

function CreateGIFCard(gif) {
    var div = $("<div>").addClass("gifCard")
    var rating = $("<p>").text("Rating: " + gif.rating)
    var image = $("<img>").attr("src", gif.images.fixed_height_still.url)
    image.attr("data-stored-url", gif.images.fixed_height.url)

    div.append(image, rating);
    $('#GIFArea').prepend(div);
}


function GIFmove() {
    var image = $(this).children("img");
    var currentSrc = image.attr("src");
    var storedSrc = image.attr("data-stored-url");
    image.attr("src", storedSrc);
    image.attr("data-stored-url", currentSrc);
}


function HandleCategoryADD(event) {
    event.preventDefault();
    var newCategory = $("#text-input").val().trim();
    topics.push(newCategory);
    DisplayOptionButtons(topics);
    console.log(topics);

}

// issue with either HandleCategoryAdd or DisplayOptionsButtons--text inputs display as buttons
// but do not function when clicked. New buttons aren't pulling info from Giphy API, just appearing 
// on the screen. Need to figure out how to get new buttons to pull API info!!!!

function DisplayOptionButtons(topics) {
    $("#buttonArea").empty();
    for (var i=0; i < topics.length; i++) {
        var btn = $("<button>").addClass("btn btn-outline-primary");
        btn.addClass("btnClick")
        btn.attr("data-search", topics[i]);
        btn.text(topics[i]);
        $("#buttonArea").append(btn);
        
    }
};