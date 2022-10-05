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
    res.send(JSON.parse(`{"weatherText": "No city called '${cityName}' found!"}`))
  } else {
    res.send(JSON.parse(`{"weatherText": "${data.name}: ${data.main.temp}"}`));
  }
})

const PORT = process.env.PORT || 3000; 

server.listen(PORT, ()=>{
  console.log(`Express server started at port ${PORT}`);
});