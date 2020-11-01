'use strict'

//Function to get the results based on input
function getUserInfo(selection) {
  fetch(`https://api.github.com/users/${selection}/repos`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  // .catch(error => alert("Sorry, I couldn't find that."));
;}

//Function to grab the user input
function watchForm() {
  $(".search-info").submit(event => {
    event.preventDefault();
    let selection = $(".user-name").val();
    getUserInfo(selection);
  });
}

//Function to display the results on the page
function displayResults(responseJson) {
  //Clear previous results
  console.log(responseJson);
  $(".repo-area").empty();
  //Go through all repos listed and add a link to the DOM
  responseJson.forEach(obj => 
    $(".repo-area").append(
      `<li><a href="${obj.url}">${obj.name}</a></li>`
    )
  );
  //Make username equal to search value
  $(".username").text(`${username}`);
}

//Tells the user the app is ready to go
$(function() {
  console.log("Ready to go, enter your request.");
  watchForm();
});

