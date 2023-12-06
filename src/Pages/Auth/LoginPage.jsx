import anime from "animejs";
import { useEffect, useState } from "react";
import CirclesBg from "../../Components/Auth/CirclesBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage({ title }) {
    document.title = `Skillshift - ${title}`;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [togglePassword, setTogglePassword] = useState(false);
    
    useEffect(() => {
        anime.timeline({
            duration: 500,
            easing: 'easeInOutExpo',
        })
        .add({
            targets: '#title',
            translateY: [250, 250],
            opacity: [0, 1],
            duration: 1000,
        })
        .add({
            targets: '#title',
            translateY: [250, 0],
        })
        .add({
            targets: '#subtitle',
            opacity: [0, 1],
        })
        .add({
            targets: '#form',
            opacity: [0, 1],
        })
        .add({
            targets: '#sub_menu',
            opacity: [0, 1],
        })
        
    }, [])

    const submitLogin = () => {
        
    }

    return (
        <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-white  text-zinc-700 font-nunito">
            <CirclesBg position="top left" />
            <CirclesBg position="bottom right" />
            <div className="absolute top-0 left-0 w-full h-screen z-50">
                <div id="title" className="flex justify-center w-full">
                    <img className="w-80" src="/logo-title.png" alt="" />
                </div>
                <h1 id="subtitle" className="text-center font-bold text-zinc-700 text-4xl">
                    Hi, Good to see you again!
                </h1>
                <p id="subtitle" className="text-center text-zinc-500">
                    Please proceed your account to signin to our platform
                </p>
                <hr className="my-5 opacity-0" />
                <div id="form" className="flex justify-center w-full">
                    <form onSubmit={() => submitLogin()} className="w-1/5 flex flex-col items-center gap-5">
                        <div className="relative w-full">
                            <input type="text" onChange={(e) => setUsername(e.target.value)} className={`w-full border ${ username ? 'border-zinc-700' : 'border-zinc-400' } rounded-2xl h-10 outline-none px-10 focus:ring-4 ring-zinc-300 transition-all duration-300`} placeholder="Your username or Email" />
                            <div className={`absolute top-0 left-0 w-12 h-10 flex items-center justify-center ${ username ? 'text-zinc-700' : 'text-zinc-400'} transition-all duration-300 `}>
                                <FontAwesomeIcon icon={ faUser } />
                            </div>
                        </div>
                        <div className="relative w-full">
                            <input type={ togglePassword ? 'text' : 'password' } onChange={(e) => setPassword(e.target.value)} className={`w-full border ${ password ? 'border-zinc-700' : 'border-zinc-400' } rounded-2xl h-10 outline-none px-10 focus:ring-4 ring-zinc-300 transition-all duration-300`} placeholder="Your password" />
                            <div className={`absolute top-0 left-0 w-12 h-10 flex items-center justify-center ${ password ? 'text-zinc-700' : 'text-zinc-400'} transition-all duration-300 `}>
                                <FontAwesomeIcon icon={ faCogs } />
                            </div>
                            <button type='button' onClick={() => setTogglePassword(state => !state)} className={`absolute top-0 right-0 w-12 h-10 flex items-center justify-center ${ !togglePassword ? 'text-zinc-500' : 'text-zinc-700'} transition-all duration-300 outline-none`}>
                                { !togglePassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }
                            </button>
                        </div>
                        <div className="flex w-full justify-center">
                            <button className="w-1/2 border p-2 px-4 rounded-2xl font-bold text-zinc-700 hover:bg-zinc-700 hover:text-red-500  transition-all duration-300">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
                <hr className="my-5 opacity-0" />
                <div id="sub_menu" className="w-full flex justify-center">
                    <div className="w-1/4 flex flex-col items-center gap-2">
                        <div className="flex justify-between items-center w-full">
                            <a href="" className="text-zinc-500 font-bold hover:text-zinc-700 text-sm">
                                Reset Password
                            </a>
                            <a href="/signup" className="text-zinc-500 font-bold hover:text-zinc-700 text-sm">
                                Create new account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}