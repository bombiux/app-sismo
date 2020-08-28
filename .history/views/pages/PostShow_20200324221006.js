import Utils        from './../../services/Utils.js'
import myObj        from './../../services/api.js'

let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}


let PostShow = {
    
    render : async () => {
        let request = Utils.parseRequestURL()

        let mydata = myObj[request.id];

        let newArr = mydata.coord.split(' ');
        console.log(newArr[0].slice(0, newArr.));

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
            center: [-87.429, 12.238],
            zoom: 3
        });
    }
}

export default PostShow;