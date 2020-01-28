$(function () {
  let sessionUserId;
  if (localStorage.getItem('id') !== null) {
    sessionUserId = JSON.parse(localStorage.getItem('id'));
    console.log('UserId: ' + sessionUserId);
    $(".userPageLink").attr("href", `/user/${sessionUserId}`)
  }
  
  // // If logged in set link to log out/ if logged out set link to log in
  // if (!sessionUserId) {
  //   $(".loginLink").attr("href", "/login")
  //   $(".loginLink").text("Login")
  //   console.log("login");
  // } else {
  //   $(".loginLink").remove();
  //   $(".loginLink").attr("href", "/logout")
  //   $(".loginLink").text("Logout")
  //   // console.log("logout");
  // }
  
  // Task card click function to load task page
  $(".tasks").on("click", function () {
    const id = $(this).data("id");

    window.location.href = "/task/" + id;
  })

  // Search by category 
  $(".category").on("click", function () {
    const category = $(this).text();
    window.location.href = "/" + category;
  })

//sign up function
  // signup").on("click", function () {
  //   const id=$(this).data("id");

  //   window.location.href = "/signup/" + id;
 });
