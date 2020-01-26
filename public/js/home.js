$(function () {
  
  
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
