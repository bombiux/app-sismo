import Utils        from './../../services/Utils.js'
import myObj        from './../../services/api.js'

let PostShow = {
    let newArr = []
    render : async () => {
        let request = Utils.parseRequestURL()

        let mydata = myObj[request.id];

        let newArr = mydata.coord.split(' ');
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
            center: [-87.429, newArr[0].slice(0, newArr[0].length - 1)],
            zoom: 3
        });
    }
}

export default PostShow;