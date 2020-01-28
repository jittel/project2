$(function () {
    //snag username and password from page
    const username = $('#username');
    const password = $('#password');

    // Form check variables
    const formCheck = [false, false]

    $('#loginForm').on('submit', event => {
        event.preventDefault();
        const ajaxObj = {
          username: $("input[name=username]").val(),
          password: $("input[name=password]").val()
        }
        $.post('/auth/login', ajaxObj).then(data => {
          console.log(data);
          data.loggedIn ? alert("logged in, redirect plz") : alert('failed to loggin');
          // save the user id to local storage
          var id = data.id;
          localStorage.setItem("id", JSON.stringify(id));
          window.location.href = "/";
        })
      })


    // Check username on focus change
    username.focusout(function () {
        checkUsername();
    });
    // Check password on focus change
    password.focusout(function () {
        checkPassword();
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

            if (data) {
                formCheck[0] = true;
                // console.log("this username available");
                $("#note1").remove();
            } else {
                // console.log("this username is taken");
                $("#note1").remove();
                $(".username").append(`<p class="note1" style="color: red;">* this username does not exist</p>`);
            };
        })
    };
})
