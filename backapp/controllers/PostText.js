exports.sendMessage = async (req, res, next) =>
{
    console.log(req.body)

    res.send('OK!')
}