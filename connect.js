var Firebird = require('node-firebird');
var options = {};

const connect_fire = function(){
options.host = 'localhost';
options.port = 3050;
options.database = 'EMPLOYEE.fdb';
options.user = 'SYSDBA';
options.password = 'masterkey';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;

}

if(connect_fire){
    console.log('Conexão realizada com sucesso!')
}else{
    console.log("Error - Conexão não realizada")
}
