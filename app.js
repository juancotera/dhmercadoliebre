const express = require('express');
const app  = express();
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(3000, console.log('esto fue exitoso'));

app.get('/', (req, res) => {
  let htmlPath = path.resolve(__dirname, './views/index.html');
  res.sendfile(htmlPath);
});
