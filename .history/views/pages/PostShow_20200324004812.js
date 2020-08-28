import Utils        from './../../services/Utils.js'


    $.ajaxSetup({

        scriptCharset: "utf-8",
        
        contentType: "application/json; charset=utf-8"
    
    });
    
    let myObj = [];
    
    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('https://webserver2.ineter.gob.ni/geofisica/sis/events/sismos.php') + '&callback=?',
    
        function(data) {
    
            data = data.contents;
            
            data = $('pre', data);
    
            let count = 0;
    
            for (let el of data) {
                if (el.innerText.slice(-9) == 'Nicaragua') {
                    
                    el = el.innerText.split(' ');
                    
                    el = el.filter(function (el) {
                        return el != '';
                    })
                    
                    let tempObj = {};
    
                    tempObj.id = count;
                    count++;
    
                    tempObj.fecha = el[0] + ' ' + el[1];
    
                    tempObj.coord = el[2] + ' ' + el[3];
                    
                    tempObj.prof = el[4];
    
                    tempObj.magn = el[5];
    
                    tempObj.dir = el.slice(7, el.length).join(' ');
    
                    myObj.push(tempObj);
                    
                }
            }
    
        });

let PostShow = {

    render : async () => {
        console.log(myObj);
        let request = Utils.parseRequestURL();
        let toReq = myObj.id;
        let post = request.toReq;
        
        return /*html*/`
            <section class="section">
                <h1> Post Id : ${post.id}</h1>
                <p> Post Title : ${post.fecha} </p>
                <p> Post Content : ${post.coord} </p>
                <p> Post Author : ${post.magn} </p>
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostShow;