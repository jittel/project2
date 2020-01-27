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
      // console.log(userData);

      $.ajax({
        method: "POST",
        url: "/api/user/new",
        data: userData
      }).then(function (err, data) {
        if (err) throw err;
        console.log(data)
        alert("Your new account has been created")
        window.location.href = "/user";

      })
    }
  })

  // Check email on focus change
  email.focusout(function () {
    checkEmail();
  });
  // Check username on focus change
  username.focusout(function () {
    checkUsername();
  });
  // Check password on focus change
  password.focusout(function () {
    checkPassword();
  });
  // Check password match on focus change
  rePassword.focusout(function () {
    checkPasswordMatch();
  });

  // Check username functions to be called when user enters value and when submit button is pressed
  function checkUsername() {
    const thisUsername = username.val().trim();
    console.log(thisUsername);

    $.ajax({
      method: "GET",
      url: `/api/user/${thisUsername}`
      // data: userData
    }).then(function (data) {
      // if (err) throw err;
      console.log(data)

      if (data === null) {
        formCheck[0] = true;
        console.log("this username available");
        $("#note1").remove();
      } else {
        console.log("this username is taken");
        $("#note1").remove();
      $(".username").append(`<p class="note1" style="color: red;">* this username is already taken</p>`);
      };
    })
  };

  // Check password functions to be called when user enters value and when submit button is pressed
  function checkPassword() {
    // const passArr = password.map();
    if (password.val().trim().length >= 8) {
      formCheck[1] = true;
      console.log("the password is valid");
      $("#note2").remove();
    } else {
      formCheck[1] = false;
      console.log("the password is invalid");
      $("#note2").remove();
      $(".password").append(`<p class="note2" style="color: red;">* password must be 8-128 characters with lower/uppercase letters, numbers, and special characters</p>`);
    };
  };

  // Check password match functions to be called when user enters value and when submit button is pressed
  function checkPasswordMatch() {
    if (rePassword.val().trim() === password.val().trim()) {
      formCheck[2] = true;
      console.log("passwords match");
      $("#note3").remove();
    } else {
      formCheck[2] = false;
      console.log("the passwords do not match");
      $("#note3").remove();
      $(".rePassword").append(`<p class="note3" style="color: red;">* passwords do not match</p>`);
    };
  };

  // Check email functions to be called when user enters value and when submit button is pressed
  function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val().trim())) {
      console.log("email is valid");
      formCheck[3] = true;
      $("#note4").remove();
    } else {
      formCheck[3] = false;
      console.log("email is invalid");
      $("#note4").remove();
      $(".email").append(`<p class="note4" style="color: red;">* this email is invalid. example: name@company.com</p>`);
    }
  }

})