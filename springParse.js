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
        id: resp.features.properties.id ,
        namn: resp.features.properties.name,
        kommunkod: resp.features.properties.kommunkod,
        lagesnoggrannhet:resp.features.properties.lagesnoggrannhet,
        kalltyp: resp.features.properties.kalltyp,
        akvifertyp: resp.features.properties.akvifertyp,
        registrerad_datum:resp.features.properties.registrerad_datum,
        observationsdatum: resp.features.properties.observationsdatum,
        temp: resp.features.properties.temp,
        matt_flode: resp.features.properties.matt_flode,
        bedomt_flode: resp.features.properties.bedomt_flode,
        ph: resp.features.properties.ph,
        ledningsformaga: resp.features.properties.ledningsformaga,
        notering: resp.features.properties.notering
      }
    }
})
