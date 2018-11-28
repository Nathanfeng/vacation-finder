var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

var vacationSpots = [
  {name: "First", image: "https://images.pexels.com/photos/6534/holiday-vacation-hotel-luxury.jpg?auto=compress&cs=tinysrgb&h=350"},
  {name: 'Second', image: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&h=350'},
  {name:'Third', image: 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&h=350'},
  {name:'Fourth', image: 'https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&h=350'}
];

app.get('/', (req, res) => {
  res.render('landing');
})

app.get('/vacationSpots', (req, res) =>{
  res.render('vacationSpots', {vacationSpots: vacationSpots});
})

app.get('/vacationSpots/new', (req, res) => {
  res.render('new.ejs');
})

app.post('/vacationSpots', (req, res) => {
  let newSpot = req.body.name;
  let newSpotPicture = req.body.image;
  vacationSpots.push({name: newSpot, image: newSpotPicture});
  res.redirect('/vacationSpots');
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
