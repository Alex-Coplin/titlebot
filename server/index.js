const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 1234;
const axios = require('axios');

app.use(express.json());
app.use(cors());

const getTargetHTML = (url) => {
  return axios.get(url)
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    error
  });
};

app.get('/targetUrl', (req, res) => {
  const targetUrl = req.query.target;
  getTargetHTML(targetUrl).then((data) => {
    if (data) {
      let title = data.split('<title')[1];
      title = title.split('<')[0];
      title = title.split('>')[1];
      res.status(200).send(title);
    } else {
      res.status(404).send('invalid url');
    }
  });
})



app.listen(port, () => console.log(`server running on port ${port}.`));