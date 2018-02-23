var http = require('http');
// ----receive function----v
function get_json(url, callback) {
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
// call function ----v
            callback(response);
        });
    });
}

         // -----------the url---v         ------------the callback---v
var mydata = get_json("http://resource.sgu.se/oppnadata/data/grundvatten/kallor/kallor.json", function (resp) {
    console.log(resp);
});

// export default async event => {
//   // you can use ES7 with async/await and even TypeScript in your functions :)
//
//   await new Promise(r => setTimeout(r, 50))
//
//   return {
//     data: {
//       message: `Hello ${event.data.name || 'World'}`
//     }
//   }
// }
