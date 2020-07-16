const express = require('express');
const assert = require('assert');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = Number(process.env.port | 4000);

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
    console.log(`app is runing in http://localhost:${PORT}`)
})