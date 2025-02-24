module.exports = {
    messagePush: async(req, res) => {
        try {
            const { channel_access_token, ...body } = req.body;

            return res.json(req.body);
        } catch (err) {
            console.error(err);
        }
    }
}