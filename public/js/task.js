$(function () {
  let sessionUserId;
    if (localStorage.getItem('id') !== null) {
    sessionUserId = JSON.parse(localStorage.getItem('id'));
    console.log('UserId: ' + sessionUserId);
    $(".userPageLink").attr("href", `/user/${sessionUserId}`)
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

  // if this task does not belong to this owner add bid options
  if (sessionUserId !== $(".taskUserId").attr("value")) {
    $(".insertOptions").append(`<label for="bid">What's your bid?</label>
    <input type="number" name="bid" id="bid" class="input-box" placeholder="100.00">
    <div class="input-group bid">
    </div>
    <button type="submit" class="btn btn-reverse" id="submitBtn"> Submit
    </button>`);

  } else {
    // add bidder data
    let taskId = $(".taskId").attr("value");
    console.log("taskId: " + taskId);

    $.ajax({
      method: "GET",
      url: `/api/bid/bytask/${taskId}`,
      success: function (data) {
        console.log(data);
        // if no bids display note in red
        if (!data) {
          console.log("There are no bids at this time");
          $(".insertOptions").append(`<p>There are no bids at this time</p>`);
        } else {
          // display all bids and accept buttons
          for (let i = 0; i < data.length; i++) {
            $(".insertOptions").append(`<div class="row"><div class="col m6"><p class="note1" style="color: red;">Bid ${i}: $${data[i].bid_price.toFixed(2)} </p></div><div  class="col m6">     <button type="submit" class="btn btn-reverse acceptBidBtn" value="${data[i].id}"> Accept Bid
            </button></div></div>`);
          }
        }
      },
      error: function (msg) {
        console.log("error on page: " + msg);
      }
    })
  }

  // Accept this bid
  $(".acceptBidBtn").click(function () {
    console.log($(this).val());
    
  })

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