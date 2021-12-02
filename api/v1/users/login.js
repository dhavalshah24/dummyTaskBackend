const { login } = require("../../../services/userService");

module.exports = async(req, res) => {
    try {
        const user = await login(req.body);
        if(user) {
            if(user.email) {
                return res.status(200).json({
                    success: true,
                    message: "Login successful",
                    user
                })
            } else {
                return res.status(200).json({
                    success: false,
                    message: "Wrong password"
                });
            }
        } else {
            return res.status(200).json({
                success: false,
                message: "User does not exist"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
