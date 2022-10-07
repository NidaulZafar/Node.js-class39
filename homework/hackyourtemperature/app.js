import express from 'express';
import API_KEY from "./sources/keys.js";
import fetch from 'node-fetch';
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello from backend to frontend!');
});

server.post('/weather', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const cityName = req.body.cityName;
  const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`);
  const data = await resp.json();
  if (data.cod === String(404)) {
    res.status(404).send(JSON.parse(`{"weatherText": "No city called '${cityName}' found!"}`))
  } else if (data.cod === String(400)) {
    res.status(400).send(JSON.parse(`{"weatherText": "No city entered!"}`))
  }
  else {
    res.status(200).send(JSON.parse(`{"weatherText": "${data.name}: ${data.main.temp}"}`));
  }
})


export default server;