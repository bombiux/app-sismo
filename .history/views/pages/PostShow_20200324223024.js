import Utils        from './../../services/Utils.js'
import myObj        from './../../services/api.js'

let newArr = [];

let PostShow = {

    

    render : async () => {
        let request = Utils.parseRequestURL()

        let mydata = myObj[request.id];

        newArr = mydata.coord.split(' ');

        mapboxgl.accessToken = 'pk.eyJ1IjoibWVjYXRlc2wiLCJhIjoiY2lsbjd4YzdnMDJuY3Rya25jZzNjbTlrcyJ9.eagv4xn1J8XMTl7vThCvBQ';
        
        return /*html*/`
            <div id='map'></div>
            <section class="section">
                <h1> Post Id : ${mydata.id}</h1>
                <p> Post Title : ${mydata.dir} </p>
                <p> Post Content : ${mydata.fecha} </p>
                <p> Post Author : ${mydata.coord} </p>
            </section>
        `
    }
    , after_render: async () => {
        
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-newArr[1].slice(0, newArr[0].length - 1), newArr[0].slice(0, newArr[0].length - 1)],
            zoom: 3
        });
        
        var geojson = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-newArr[1].slice(0, newArr[0].length - 1), newArr[0].slice(0, newArr[0].length - 1)]
                },
                properties: {
                    title: 'Mapbox',
                    description: 'Washington, D.C.'
                }
            }]
        };
        
        geojson.features.forEach(function(marker) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';
            
            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                .addTo(map);                
        });

        

    }
}

export default PostShow;