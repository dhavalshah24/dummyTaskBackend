const { forgotPassword } = require("../../../services/userService");

module.exports = async(req, res) => {
    try {
        const user = await forgotPassword(req.body);
        if(user) {
            return res.status(200).json({
                success: true,
                message: "Password updated",
                user
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "User does not exist"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}