 function run() {
    function makeAjaxRequest() {
        return $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/xml?address=Orlando,+FL&key=AIzaSyBcux9F35FJjf_6kpJtADXPnM3iP_Z9FY8',
            dataType: 'json',
        });
    }


    var promise = makeAjaxRequest()
    promise.then(function(response) {
        var lat = response.results[0].geometry.location.lat
        var lng = response.results[0].geometry.location.lng
        console.log(lat)
        console.log(lng)
    })
}
