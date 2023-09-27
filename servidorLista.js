const http = require('http');
//sgit sta
const port = 3000;

//lista
const listaDeTareas = [
  {
    "id": 1,
    "tarea": "Hacer la tarea de matemáticas",
    "completada": false
  },
  {
    "id": 2,
    "tarea": "Lavar los platos",
    "completada": true
  },
  {
    "id": 3,
    "tarea": "Estudiar para el examen",
    "completada": false
  }
];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/lista') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ tareas: listaDeTareas }));

  } else {
    res.writeHead(404);
    res.end('Ruta no encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor Corriendo ${port}`);
});




server.listen(port,()=>{
    console.log('Servidor corriendo')
})