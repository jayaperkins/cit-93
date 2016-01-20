// Place your code here to find the location of the user and to display a
// Google Map with a marker to show the user's location.  Feel free to add
// more markers or stylize the map to your preferences.

    var loc = document.getElementById('loc');
    var msg = "Can't find location at this time.";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
        loc.textContent = 'Finding location...';
    } else {
        loc.textContent = msg;
    }

    function success(pos) {

        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;

        msg = '<p>Latitude: ' + lat + '</p>';
        msg += '<p>Longitude: ' + long + '</p>';
        loc.innerHTML = msg;

        var mapOptions = {
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 16
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            map: map,
            icon: 'images/cheese.png'
        });

    }

    function fail(err) {

        loc.textContent = msg;
        console.log(err.code);

        var mapOptions = {
            center: new google.maps.LatLng(48.8582, 2.2945),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 16
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(48.8582, 2.2945),
            map: map,
            icon: 'images/staring.png'
        });
    }


function loadScript() {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=init";
    document.head.appendChild(script);
}

window.onload = loadScript;

