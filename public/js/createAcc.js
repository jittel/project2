
$(function () {
 // jquery variables
  const username = $('#username');
  const password = $('#password');
  const email = $('#email');

  // Form check variables
  const usernameUniqueCheck = false;
  const passwordLengthCheck = false;
  const passwordCharsCheck = false;
  const emailCheck = false;
    
  // Submit form on submit button click
  $('#submitBtn').click(function () {
    // Check form criteria
    
    // get form data
    const userData = {
      username: username.val().trim(),
      password: password.val().trim(),
      email: email.val().trim(),
      };
    console.log(userData);

    $.ajax({
      method: "POST",
      url: "/api/user/new",
      data: userData
    }).then(function (err, data) {
      if (err) throw err;
      // window.location.href = "/user";
      console.log(data)
    })
  })


  
  password.on('change keyup paste mouseup', function() {
      if ($(this).val() != lastValue) {
          lastValue = $(this).val();
          console.log('The text box really changed this time');
      }
  });
  // const usernameUnique = false;
  // const passwordLength = false;
  // const passwordChars = false;
  // const email = false;
})