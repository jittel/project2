$(function () {
  // jquery variables
  const username = $('#username');
  const password = $('#password');
  const rePassword = $('#rePassword');
  const email = $('#email');
  // const passCryt = $("#pass-cryteria");

  // Form check variables
  const formCheck = [false, false, false, false];

  // Submit form on submit button click
  $('#submitBtn').click(function () {
    // Check form criteria
    if (formCheck.includes(false)) {
      checkUsername();
      checkEmail();
      checkPassword();
      checkPasswordMatch();
      console.log(formCheck);
    } else {
      // get form data
      const userData = {
        username: username.val().trim(),
        password: password.val().trim(),
        email: email.val().trim(),
      };

      $.ajax({
        type: "POST",
        url: "/api/user/new",
        data: userData,

        success: function (data) {
          console.log(data);
          // save the user id to local storage
          var id = data.id;
          localStorage.setItem("id", JSON.stringify(id));

          console.log("success");
          alert("Your new account has been created");
          window.location.href = "/";
        },
        error: function (msg) {
          console.log("error on page: " + msg);
        }
      });
    }
  })

  // Check email on focus change
  email.focusout(function () {
    if (email.val().trim().length > 0) {
      checkEmail();
    }
  });
  // Check username on focus change
  username.focusout(function () {
    if (username.val().trim().length > 0) {
      checkUsername();
    }
  });
  // Check password on focus change
  password.focusout(function () {
    if (password.val().trim().length > 0) {
      checkPassword();
    }
  });
  // Check password match on focus change
  rePassword.focusout(function () {
    if (rePassword.val().trim().length > 0) {
      checkPasswordMatch();
    }
  });

  // Check username functions to be called when user enters value and when submit button is pressed

  function checkUsername() {
    const thisUsername = username.val().trim();
    console.log(thisUsername);
    $(".note1").remove();
    if (thisUsername.length > 5) {
      $.ajax({
        method: "GET",
        url: `/api/user/${thisUsername}`,
        // data: userData
        success: function (data) {
          // if (err) throw err;
          console.log(data)
          if (data === null) {
            formCheck[0] = true;
            console.log("this username available");
          } else {
            formCheck[0] = false;
            console.log("this username is taken");
            $(".username").append(`<p class="note1" style="color: red;">* this username is already taken</p>`);
          }
        },
        error: function (msg) {
          console.log("error on page: " + msg);
        }
      })
    } else {
      formCheck[0] = false;
      console.log("the username must be at least 5 characters long");
      $(".username").append(`<p class="note1" style="color: red;">* the username must be at least 5 characters long</p>`);
    }
  }


  // Check password functions to be called when user enters value and when submit button is pressed
  function checkPassword() {
    $(".note2").remove();
    // const passArr = password.map();
    if (password.val().trim().length >= 8) {
      formCheck[1] = true;
      // console.log("the password is valid");
    } else {
      formCheck[1] = false;
      console.log("the password is invalid");
      $(".password").append(`<p class="note2" style="color: red;">* password must be 8-128 characters with lower/uppercase letters, numbers, and special characters</p>`);
    };
  };

  // Check password match functions to be called when user enters value and when submit button is pressed
  function checkPasswordMatch() {
    $(".note3").remove();
    if (rePassword.val().trim() === password.val().trim()) {
      formCheck[2] = true;
      // console.log("passwords match");
    } else {
      formCheck[2] = false;
      console.log("the passwords do not match");
      $(".rePassword").append(`<p class="note3" style="color: red;">* passwords do not match</p>`);
    };
  };

  // Check email functions to be called when user enters value and when submit button is pressed
  function checkEmail() {
    $(".note4").remove();
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.val().trim())) {
      // console.log("email is valid");
      formCheck[3] = true;
    } else {
      formCheck[3] = false;
      console.log("email is invalid");
      $(".email").append(`<p class="note4" style="color: red;">* this email is invalid. example: name@company.com</p>`);
    }
  }

})