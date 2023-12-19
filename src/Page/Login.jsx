import { faEye, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
    return (
        <div className="w-full h-screen bg-zinc-100 flex items-center justify-center dark:bg-zinc-900 font-quicksand">
            <div className="w-1/3 rounded-2xl">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-3xl font-nunito font-extrabold text-zinc-700">
                        Selamat Datang<span className="text-yellow-500">.</span>
                    </h1>
                    <img className="w-12" src="/skillshift-logo.png" alt="" />
                </div>
                <hr className="my-2 opacity-0" />
                <div className="flex gap-5 items-center">
                    <p className="font-quicksand text-zinc-700 w-fit">
                        Silahkan gunakan akun anda untuk masuk.
                    </p>
                    <hr className="w-full border-zinc-700" />
                </div>
                <form action="" className="flex flex-col items-center w-full my-5 space-y-5">
                    <div className="relative w-2/3">
                        <input type="text" className="w-full outline-none rounded-lg h-10 border border-zinc-300 bg-zinc-200 px-5 font-bold focus:border-zinc-500" />
                        <p className="absolute top-0 left-0 w-fit px-2 rounded-lg bg-zinc-200 text-zinc-700 tracking-tighter text-xs font-bold translate-x-3 -translate-y-2.5">
                            Username
                        </p>
                    </div>
                    <div className="relative w-2/3">
                        <input type="password" className="w-full outline-none rounded-lg h-10 border border-zinc-300 bg-zinc-200 px-5 font-bold focus:border-zinc-500" />
                        <p className="absolute top-0 left-0 w-fit px-2 rounded-lg bg-zinc-200 text-zinc-700 tracking-tighter text-xs font-bold translate-x-3 -translate-y-2.5">
                            Password
                        </p>
                        <div className="absolute top-0 right-0 w-10 h-full flex items-center justify-center">
                            <button className="hover:bg-zinc-400/80 p-1 rounded w-8 h-8 text-zinc-700">
                               <FontAwesomeIcon icon={faEye} />
                            </button>
                        </div>
                    </div>
                    <button className="w-2/3 rounded-lg bg-yellow-400 py-2 text-zinc-800 font-nunito font-bold flex gap-2 items-center justify-center">
                        <FontAwesomeIcon icon={faPaperPlane} />
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    )
}