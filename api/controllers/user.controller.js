export const signout = async (req, res, next) => {
    try {
        res.clearCookie('access_token_blog').status(200).json('Đăng xuất thành công');
    } catch (error) {
        next(error);
    }
};
