$(function () {
  // jquery variables
  const title = $('#title');
  const description = $('#description');
  const bid_end_time = $('#bid_end_time');
  const task_start = $('#task_start');
  const category = $('#category');
  const location = $('#location');
  const initial_price = $('#task_price');

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
    // console.log(taskData);

    $.ajax({
      method: "POST",
      url: "/api/task/new",
      data: taskData,
      success: function (data) {
        console.log(data);
        console.log("success");
        alert("Your new task has been created")
        window.location.href = "/task";
      },
      error: function (msg) {
        console.log("error on page");
      }
    })
  })
  // $('select').formSelect();
})