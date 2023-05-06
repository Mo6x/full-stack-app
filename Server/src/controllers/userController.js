import User from "../models/userModel.js";
import createError from "../utils/createError.js";



export const deleteUser = async (req, res, next) => {
const user  = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
    return next(createError(403, "You Can Delete Your Account!")); 
    };
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted!");
};

export const getUser = async (res, req, next) => {
    const user = await user.findById(req.params.id);

    res.status(200).send(user);
};

