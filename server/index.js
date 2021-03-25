const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 1234;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`server running on port ${port}.`));