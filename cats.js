var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

//adds the methods to the Cat variale and creates the schema associated with the cat.
var Cat = mongoose.model("Cat", catSchema);

//creates a cat
var george = new Cat({
  name: "sergiy",
  age: 12,
  temperament: "happy"
})

//saves the created cat to the database
george.save(function(err, cat){
  if(err){
    console.log('something went wrong');
  } else {
    console.log('we just saved the cat to the database');
    console.log(cat);
  }
})

//displays att eh cats to the database
Cat.find({}, function(err, cats){
  if(err){
    console.log(err)
  } else{
    console.log('all the cats...')
    console.log(cats);
  }
})

//creates the cat and saves the cat to the database at the same time
Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "bland"
}, function(err, cat){
  if(err){
    console.log(err)
  } else {
    console.log('new cat created: ', cat)
  }
});
