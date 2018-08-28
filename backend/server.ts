const express = require('express');
const app = express();

app.get('/', (req , res) => {
    res.send('Hello');
});

app.get('/hello', (req, res) => {
    res.send("World");
});

const PORT : String = process.env.PORT || '3000';

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}.`);
});
