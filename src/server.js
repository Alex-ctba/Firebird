const express = require('express');
const app = express()
var fb = require("node-firebird");                           

const connect = {};

connect.host = '127.0.0.1';
connect.port = 3050;
connect.database = 'BD';
connect.user = 'SYSDBA';
connect.password = 'masterkey';
connect.lowercase_keys = false; // set to true to lowercase keys
connect.role = null;            // default
connect.pageSize = 4096;  

fb.attach(connect, function(err, db) {
 
    if (err)
        throw err;
 
 
    db.query('SELECT * FROM department', function(err, result) {
        console.log(result)
        db.detach();
    });
 
});

app.listen(3000, ()=>{
    console.log('🚀 server Online...')
})
