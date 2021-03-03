import $ from "jquery";

$(function () {
  $("input, select").on("focus", function () {
    $(this).parent().find(".input-group-text").css("border-color", "red");
  });
  $("input, select").on("blur", function () {
    $(this).parent().find(".input-group-text").css("border-color", "black");
  });
});


