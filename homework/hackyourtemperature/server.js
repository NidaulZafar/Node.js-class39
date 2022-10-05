import express from 'express';
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello from backend to frontend!');
});

server.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  res.setHeader('Content-Type', 'text/plain')
  res.send(cityName)
})

const PORT = process.env.PORT || 3000; 

server.listen(PORT, ()=>{
  console.log(`Express server started at port ${PORT}`);
});