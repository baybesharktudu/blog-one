import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Posts() {
    return (
        <div className="p-4 flex flex-col gap-2 text-white/40 bg-gray-900 rounded-lg">
            <div className="flex gap-3 justify-between items-center">
                <div className="flex gap-3">
                    <img
                        className="w-12 h-12 border-2 border-white/40 object-cover rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                        alt="pic_user"
                    />
                    <h3 className="text-white/40">Bay be</h3>
                </div>
                <RiDeleteBin6Line className="text-red-400 cursor-pointer hover:scale-110 duration-300 text-2xl" />
            </div>
            <div className="flex justify-center">
                <span className="text-white/40">Bay be</span>
            </div>
            <div className="w-full h-full">
                <img
                    className="object-cover w-full h-[580px] rounded-lg overflow-hidden"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                    alt="image_posts"
                />
            </div>
        </div>
    );
}
