import { FcGoogle } from 'react-icons/fc';

export default function OAuthGoogle() {
    return (
        <button className="w-full p-2 duration-300 hover:border-white flex items-center justify-center gap-2 border-2 border-gray-500 rounded-md">
            <FcGoogle />
            Đăng nhập với google
        </button>
    );
}
