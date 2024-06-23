import { useEffect, useState } from 'react';
import OAuthGoogle from '../components/OAuthGoogle';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    useEffect(() => {
        if (errorMessage) {
            const timeout = setTimeout(() => {
                setErrorMessage(null);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [errorMessage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return setErrorMessage('Vui lòng nhập đầy đủ thông tin!');
        }

        try {
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success === false) {
                return setErrorMessage(data.message);
            }
            navigate('/');
        } catch (error) {
            setErrorMessage(error);
        }
    };

    return (
        <div className="w-full h-screen p-20 text-white">
            <div className="w-full h-full bg-gray-900 flex justify-center items-center rounded-lg">
                <div className="w-[500px] flex flex-col gap-10">
                    <h1 className="text-4xl font-bold">ĐĂNG NHẬP</h1>
                    <OAuthGoogle />
                    <span className="text-center">- OR -</span>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
                        <input
                            onChange={handleChange}
                            id="email"
                            className="w-full text-sm focus:border-white duration-300 bg-gray-900 outline-none border-b-2 border-white/40"
                            placeholder="Nhập email"
                            type="email"
                        />
                        <input
                            onChange={handleChange}
                            id="password"
                            className="w-full text-sm focus:border-white duration-300 bg-gray-900 outline-none border-b-2 border-white/40"
                            placeholder="Nhập mật khẩu"
                            type="password"
                        />
                        <button type="submit" className="bg-gray-950 p-2 rounded-lg duration-200 hover:bg-gray-950/60">
                            Đăng nhập
                        </button>
                        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                    </form>
                    <span className="text-sm flex gap-2">
                        Bạn chưa có tài khoản ?
                        <Link className="text-sky-500 hover:underline duration-300" to={'/signup'}>
                            Đăng ký
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
