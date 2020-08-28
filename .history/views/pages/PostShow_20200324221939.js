import Utils        from './../../services/Utils.js'
import myObj        from './../../services/api.js'

let newArr = [];

let PostShow = {

    

    render : async () => {
        let request = Utils.parseRequestURL()

        let mydata = myObj[request.id];

        newArr = mydata.coord.split(' ');
        console.log(newArr[1].slice(0, newArr[0].length - 1));

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
                coordinates: [-77.032, 38.913]
              },
              properties: {
                title: 'Mapbox',
                description: 'Washington, D.C.'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-122.414, 37.776]
              },
              properties: {
                title: 'Mapbox',
                description: 'San Francisco, California'
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
            .addTo(map);
        });

        
    }
}

export default PostShow;