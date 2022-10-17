const express = require('express')
const app = express()
const script = require('./script/script')
const baseUrl = "http://localhost:3000/";
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

const cacheTime = 86400000 * 30 // the time you want
const path = require('path')

app.use(express.static(path.join(__dirname, 'public'), {
 maxAge: cacheTime
}))

app.get('/', (req, res) => {
  let current = script.setNav(req);
  res.render('pages/landing', {page: current, baseUrl: baseUrl});
});
app.get('/jobdesk', (req, res) => {
  let current = script.setNav(req);
  res.render('pages/jobdesk', {page: current, baseUrl: baseUrl});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, err => {
    if(err){
        console.log("ERROR", err);
    }
    console.log(`Website Litbang listening on port ${port}!`);
});

