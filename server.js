const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./views'))

app.use(require('./controller/controller'))

app.get('/ping', (req, res) => {
    res.send('pong!')
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})