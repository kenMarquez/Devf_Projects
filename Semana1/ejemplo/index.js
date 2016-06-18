/**
 * Created by Ken on 17/06/16.
 */

const Promise = require("bluebird");

var fs = Promise.promisifyAll(require("fs"));

var info = fs.readFileAsync("hola.txt", "utf8")
    .then(function(data) {
        console.log('Soy promesa:');

        data = data + 'Ken!'

        return data;
    })
    .then(function (para) {
        throw 'Soy un error'
        
        return [para, 'hola']
    })
    .spread(function (para1, para2) {
        console.log(para1, para2)
        
        return res.(200, { data: data, nombre: name})
    })
    .catch(function (err) {
        console.log(err);
        
        return res.(404)
    });

console.log(info)