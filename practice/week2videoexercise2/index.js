const express = require('express')
const axios = require('axios');
const app = express()

app.get('/', function (req, res) {
  axios.get('https://randomfox.ca/floof/')
    .then(resp => {
      const imgURL = resp.data.image;
      res.send(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <img src="${imgURL}" alt="" style="width:50%" />
    <form action="/" method="GET">
    <input type="submit" value="next">
    </form>
  </body>
</html>
`)
    })
    .catch(error => {
      console.error(error.response.status)
      res.status(500);
      res.send('Error hogya')
    })

})

app.listen(3000)  