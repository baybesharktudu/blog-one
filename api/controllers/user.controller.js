import User from '../models/user.model.js';

export const signout = async (req, res, next) => {
    try {
        res.clearCookie('access_token_blog').status(200).json('Đăng xuất thành công');
    } catch (error) {
        next(error);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({ _id: { $ne: req.user.id } });
        const filteredUserData = await users.map(({ _id, fullName, email, createdAt, updatedAt, __v }) => {
            return { _id, fullName, email, createdAt, updatedAt, __v };
        });
        res.status(200).json(filteredUserData);
    } catch (error) {
        next(error);
    }
};
