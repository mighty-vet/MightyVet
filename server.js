const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

app.use(require('helmet')());

app.use(passport.initialize());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist/public/')));
// require('./server/payments/routes')(app);
require('./server/mentees/routes')(app);
require('./server/fileuploads/routes')(app);
require('./server/speakers/routes')(app);
require('./server/partners/routes')(app);
require('./server/accreditations/routes')(app);
require('./server/users/routes')(app);
require('./server/meetings/routes')(app);
require('./server/webinars/routes')(app);
require('./server/mentors/routes')(app);
require('./server/newsletters/routes')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, ()=>{
    console.log("Your server is listening on port 8000.")
})