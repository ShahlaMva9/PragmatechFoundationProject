$(function () {
  $("#aboutMe").click(function (event) {
    event.stopPropagation();
    console.log("item321312", event.target);
  });
});
