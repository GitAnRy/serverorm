const data = require(`../../SQLite-database`);

module.exports = async (req, res) => {
    const {id} = req.params;

    const user = await data.getUserById(id);

    if(user)
        res.status(200).json(user);
    else
        res.status(404).json({message: `User not found`});
    
}