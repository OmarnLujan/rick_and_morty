

let myFavorites = [];

function postFav(req, res) {
    const character = req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites)
}

function deleteFav(req, res) {
    const { id } = request.params;
    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
    return res.status(200).json(myFavorites)
}
module.exports= { postFav, deleteFav }