var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vacation_finder');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

//Schema setup

var vacationSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number
});

var vacation = mongoose.model("vacation", vacationSchema);



app.get('/', (req, res) => {
  res.render('landing');
})

app.get('/vacationSpots', (req, res) =>{
  vacation.find({}, function(err, vacationSpots){
    if(err){
      console.log(err);
    } else{
      res.render('vacationSpots', {vacationSpots: vacationSpots});
    }
  })
})

app.get('/vacationSpots/new', (req, res) => {
  res.render('new.ejs');
})

app.get('/vacationSpots/:id', (req, res) => {
  vacation.findById(req.params.id, function(err, foundVacationSpot){
    if(err){
      console.log(err);
    }else{
      console.log(foundVacationSpot);
      res.render('show', {spot: foundVacationSpot})
    }
  })



})

app.post('/vacationSpots', (req, res) => {
  let newSpot = req.body.name;
  let newSpotPicture = req.body.image;
  let description = req.body.description;
  let price = req.body.price;
  vacation.create({
    name: newSpot,
    image: newSpotPicture,
    description: description,
    price: price
  }, function(err, spot){
      if(err){
        console.log(err);
      } else{
        console.log(spot, 'was created')
        res.redirect('/vacationSpots');
      }
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
