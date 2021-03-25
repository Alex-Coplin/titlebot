const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 1234;
const axios = require('axios');

app.use(express.json());
app.use(cors());

const getTargetHTML = (targetUrl) => {
  return axios.get(targetUrl)
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    error
  });
};

const testUrl = 'https://google.com';
getTargetHTML(testUrl).then((data) => {
  let title = data.split('title>')[1];
  if (title) {
    title = title.split('<')[0];
    console.log(title);
  } else {
    console.log('invalid url');
  }
});

app.listen(port, () => console.log(`server running on port ${port}.`));