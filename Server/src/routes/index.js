const { login } = require("../controllers/login");
const  getCharById  = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
    getCharById(req, res);
})

router.get("/login", (req, res) => {
    login(req, res);
})
// se puede declarar asi o como abajo
router.post("/fav", (req, res) => {
    postFav(req, res);
})
// tambien se puede hacer asi router.delete("/fav/:id",deleteFav)
router.delete("/fav/:id",(req, res) => {
    deleteFav(req, res);
})


module.exports =  router ;
