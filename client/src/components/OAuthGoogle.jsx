import { FcGoogle } from 'react-icons/fc';
import { app } from '../firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function OAuthGoogle() {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            const resultFromGoogle = await signInWithPopup(auth, provider);

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                }),
            });

            const data = await res.json();
            console.log(data);
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            onClick={handleGoogle}
            className="w-full p-2 duration-300 hover:border-white flex items-center justify-center gap-2 border-2 border-gray-500 rounded-md"
        >
            <FcGoogle />
            Đăng nhập với google
        </button>
    );
}
