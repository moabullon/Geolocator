function run() {
    function makeAjaxRequest() {
        var newLocation = $('#location').val();
        return $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + newLocation + '&key=AIzaSyBcux9F35FJjf_6kpJtADXPnM3iP_Z9FY8',
            dataType: 'json',
        });
    }
    var promise = makeAjaxRequest()
    promise.then(function(response) {
        var latitude = response.results[0].geometry.location.lat
        $("#latcoordinates").html("")
        $("#latcoordinates").append(latitude)
        var longitude = response.results[0].geometry.location.lng
        $("#longcoordinates").html("")
        $("#longcoordinates").append(longitude)
    })
}

