const express = require('express');
const app  = express();
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')))

// app.listen(3030, console.log('Servidor corriendo en el puerto 3030.'));
const port = process.env.PORT || 3001;
app.listen(port,() => console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', (req, res) => {
  let htmlPath = path.resolve(__dirname, './views/index.html');
  res.sendfile(htmlPath);
});

app.get('/register', (req, res) => {
  let htmlPath = path.join(__dirname, './views/register.html');
  res.sendfile(htmlPath);
});

app.get('/login', (req, res) => {
  let htmlPath = path.join(__dirname, './views/login.html');
  res.sendfile(htmlPath);
});