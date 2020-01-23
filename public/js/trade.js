// Make sure we wait to attach our handlers until the DOM is fully loaded.AQ  

//post template ??
// sets variable source to the animalTemplate id in index.html
var source = document.getElementById("postTemplate").innerHTML;
 
// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);
 
// data
var data = {posts: [
{posts: username, task: true},
{posts: username, task: true},
{posts: username, task: true}
]};
 
// data is passed to above template
var output = template(data);
 
// HTML element with id "animalList" is set to the output above
document.getElementById("animalList").innerHTML = output;









// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#handlebars-demo').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);





// Created a create post event function
$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newPost = {
        post_name: $("#newpost")
          .val()
          .trim(),
        devoured: 0
      };
  
      $.ajax("/api/post", {
        type: "POST",
        data: newPost
      }).then(function() {
        console.log("New post added!");
        location.reload();
      });
    });

// Possibly create and edit post function
  
// Created a delete post function
    $(".deletepost").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/post/" + id
      }).then(location.reload());
    });
  });