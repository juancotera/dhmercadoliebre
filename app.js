let express = require('express');
let app  = express();

app.listen(3000, console.log('esto fue exitoso'));
app.get('/', function(rew, res){
  res.send('Bienvenidos al sitio');
});