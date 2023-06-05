const users = require("../utils/users");


function login(request, response) {
    const { email, password } = request.query;
    const searchedUser = users.find((user) => user.email === email && user.password === password)

    return searchedUser
        ? response.status(200).json({ access: true })
        : response.status(404).json({ access: false })
}







module.exports = { login };