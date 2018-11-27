var express = require('express');
var app = express();

app.set('view engine', 'ejs')

var campgrounds = [
  {name: "first", image: "https://images.pexels.com/photos/6534/holiday-vacation-hotel-luxury.jpg?auto=compress&cs=tinysrgb&h=350"},
  {name: 'second', image: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&h=350'},
  {name:'third', image: 'https://images.pexels.com/photos/6534/holiday-vacation-hotel-luxury.jpg?auto=compress&cs=tinysrgb&h=350'}
];

app.get('/', (req, res) => {
  res.render('landing');
})

app.get('/campgrounds', (req, res) =>{
  res.render('campgrounds', {campgrounds: campgrounds});
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
