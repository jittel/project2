$(function () {
  // Submit form on submit button click


  $('#submitBtn').click(function () {
    
    // get form data
    const userData = {
      bid_price: $("#bid").val().trim(),
      UserId: $(".taskUserId").attr("value")
    };

    if (userData.bid_price > 0) {
      
      $.ajax({
        type: "POST",
        url: "/api/user/new",
        data: userData,
        
        success: function (data) {
          console.log(data);
          console.log("success");
          alert("Your new account has been created");
          window.location.href = "/user";
        },
        error: function (msg) {
          console.log("error on page: " + msg);
        }
      });
    }
  })
})