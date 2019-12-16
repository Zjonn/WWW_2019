var form;

$(document).ready(function() {
  $("#create-user").click(function() {
    dial_trigger_create();
  });

  $("#rm_button").click(function() {
    dial_trigger_del($(this));
  });
});

function dial_trigger_del(context) {
  $("#dialog-confirm").dialog({
    resizable: false,
    height: "auto",
    width: 200,
    modal: true,
    buttons: {
      "Delete row": function() {
        context.closest("tr").remove();
        $(this).dialog("close");
      },
      Cancel: function() {
        $(this).dialog("close");
      }
    }
  });
}

function dial_trigger_create() {
  dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
    //   "Create an account": create_user,
      Cancel: function() {
        $(this).dialog("close");
      }
    },
    close: function() {
      form[0].reset();
    }
  });
}

function create_user() {

  $("#users > tbody:last-child").append(
    "<tr>" +
      "<td>" +
      user[0] +
      "</td>" +
      "<td>" +
      user[1] +
      "</td>" +
      "<td>" +
      user[2] +
      "</td>" +
      "<td>" +
      user[3] +
      "</td>" +
      '<td><button class="rm_button">Remove</button></td>' +
      "</tr>"
  );
}
