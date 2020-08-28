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

                tempObj.id = count.toString();
                count++;

                tempObj.fecha = el[0] + ' ' + el[1];

                tempObj.coord = el[2] + ' ' + el[3];
                
                tempObj.prof = el[4];

                tempObj.magn = el[5];

                tempObj.dir = el.slice(7, el.length - 1).join(' ').slice(0, length - 1);

                myObj.push(tempObj);
                
            }
        }

    });

    export default myObj;