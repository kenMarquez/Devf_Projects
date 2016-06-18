/**
 * Created by Ken on 17/06/16.
 */

var fs = require("fs");

var info = fs.readFile('hola.txt', 'utf8', function (err, data) {
    if (!err) {
        console.log('No hubo error')
    }

    console.log('Esto desde la funcion asincrona', data);
});

var nueva_info = info;

console.log(nueva_info)