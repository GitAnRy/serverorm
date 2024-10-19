const data = require(`../../SQLite-database`);

module.exports = async function(req, res) {
    res.status(200).json(await data.getUsers());
}