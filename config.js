
require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    secret: process.env.SECRET,
    db: process.env.DB
}

console.log(module.exports);