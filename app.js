function initMap(){
    const lat_lng = new google.maps.LatLng(24.863531596277493, 67.07438200674729)

    const mymap = new google.maps.Map(document.getElementById("map"),{

        center : lat_lng,
        zoom : 10,
        type : 'satellite'
    })

    const mark = new google.maps.Marker({

        position : lat_lng,
        map : mymap,
        title : 'aptech SFC'
    })
}