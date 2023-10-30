const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

const blogPosts = [];

app.get('/', (req, res) => {
  res.render('index', { blogPosts });
});


app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    blogPosts.push({ title, content });
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
