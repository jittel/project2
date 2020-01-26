$(function () {
  // jquery variables
  const username = $('#username');
  const password = $('#password');
  const rePassword = $('#rePassword');
  const email = $('#email');
  const passCryt = $("#pass-cryteria");

  // Form check variables
  const formCheck = [false,false,false,false];

  // Submit form on submit button click
  $('#submitBtn').click(function () {
    // Check form criteria
    checkUsername();
    checkEmail();
    checkPassword();
    checkPasswordMatch();
    if (!formCheck.includes(false)) {
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
      
    }
  })

  // let lastValue = '';
  // // Check email on focus change
  // email.on('change paste mouseup', function () {
  //   if (email.val().trim() != lastValue) {
  //     lastValue = email.val().trim();
  //     // checkEmail();
  //     console.log("email is being checked");
  //   }
  // });
  //   // Check username on focus change
  // username.on('change paste mouseup', function () {
  //   if (username.val().trim() != lastValue) {
  //     lastValue = username.val().trim();
  //     checkUsername();
  //     console.log("username is being checked");
  //   }
  // });
  //   // Check password on focus change
  // password.on('change paste mouseup', function () {
  //   if (password.val().trim() != lastValue) {
  //     lastValue = password.val().trim();
  //     checkPassword();
  //     console.log("password is being checked");
  //   }
  // });
  //   // Check password match on focus change
  // rePassword.on('change paste mouseup', function () {
  //   if (rePassword.val().trim() != lastValue) {
  //     lastValue = rePassword.val().trim();
  //     console.log("password match is being checked");
  //     checkPasswordMatch();
  //   }
  // });

  // Check username functions to be called when user enters value and when submit button is pressed
    function checkUsername() {
    const thisUsername = username.val().trim();
    console.log(thisUsername);
    
    $.ajax({
      method: "GET",
      url: `/api/user/${thisUsername}`
      // data: userData
    }).then(function (response) {
      // if (err) throw err;
      console.log(response)

      // if (username.val().trim() === data.username) {
        
      formCheck[0] = true;
      // } else {
      //   username.append(`<p style="color: red;" id="note1">This username is taken.</p>`)
      // };
    })
  };

  // Check password functions to be called when user enters value and when submit button is pressed
  function checkPassword() {
    // const passArr = password.map();
    if (password.val().trim().length >= 8) {
      formCheck[1] = true;
      passCryt.removeAttr("style")
    } else {
      alert("your password must be at least 8 characters long")
    };
  };

   // Check password match functions to be called when user enters value and when submit button is pressed
  function checkPasswordMatch() {
    if (rePassword.val().trim() === password.val().trim()) {
      formCheck[2] = true;
    } else {
      alert("Your passwords do not match");
    };
  };

  // Check email functions to be called when user enters value and when submit button is pressed
  function checkEmail() {
  //   if (password.val().trim().length >= 8) {
  //     formCheck[3] = true;
  //     $("#note1").remove()
  //   } else {
  //     alert("Your password must be at least 8 characters long");
  //     password.append()
  //   };
  };

})