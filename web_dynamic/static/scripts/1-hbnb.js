<<<<<<< HEAD
$(document).ready(function() {
  let listOfCheckedAmenities = [];
=======
<head>
    <!-- Importing jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    <!-- Importing the 1-hbnb.js script -->
    <script src="static/scripts/1-hbnb.js" type="text/javascript"></script>
</head>
>>>>>>> a7bbe0b52144ceed4bd91e22caf66cc1245f15ad

  $('li :checkbox').change( function () {
    const dataName = $(this).attr("data-name");

    if (this.checked) {
      listOfCheckedAmenities.push(dataName);
    } else {
      listOfCheckedAmenities = listOfCheckedAmenities.filter((item) => item !== dataName);
    }
    $('div.amenities h4').text(listOfCheckedAmenities.join(', '));
  });
});