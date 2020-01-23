$(document).ready(function () {
  // blogContainer holds all of our Tasks
  var taskCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  taskCategorySelect.on("change", handleCategoryChange);
  var Tasks;

  // This function grabs tasks from the database and updates the view
  function getTasks(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/tasks" + categoryString, function (data) {
      console.log("tasks", data);
      tasks = data;
      if (!tasks || !tasks.length) {
        displayEmpty();
      } else {
        initializeRows();
      }
    });
  }

  // Getting the initial list of Tasks
  getTasks();
  
  // InitializeRows handles appending all of our constructed Task HTML inside
  // taskContainer
  function initializeRows() {
    taskContainer.empty();
    var tasksToAdd = [];
    for (var i = 0; i < tasks.length; i++) {
      tasksToAdd.push(createNewRow(tasks[i]));
    }
    taskContainer.append(tasksToAdd);
  }

  // This function constructs a Task's HTML
  // function createNewRow(Task) {
  //   var newTaskCard = $("<div>");
  //   newTaskCard.addClass("card");
  //   var newTaskCardHeading = $("<div>");
  //   newTaskCardHeading.addClass("card-header");
  //   var deleteBtn = $("<button>");
  //   deleteBtn.text("x");
  //   deleteBtn.addClass("delete btn btn-danger");
  //   var editBtn = $("<button>");
  //   editBtn.text("EDIT");
  //   editBtn.addClass("edit btn btn-default");
  //   var newTaskTitle = $("<h2>");
  //   var newTaskDate = $("<small>");
  //   var newTaskCategory = $("<h5>");
  //   newTaskCategory.text(Task.category);
  //   newTaskCategory.css({
  //     float: "right",
  //     "font-weight": "700",
  //     "margin-top": "-15px"
  //   });
  //   var newTaskCardBody = $("<div>");
  //   newTaskCardBody.addClass("card-body");
  //   var newTaskBody = $("<p>");
  //   newTaskTitle.text(Task.title + " ");
  //   newTaskBody.text(Task.body);
  //   var formattedDate = new Date(Task.createdAt);
  //   formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
  //   newTaskDate.text(formattedDate);
  //   newTaskTitle.append(newTaskDate);
  //   newTaskCardHeading.append(deleteBtn);
  //   newTaskCardHeading.append(editBtn);
  //   newTaskCardHeading.append(newTaskTitle);
  //   newTaskCardHeading.append(newTaskCategory);
  //   newTaskCardBody.append(newTaskBody);
  //   newTaskCard.append(newTaskCardHeading);
  //   newTaskCard.append(newTaskCardBody);
  //   newTaskCard.data("Task", Task);
  //   return newTaskCard;
  // }

  
  // This function displays a message when there are no Tasks
  function displayEmpty() {
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({
      "text-align": "center",
      "margin-top": "50px"
    });
    messageH2.html("No Tasks yet for this category, navigate <a href='/cms'>here</a> in order to create a new Task.");
    blogContainer.append(messageH2);
  }

  // This function handles reloading new Tasks when the category changes
  function handleCategoryChange() {
    var newTaskCategory = $(this).val();
    getTasks(newTaskCategory);
  }
});