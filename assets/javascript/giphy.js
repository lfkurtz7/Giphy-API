var topics = ["Raccoons", "Frenchies", "Guinea-Pigs", "Turtles", "Goats", "Otters", "Elephants", "Dogs", "Sloths"];


$("button").on("click", function(){
    console.log("BUTTON CLICKED");
    var x = $(this).data("search");
    console.log(x)

    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=aRbD2Jz1V9nKARvMpsFPRtUxQVgaLmUH&limit=10";
    console.log(queryURL);

    $.ajax({url:queryURL, method: 'GET'})
        .done(function(response){
            console.log(response);
            for (var i = 0; i<response.data.length; i++) {
                $('#GIFArea').prepend("<p>Rating: " + response.data[i].rating + "</p>" );
                $('#GIFArea').prepend("<img src=' " + response.data[i].images.downsized.url+"'>");


            }
 
 
 
        })





})



  // This function handles events where a movie button is clicked
  $("#add-category").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#gif-input").val().trim();

    // Adding movie from the textbox to our array
    topics.push(gif);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "movie-btn"
  //$(document).on("click", ".movie-btn", displayMovieInfo);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();







