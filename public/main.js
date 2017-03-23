console.log('in main.js');

$('#hideshow').toggle(function () {
  $('#hideshow').text('show');
}, function () {
  $('#hideshow').text('hide');
});
