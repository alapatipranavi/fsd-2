const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware for form data
app.use(express.urlencoded({ extended: true }));

// Show form page
app.get('/', (req, res) => {
  res.render('form');  // renders views/form.ejs
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.render('success', { name, email }); // sends data to success.ejs
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
