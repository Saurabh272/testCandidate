const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const profileRoutes = require('./routes/profiles');
const testRoutes = require('./routes/tests');
const questionRoutes = require('./routes/questions');
const answerRoutes = require('./routes/answers');
const resultRoutes = require('./routes/results');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/profiles', profileRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/results', resultRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});