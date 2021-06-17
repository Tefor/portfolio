const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

//Settings
app.set('port', PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Middlewares    

//Routes
app.use(require('./routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Escuchando en el puerto 3000
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
