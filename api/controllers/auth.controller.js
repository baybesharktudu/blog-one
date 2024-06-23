import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password || fullName === '' || email === '' || password === '') {
        next(errorHandler(400, 'Vui lòng nhập đầy đủ thông tin!'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = await new User({
        fullName,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json({ message: 'Đăng ký thành công!' });
    } catch (error) {
        next(error);
    }
};
