/* const http = require("http");
const getCharById = require("./controllers/getCharById");

const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === "/rickandmorty/character") {
    const id = req.url.split("/").at(-1)
    getCharById(res, id);
  }
}).listen(PORT, "localhost"); */
const express = require("express");
const  server = require("./app");
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({force: true}).then (()=>{
server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
})
}).catch(error => console.log(error.message));
