const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Changed to PORT (uppercase)
const cors = require("cors"); // Fixed typo

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Corrected console.log syntax
});
