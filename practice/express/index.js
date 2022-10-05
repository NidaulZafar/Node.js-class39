const express = require('express')
const app = express()
const style = 'style.css'

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="${./style.css}" />
    </head>
    <body>
      <article>
        <ol>
          <li>as</li>
          <li>as</li>
          <li>as</li>
          <li>as</li>
        </ol>
      </article>
    </body>
  </html>
  `)
})

app.listen(3000)