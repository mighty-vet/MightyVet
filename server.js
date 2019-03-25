const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist/public/')));

require('./server/accreditations/routes')(app);
require('./server/users/routes')(app);
require('./server/meetings/routes')(app);
require('./server/webinars/routes')(app);
require('./server/mentees/routes')(app);
require('./server/mentors/routes')(app);
require('./server/mentorsearches/routes')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})