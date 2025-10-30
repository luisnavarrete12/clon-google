const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (Html,css,js,imagenes)
app.use(express.static(path.join(__dirname, 'html')));

// Ruta principal
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'html/index.html'))
})

//  Iniciar servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})