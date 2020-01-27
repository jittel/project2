$(function () {
    //snag username and password from page
    const username = $('#username');
    const password = $('#password');

    // Form check variables
    const formCheck = [false, false]

    // $("#login").on("click", function (event) {
    //     event.preventDefault();

    //     // Check form criteria
    //     if (formCheck.includes(false)) {
    //         checkUsername();
    //         checkPassword();
    //         console.log(formCheck);
    //     } else {
    //         const userData = {
    //             username: username.val().trim(),
    //             password: password.val().trim(),
    //             email: email.val().trim(),
    //         };



    //         //make sure theyre right
    //         //snag user id, save to local storage
    //         //redirect to new page
    //         $.ajax({
    //             type: "POST",
    //             url: "/api/user/new",
    //             data: userData,

    //             success: function (data) {
    //                 console.log(data);
    //                 console.log("success");
    //                 alert("Your new account has been created");
    //                 window.location.href = "/user";
    //             },
    //             error: function (msg) {
    //                 console.log("error on page");
    //             }
    //         });
    //     }
    // })

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

    // Check password functions to be called when user enters value and when submit button is pressed
//     function checkPassword() {
//         // const passArr = password.map();
//         if (password.val().trim().length >= 8) {
//             formCheck[1] = true;
//             console.log("the password is valid");
//             $("#note2").remove();
//         } else {
//             formCheck[1] = false;
//             console.log("the password is invalid");
//             $("#note2").remove();
//             $(".password").append(`<p class="note2" style="color: red;">* password must be 8-128 characters with lower/uppercase letters, numbers, and special characters</p>`);
//         };
//     };
// })
})
