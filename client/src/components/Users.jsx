import { FaArrowRightLong } from 'react-icons/fa6';

export default function Users({ fullName }) {
    return (
        <div className="w-full flex justify-between items-center gap-3 pb-2 pt-2">
            <div className="flex gap-3 relative before:rounded-full before:opacity-75 transition before:content-[''] before:w-[14px] before:h-[14px] before:animate-ping before:bg-white before:absolute before:top-0 before:left-[36px]">
                <img
                    className="w-12 h-12 border-2 border-white/40 object-cover rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                    alt=""
                />
                <h3 className="text-white/40/70 text-sm">{fullName}</h3>
            </div>
            <button className="hover:scale-110 transition text-xl text-white/40">
                <FaArrowRightLong />
            </button>
        </div>
    );
}
