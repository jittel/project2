$(function () {
  // jquery variables
  const title = $('#title');
  const description = $('#description');
  const bid_end_time = $('#bid_end_time');
  const task_start = $('#task_start');
  const category = $('#category');
  const location = $('#location');
  const initial_price = $('#initial_price');

  // Submit form on submit button click
  $('#submitBtn').click(function () {
    // Check form criteria

    // get form data
    const taskData = {
      title: title.val().trim(),
      description: description.val().trim(),
      bid_end_time: bid_end_time.val().trim(),
      task_start: task_start.val().trim(),
      category: category.val().trim(),
      location: location.val().trim(),
      initial_price: initial_price.val().trim()
    };
    console.log(taskData);

    $.ajax({
      method: "POST",
      url: "/api/task/new",
      data: taskData
    }).then(function (err, data) {
      if (err) throw err;
      console.log("LOOK AT ME")
      console.log(data)
      alert("Your new task has been created")
      window.location.href = "/api/task";
    })
  })
})