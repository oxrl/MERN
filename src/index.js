const express = require('express');
const morgan  = require('morgan');
const app = express();


//Settings
const port  = process.env.PORT || 3000;


//Middlewares  **Se ejecutan antes de ejecutar las rutas
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/tasks',require('./routes/task.routes'));


//Static files   *** Aqui es donde van los archivos como imagenes o html,js, css,


//Starting the server
app.listen(port,()=>{
    console.log(`Server on Port ${port}`);
});