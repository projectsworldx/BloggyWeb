require('dotenv').config();
const express = require('express');
const app = express();
const uiport =  process.env.UI_SERVER_PORT || 8003;

app.use(express.static('public'));
app.listen(8002, function(){
    console.log(`UI started on port ${uiport}`); //${port}
});