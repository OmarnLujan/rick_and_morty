/* 
//web server promesas
const axios = require("axios");
const getCharById = (res, id) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data).then(data=>{
            const character = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
            res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(character));
        }).catch(error=>new Error(error));

};

module.exports = getCharById; */

// express
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(request, response) {
    const { id } = request.params;

    axios
        .get(` ${URL}/${id}`)
        .then(response => response.data).then(data => {
            if (data.name) {
                const character = {
                    id: id,
                    name: data.name,
                    gender: data.gender,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    status: data.status
                }
                return response
                    .status(200)
                    .json({ character })
            }
            return (response
                .status(404)
                .send("Not fount"));

        }).catch(error => response
            .status(500)
            .send(error.message));




};

module.exports = getCharById;






