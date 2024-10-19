const data = require(`../../SQLite-database`);

module.exports = async (req, res) => {

    const {name, age} = req.body;

    if(name && age) {
        const user = {name, age};
        const createUser = await data.addUser(user);
        res.status(200).json(createUser);
    } else {
        res.status(400).json({message: `Name and age are required`});
    }
}