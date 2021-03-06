const express = require('express');
const cors = require('cors');

const app = express();

const Routes = require('./routes');

app.use(express.json());
app.use(cors());


app.use(Routes);

app.listen(process.env.PORT || 3001, () => console.log('Server is running!'));
