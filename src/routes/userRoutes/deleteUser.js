const data = require(`../../SQLite-database`);

module.exports = async (req, res) => {

    const {id} = req.params;

    const success = await data.deleteUser(id);

    if(success) 
        res.status(204).json({message: `User deleted successfully`});
    else
        res.status(404).json({message: `User not found`});
}