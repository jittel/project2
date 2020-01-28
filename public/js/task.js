$(function () {
  let sessionUserId;
  if (localStorage.getItem('id') !== null) {
    sessionUserId = JSON.parse(localStorage.getItem('id'));
    console.log('UserId: ' + sessionUserId);
    $(".userPageLink").attr("href", `sessionUserId${sessionUserId}`)
  }
  
  // If logged in set link to log out/ if logged out set link to log in
  if (sessionUserId) {
    $(".loginLink").attr("href", "/login");
    $(".loginLink").text("Login");
    console.log("login");
  } else {
    $(".loginLink").remove();
    // $(".loginLink").attr("href", "/logout")
    // $(".loginLink").text("Logout")
    // console.log("logout");
  }
  
  if (sessionUserId !== $(".taskUserId").attr("value")) {
    $(".insertOptions").append(`<label for="bid">What's your bid?</label>
    <input type="number" name="bid" id="bid" class="input-box" placeholder="100.00">
    <div class="input-group bid">
    </div>
    <button type="submit" class="btn btn-reverse" id="submitBtn"> Submit
    </button>`);
  } else {
    $(".insertOptions").append(`<label for="bid">What's your bid?</label>
    <input type="number" name="bid" id="bid" class="input-box" placeholder="100.00">
    <div class="input-group bid">
    </div>
    <button type="submit" class="btn btn-reverse" id="submitBtn"> Submit
    </button>`);
  }


  // Submit form on submit button click
  $('#submitBtn').click(function () {
    
    // get form data
    const userData = {
      bid_price: $("#bid").val().trim(),
      // This is the user ID of the task
      UserId: sessionUserId,
      TaskId: $(".taskId").attr("value")
    };
    console.log(userData);
    
    if (userData.bid_price > 0) {
      $.ajax({
        type: "POST",
        url: "/api/bid/new",
        data: userData,
        
        success: function (data) {
          console.log(data);
          console.log("success");
          alert("Your bid has been created");
          window.location.href = `/user${sessionUserId}`;
        },
        error: function (msg) {
          console.log("error on page: " + msg);
        }
      });
    } else {
      alert("You must enter a bid")
    }
  })
})