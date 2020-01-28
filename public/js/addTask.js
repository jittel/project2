$(function () {
  // Get user id out of local storage
  let sessionUserId = "";
  if (localStorage.getItem('id') !== null) {
    sessionUserId = JSON.parse(localStorage.getItem('id'));
    console.log('UserId: ' + sessionUserId);
  }

  // jquery variables
  const title = $('#title');
  const description = $('#description');
  const bid_end_time = $('#bid_end_time');
  const task_start = $('#task_start');
  const category = $('#category');
  const location = $('#location');
  const initial_price = $('#task_price');
  var imgURL;

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
        var id = data.id;
        alert("Your new task has been created")
        window.location.href = `/task/${id}`;
      },
      error: function (msg) {
        console.log("error on page");
      }
    })
  })

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/delw6elgw/upload"
  const CLOUDINARY_UPLOAD_PRESET = "r6mprs9r"

  var fileUpload = document.getElementById("file-upload");

  fileUpload.addEventListener("change", function (event) {
    var file = event.target.files[0];
    var formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then(function (res) {
      // console.log(res.data.url)
      imgURL = res.data.url;
      console.log(imgURL)
      alert("your image has been uploaded!")
    }).catch(function (err) {
      console.error(err)
    })
  })
})