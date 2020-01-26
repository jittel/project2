// $(function () {
//   $('.submitBtn').on("click", submitPost);

//   const submitPost = function () {
//     preventDefault();
//     // get form data
//     const taskData = {
//       UserId: 1,
//       title: $('#title').val().trim(),
//       description: $('#description').val().trim(),
//       bid_end_time: $('#bid_end_time').val().trim(),
//       task_start: $('#task_start').val().trim(),
//       category: $('#category').val().trim(),
//       location: $('#location').val().trim(),
//       initial_price: $('#initial_price').val().trim()
//     };
//     console.log(taskData);

//     $.ajax({
//       method: "POST",
//       url: "/api/task/new",
//       data: taskData
//     }).then(function(err, data) {
//       if (err) throw err;
//       console.log(data)
//     })
//   }

//   // function updatePost(post) {
//   //   $.ajax({
//   //     method: "PUT",
//   //     url: "/api/posts",
//   //     data: post
//   //   })
//   //     .then(function() {
//   //       
//   //     });
//   // }
// })

// $(document).ready(function () {
//   // Gets an optional query string from our url (i.e. ?post_id=23)
//   var url = window.location.search;
//   var taskId;
//   // Sets a flag for whether or not we're updating a post to be false initially
//   var updating = false;

//   // If we have this section in our url, we pull out the post id from the url
//   // In localhost:8080/cms?post_id=1, postId is 1
//   if (url.indexOf("?task_id=") !== -1) {
//     taskId = url.split("=")[1];
//     getTaskData(taskId);
//   }

//   // Getting jQuery references to the post body, title, form, and category select
//   var descriptionInput = $("#description");
//   var titleInput = $("#title");
//   var cmsForm = $("#cms");
//   var taskCategorySelect = $("#category");
//   // Giving the postCategorySelect a default value
//   taskCategorySelect.val("Personal");
//   // Adding an event listener for when the form is submitted
//   $(cmsForm).on("submit", function handleFormSubmit(event) {
//     event.preventDefault();
//     // Wont submit the post if we are missing a body or a title
//     if (!titleInput.val().trim() || !bodyInput.val().trim()) {
//       return;
//     }
//     // Constructing a newPost object to hand to the database
//     var newPost = {
//       title: titleInput.val().trim(),
//       description: descriptionInput.val().trim(),
//       category: taskCategorySelect.val()
//     };

//     console.log(newPost);

//     // If we're updating a post run updatePost to update a post
//     // Otherwise run submitPost to create a whole new post
//     if (updating) {
//       newTask.id = taskId;
//       updateTask(newTask);
//     }
//     else {
//       submitTask(newTask);
//     }
//   });

//   // Submits a new post and brings user to blog page upon completion
//   function submitTask(Task) {
//     $.post("/api/task/", Task, function () {
//       window.location.href = "/new";
//     });
//   }

//   // Gets post data for a post if we're editing
//   function getTaskData(id) {
//     $.get("/api/task/" + id, function (data) {
//       if (data) {
//         // If this post exists, prefill our cms forms with its data
//         titleInput.val(data.title);
//         descriptionInput.val(data.description);
//         postCategorySelect.val(data.category);
//         // If we have a post with this id, set a flag for us to know to update the post
//         // when we hit submit
//         updating = true;
//       }
//     });
//   }

//   // Update a given post, bring user to the blog page when done
//   function updateTask(task) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/task",
//       data: task
//     })
//       .then(function () {
//         window.location.href = "/new";
//       });
//   }
// });


$(function () {
  // jquery variables
  const title = $('#title');
  const description = $('#description');
  // const bid_end_time = $('#bid_end_time');
  // const task_start = $('#task_start');
  // const category = $('#category');
  // const location = $('#location');
  // const initial_price = $('#initial_price');

  // Form check variables
  // const usernameUniqueCheck = false;
  // const passwordLengthCheck = false;
  // const passwordCharsCheck = false;
  // const emailCheck = false;

  // Submit form on submit button click
  $('#submitBtn').click(function () {
    // Check form criteria

    // get form data
    const userData = {
      title: title.val().trim(),
      description: description.val().trim(),
      bid_end_time: $('#bid_end_time').val().trim(),
      task_start: $('#task_start').val().trim(),
      category: $('#category').val().trim(),
      location: $('#location').val().trim(),
      initial_price: $('#initial_price').val().trim()
    };
    console.log(userData);

    $.ajax({
      method: "POST",
      url: "/api/task/new",
      data: userData
    }).then(function (err, data) {
      if (err) throw err;
      // window.location.href = "/user";
      console.log(data)
    })
  })



  // $("#textbox").on('change keyup paste mouseup', function() {
  //     if ($(this).val() != lastValue) {
  //         lastValue = $(this).val();
  //         console.log('The text box really changed this time');
  //     }
  // });
  // const usernameUnique = false;
  // const passwordLength = false;
  // const passwordChars = false;
  // const email = false;
})