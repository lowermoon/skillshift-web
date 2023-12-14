import anime from "animejs";
import { useEffect, useState } from "react";
import CirclesBg from "../../Components/Auth/CirclesBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCogs, faEye, faEyeSlash, faUser, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";


export default function LoginPage({ title }) {
    const mySwal = withReactContent(Swal);
    
    document.title = `Skillshift - ${title}`;
    const [device, setDevice] = useState('desktop');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [togglePassword, setTogglePassword] = useState(false);

    useEffect(() => {
        const isDesktop = window.innerWidth >= 1024;
        if(isDesktop) {
            setDevice(state => state = 'desktop');
        }else {
            setDevice(state => state = 'mobile');
        }
    }, [])

    const loginUser = async (username, password) => {
        try {
            const dataBody = {
                username: username,
                password: password
            }
            const response = await axios.post('https://api.skillshift.my.id/api/loginUsers', dataBody);
            return response; 
        } catch (error) {
            return error.response;
        }
    }

    const loginFreelancer = async (username, password) => {
        try {
            const dataBody = {
                username: username,
                password: password
            }
            const response = await axios.post('https://api.skillshift.my.id/api/loginFreelancer', dataBody);
            return response; 
        } catch (error) {
            return error.response;
        }
    }

    const submitLogin = (e) => {
        e.preventDefault();

        !username || !password ? mySwal.fire({
            icon: 'error',
            html: (
                <div className="">
                    <h1 className="text-red-600 font-bold font-nunito text-3xl">
                        Gagal Memproses
                    </h1>
                    <p className="text-white font-quicksand">
                        Username dan Password anda tidak boleh kosong.
                    </p>
                </div>
            ),
            timer: 3000,
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonColor: '#fb923c'
        }) 
        :
        mySwal.fire({
            html: (
                <div className="">
                    <h1 className="text-yellow-600 font-bold font-nunito text-2xl">
                        Memproses
                    </h1>
                    <p className="text-white font-quicksand">
                        Mohon menunggu sebentar..
                    </p>
                </div>
            ),
            width: 400,
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: async () => {
                const responseUser = await loginUser(username, password);
                const responseFreelancer = await loginFreelancer(username, password);
                console.clear();

                if(responseUser.status === 201) {
                    return mySwal.fire({
                        icon: 'success',
                        html: (
                            <div className="">
                                <h1 className="text-green-600 font-bold font-nunito text-3xl">
                                    Berhasil Masuk
                                </h1>
                                <p className="text-white font-quicksand">
                                    Anda akan diarahkan ke halaman dashboard.
                                </p>
                            </div>
                        ),
                        timer: 3000,
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        didOpen: () => {
                            console.clear();
                        }
                    })
                }

                if(responseFreelancer.status === 201) {
                    return mySwal.fire({
                        icon: 'success',
                        html: (
                            <div className="">
                                <h1 className="text-green-600 font-bold font-nunito text-3xl">
                                    Berhasil Masuk
                                </h1>
                                <p className="text-white font-quicksand">
                                    Anda akan diarahkan ke halaman dashboard.
                                </p>
                            </div>
                        ),
                        timer: 3000,
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        didOpen: () => {
                            console.clear();
                        }
                    })
                }

                return mySwal.fire({
                    icon: 'error',
                    html: (
                        <div className="">
                            <h1 className="text-red-600 font-bold font-nunito text-3xl">
                                Gagal Memproses
                            </h1>
                            <p className="text-white font-quicksand">
                                Username atau Password anda salah.
                            </p>
                        </div>
                    ),
                    timer: 3000,
                    allowOutsideClick: false,
                    showConfirmButton: true,
                    confirmButtonColor: '#fb923c',
                    didOpen: () => {
                        console.clear();
                    }
                })
            }
        })
    }

    // Layar untuk Desktop
    if(device == 'desktop') {
        return (
            <div className="relative w-full h-screen overflow-hidden font-quicksand">
                <img className="absolute top-0 left-0 z-10 object-cover w-full object-center translate-x-1/4" src="https://img.freepik.com/free-photo/beautiful-asian-muslim-lady-casual-wear-working-using-laptop-modern-new-normal-office_7861-2975.jpg?w=1380&t=st=1702487263~exp=1702487863~hmac=b0050c327d08f078478d95e0b075ff46674c1da405086b4b9bb69fd9344b69c1" alt="" />
                <div className="absolute top-0 left-0 z-20 bg-gradient-to-r from-gray-900 from-25% via-gray-900/80 via-50%  w-full h-screen"></div>
                <div className="absolute top-0 left-0 w-full h-screen p-10 z-30">
                    <h1 className="flex items-center gap-5 font-quicksand font-bold text-white text-2xl">
                        <img className="w-12" src="/skillshift-logo.png" alt="" />
                        Skill Shift
                    </h1>
                    <hr className="my-5 opacity-0" />
                    <div className="p-5">
                        <h1 className="text-white text-2xl">
                            Halo,
                        </h1>
                        <h1 className="font-bold text-white text-[100px] -mt-7">
                            Selamat Datang<span className="text-yellow-500">.</span>
                        </h1>
                        <p className="text-white text-2xl">
                            Belum punya akun? <Link to={'/signup'} className="text-yellow-500" >
                                Daftar sekarang juga.
                            </Link>
                        </p>
                        <hr className="my-5 opacity-0" />
                        <form onSubmit={(e) => submitLogin(e)} className="">
                            <div className="relative p-2 py-4 rounded-2xl bg-gray-800 w-1/4 hover:shadow-lg  transition-all duration-300">
                                <input type="text" id='username' onChange={e => setUsername(state => state = e.target.value)}  className="cursor-text w-full px-3 bg-transparent outline-none text-white font-bold peer mt-2" placeholder="" autoComplete="off" />
                                <label htmlFor="username" className="cursor-text text-white absolute font-thin top-0 left-0 px-7 translate-y-1 scale-75 origin-left peer-placeholder-shown:translate-y-5 peer-focus:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:scale-75  transition-all duration-300">Masukkan Username Anda</label>
                                <div className="absolute top-0 right-0 w-12 h-full flex items-center justify-center text-gray-400">
                                    <FontAwesomeIcon icon={faUser} size="lg"/>
                                </div>
                            </div>
                            <hr className="my-3 opacity-0" />
                            <div className="relative p-2 py-4 rounded-2xl bg-gray-800 w-1/4 hover:shadow-md transition-all duration-300">
                                <input type={togglePassword ? 'text' : 'password'} onChange={e => setPassword(state => state = e.target.value)} id='password'  className="cursor-text w-full px-3 bg-transparent outline-none text-white font-bold peer mt-2" placeholder="" autoComplete="off" />
                                <label htmlFor="password" className="cursor-text text-white absolute font-thin top-0 left-0 px-7 translate-y-1 scale-75 origin-left peer-placeholder-shown:translate-y-5 peer-focus:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:scale-75  transition-all duration-300">Masukkan Password Anda</label>
                                <div className="absolute top-0 right-0 w-12 h-full flex items-center justify-center text-gray-400">
                                    <button type="button" onClick={() => setTogglePassword(state => !state)}>
                                        <FontAwesomeIcon icon={ togglePassword ? faEye : faEyeSlash} size="lg"/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-1/4 justify-end items-center">
                                <Link to={'/forgot'} className="text-yellow-400 font-medium">
                                    Lupa Password?
                                </Link>
                            </div>
                            <hr className="my-3 opacity-0" />
                            <div className="flex justify-center w-1/4 items-center">
                                <button type="submit" className=" w-1/2 p-2 rounded-2xl text-2xl font-nunito bg-yellow-600 hover:bg-yellow-700 text-zinc-900 font-bold tracking-tighter">
                                    Masuk
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-60 h-60 flex items-center justify-center z-50">
                    <img src="/skillshift-logo.png" alt="a" />
                </div>
            </div>
        )
    }
    
}