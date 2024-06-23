import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'Vui lòng nhập đầy đủ thông tin!'));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'Tài khoản này không tồn tại!'));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(404, 'Mật khẩu không chính xác!'));
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token_blog', token, { httpOnly: true }).json(rest);
    } catch (error) {
        next(error);
    }
};
