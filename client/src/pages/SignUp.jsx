import OAuthGoogle from "../components/OAuthGoogle";
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="w-full h-screen p-20 text-white">
      <div className="w-full h-full bg-gray-900 flex justify-center items-center rounded-lg">
        <div className="w-[500px] flex flex-col gap-10">
          <h1 className="text-4xl font-bold">ĐĂNG KÝ</h1>
          <OAuthGoogle />
          <span className="text-center">- OR -</span>
          <form className="w-full flex flex-col gap-10">
            <input className="w-full text-sm focus:border-white duration-300 bg-gray-900 outline-none border-b-2 border-white/40" placeholder="Nhập họ tên" type="text" />
            <input className="w-full text-sm focus:border-white duration-300 bg-gray-900 outline-none border-b-2 border-white/40" placeholder="Nhập email" type="email" />
            <input className="w-full text-sm focus:border-white duration-300 bg-gray-900 outline-none border-b-2 border-white/40" placeholder="Nhập mật khẩu" type="password" />
            <button className="bg-gray-950 p-2 rounded-lg duration-200 hover:bg-gray-950/60">Đăng ký</button>
          </form>
          <span className="text-sm flex gap-2">
            Bạn đã có tài khoản ?
            <Link className="text-sky-500 hover:underline duration-300" to={"/signin"}>Đăng nhập</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
