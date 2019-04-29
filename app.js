const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Connect to mongoose
mongoose.connect("mongodb+srv://osama:Osama12@vidjot-sntzu.mongodb.net/test?retryWrites=true", {
  useNewUrlParser: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome' 
  res.render('index', {title})
})

// About Route
app.get('/about', (req, res) => {
  res.render('about')
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});