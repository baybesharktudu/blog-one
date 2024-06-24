import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { signOutSuccess } from '../redux/user/userSlice';

const navigation =
    "bg-gray-950 text-white relative before:rounded-full before:content-[''] before:w-4 before:h-4 before:bg-gray-900 before:absolute before:top-0 before:right-0 before:shadow-[10px_10px_0_0] before:shadow-gray-950 before:translate-y-[-100%] after:content-[''] after:absolute after:w-4 after:h-4 after:rounded-full  after:bottom-0 after:right-0 after:bg-gray-900 after:shadow-[10px_-10px_0_0] after:shadow-gray-950 after:translate-y-[100%]";

export default function Navbar() {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            const res = await fetch('/api/user/signout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();

            if (!res.ok) {
                console.log(data.message);
            } else {
                dispatch(signOutSuccess());
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="xs:hiden fixed bg-gray-900 pt-10 pb-10 pl-4 top-0 left-0 bottom-0 w-[200px]">
            <ul className="flex flex-col gap-5">
                <Link
                    to={'/'}
                    className={
                        location.pathname === '/'
                            ? `${navigation} cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                            : `text-white cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                    }
                >
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span className="font-semibold">Trang chủ</span>
                </Link>
                <Link
                    to={'/messages'}
                    className={
                        location.pathname === '/messages'
                            ? `${navigation} cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                            : `text-white cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                    }
                >
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                    </svg>

                    <span className="font-semibold">Tin nhắn</span>
                </Link>
                <Link
                    to={'/search'}
                    className={
                        location.pathname === '/search'
                            ? `${navigation} cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                            : `text-white cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                    }
                >
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>

                    <span className="font-semibold">Tìm kiếm</span>
                </Link>
                <li className="hover:bg-white/85 duration-300 w-11/12 hover:text-gray-950 cursor-pointer text-white p-2 rounded-lg text-sm l-4 flex items-center gap-2">
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>

                    <span className="font-semibold">Tạo bài viết</span>
                </li>
            </ul>

            <button
                onClick={handleSignOut}
                className="hover:scale-105 text-gray-950 duration-300 transition-all absolute font-bold w-10/12 bg-white/85 p-2 rounded-l-lg text-sm rounded-lg bottom-10 flex items-center justify-center gap-2"
            >
                Đăng xuất
                <FaSignOutAlt />
            </button>
        </div>
    );
}
