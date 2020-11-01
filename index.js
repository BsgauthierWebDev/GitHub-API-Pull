'use strict'

//Function to get the results based on input
function getUserInfo(selection) {
  fetch(`https://api.github.com/users/${selection}/repos`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert("Sorry, I couldn't find that."));
}

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
  $(".display-items").empty();
  //Loop through the array
  for (let i = 0; i < responsJson.value.length; i++) {
  //Create new list items for each repo 
    $(".display-items").append(
      `<li><h3><a href="${responseJson.value[i].html_url}">${responseJson.value[i].name}</a></h3></li>
      `
    )};
}

//Tells the user the app is ready to go
$(function() {
  console.log("Ready to go, enter your request.");
  watchForm();
});

