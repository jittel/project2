$(function () {
  // jquery variables
  const title = $('#title');
  const description = $('#description');
  // const bid_end_time = $('#bid_end_time');
  // const task_start = $('#task_start');
  // const category = $('#category');
  // const location = $('#location');
  // const initial_price = $('#initial_price');

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
      console.log("LOOK AT ME")
    })
  })
})