const express = require('express')
const axios = require('axios');
const app = express()

app.get('/', function (req, res) {
  axios.get('https://randomfox.ca/floof/')
    .then(resp => {
      const imgURL = resp.data.image;
      res.redirect(imgURL);
    })
    .catch(error => {
      console.error(error.response.status)
      res.status(500);
      res.send('Error hogya')
    })

})

app.listen(3000)