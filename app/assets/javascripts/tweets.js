// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log('js linked');
$(document).ready(function() {
  console.log('doc ready');

  $('#new_tweet').on('submit', function(e){
    e.preventDefault();
    console.log('action prevented');

    $.ajax({
      url: $(this).attr('url'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'html'
    }).done(function(response) {
      console.log('return successful');
      console.log(response);
      $('.tweets').prepend(response);
    }).fail( console.log('return unsucessful'))
  })
});
