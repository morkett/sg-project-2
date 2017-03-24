$(document).ready(function() {
  $('#form-user').hide();

  // GET/READ
  $('#get-button').on('click', function () {
    $.ajax({
      url: '/users',
      contentType: 'application/json',
      success: function (res) {
        console.log(res);
        $('#form-user').show();
        // console.log(res);

      }
    });
  });
});
