const express = require('express');
const app = express();
const router = express.Router();

router.get('/index', (req , res) => {
    res.json({message: 'Hello'});
});

router.get('/hello', (req, res) => {
    res.send("World");
});

app.use(router);

const PORT = 3334;

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}.`);
});
   