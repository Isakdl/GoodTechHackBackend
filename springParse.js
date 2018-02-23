var data = null;
var http = require('http');

function get_json(url, callback) {
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
            callback(response);
        });
    });
}


get_json("http://resource.sgu.se/oppnadata/data/grundvatten/kallor/kallor.json", (resp)=> {
    mutation{
      createSpring{
        id: id ,
        namn: name,
        kommunkod: kommunkod,
        lagesnoggrannhet:lagesnoggrannhet,
        kalltyp: kalltyp,
        akvifertyp: akvifertyp,
        registrerad_datum:registrerad_datum,
        observationsdatum: observationsdatum,
        temp: temp,
        matt_flode: matt_flode,
        bedomt_flode: bedomt_flode,
        ph: properties.ph,
        ledningsformaga: ledningsformaga,
        notering: notering
      }
    }
})
