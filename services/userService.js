const User = require("./databaseService")

const login = async(data) => {
    const { email, password } = data;
    const user = await User.findOne({email});
    if(user) {
        if(password === user.password) {
            return user;
        } else {
            return "Wrong password";
        }
    } else {
        return null;
    }
}

const signup = async(data) => {

    const { name, email, password } = data;
    const user = await User.findOne({email});
    if(user) {
        return null;
    } else {
        const newUser = new User({ name, email, password });
        newUser.save();
        return newUser;
    }
}

const forgotPassword = async(data) => {
    
    const { email, password } = data;
    const user = await User.findOne({email});
    if(user) {
        const user = User.findOneAndUpdate({"email": email}, {"password": password}, {new: true});
        return user;
    } else {
        return null;
    }
}

module.exports = {
    login,
    signup,
    forgotPassword
}
