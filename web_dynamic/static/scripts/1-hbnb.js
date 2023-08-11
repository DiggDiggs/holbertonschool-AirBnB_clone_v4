<head>
    <!-- Importing jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    <!-- Importing the 1-hbnb.js script -->
    <script src="static/scripts/1-hbnb.js" type="text/javascript"></script>
</head>

$(document).ready(function () {
    // Dictionary to store the checked amenities
    let checkedAmenities = {};
  
    // Listen for changes on input checkboxes
    $('input[type="checkbox"]').change(function () {
      // Check if checkbox is checked
      if ($(this).is(':checked')) {
        // Add amenity to the dictionary with id as the key
        checkedAmenities[$(this).data('id')] = $(this).data('name');
      } else {
        // Remove amenity from the dictionary
        delete checkedAmenities[$(this).data('id')];
      }
      // Update the h4 tag with the list of checked amenities
      let amenityNames = Object.values(checkedAmenities);
      $('div.amenities h4').text(amenityNames.join(', '));
    });
  });
  