#!/usr/bin/node
// Only execute when DOM is loaded
// Store Amenity, if checked
// Remove Amenity if box is unchecked.
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
    let list = Object.values(amenities).join(', '); // Changed variable name here
    $('.amenities h4').text(list); // Use 'list' instead of 'amenityList'
  }
});
