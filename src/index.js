//importando rutas 
const CustomerRutas =  require('./rutas/customer');

const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const mysql = require('mysql');
const mysqlConnection = require('express-myconnection');

//ajustes

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'))

//middlewares 
app.use(morgan('dev'));
app.use(mysqlConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'Yeiglo20@',
    port: 3306,
    database: 'doctorado',
},'single'));
//rutas

app.use('/',CustomerRutas);

//archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
});
