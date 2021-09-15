const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(8002, function(){
    console.log(`UI started on port 8002`); //${port}
});