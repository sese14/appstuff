
var button = document.getElementById('button')


button.addEventListener('click', function ()
{    var x = document.getElementById("foo")

    if (x.style.display === 'none'){
        x.style.display = 'block';
    } 
    else x.style.display = 'none';
})


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " active";
  }







// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 54.913185, lng:  9.779275};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  