const data = require(`../../SQLite-database`);

module.exports = async (req, res) => {
    
    const {id} = req.params;

    const {name, age} = req.body;

    const updatedUser = {name, age};

    const user = await data.updateUser(id, updatedUser);

    if(user)
        res.status(200).json(user);
    else
        res.status(404).json({message : `User not found`});
}