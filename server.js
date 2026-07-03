const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("frontend"))

app.listen(port,function(){
    console.log("Successfully Running at http://Localhost:" + port);
});
