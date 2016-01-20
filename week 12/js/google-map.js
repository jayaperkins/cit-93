// Place your code here to find the location of the user and to display a
// Google Map with a marker to show the user's location.  Feel free to add
// more markers or stylize the map to your preferences.
function init() {

    navigator.geolocation.getCurrentPosition(success, fail);

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

        try {

            if (err.code === 1) {
                console.log('User has rejected location services.');
            }
            else {
                console.log('Browser cannot locate user...')
            }
        }

        catch (e) {
            console.error(e.message);
        }
    }
}

function loadScript() {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=init";
    document.head.appendChild(script);
}

loadScript();






