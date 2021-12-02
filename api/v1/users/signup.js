const { signup } = require("../../../services/userService");

module.exports = async(req, res) => {
    try {
        const user = await signup(req.body);
        if(user) {
            return res.status(200).json({
                success: true,
                message: "Signup successful",
                user
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "User already exists"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
