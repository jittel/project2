$(function () {
  $('.submitBtn').on("click", submitPost);

  const submitPost = function () {
    preventDefault();
    // get form data
    const taskData = {
      UserId: 1,
      title: $('#title').val().trim(),
      description: $('#description').val().trim(),
      bid_end_time: $('#bid_end_time').val().trim(),
      task_start: $('#task_start').val().trim(),
      category: $('#category').val().trim(),
      location: $('#location').val().trim(),
      initial_price: $('#initial_price').val().trim()
    };
    console.log(taskData);

    $.ajax({
      method: "POST",
      url: "/api/task/new",
      data: taskData
    }).then(function(err, data) {
      if (err) throw err;
      console.log(data)
    })
  }

  // function updatePost(post) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/posts",
  //     data: post
  //   })
  //     .then(function() {
  //       
  //     });
  // }
})