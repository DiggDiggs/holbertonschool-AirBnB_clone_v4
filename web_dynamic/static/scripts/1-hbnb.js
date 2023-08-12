$(document).ready(function() {
  let amenities = {};

  $('.amenities input[type="checkbox"]').change(function() {
    if ($(this).is(':checked')) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    updateAmenitiesList();
  });

  function updateAmenitiesList() {
    let list = Object.values(amenities).join(', ');
    $('.amenities h4').text(list.length > 0 ? list : "\u00A0");
  }
});
