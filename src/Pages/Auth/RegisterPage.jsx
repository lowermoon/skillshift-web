import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCog, faEnvelope, faUser, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);


export default function RegisterPage({ title }) {
    document.title = `Skill Shift - ${title}`;
    const [device, setDevice] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [token, setToken] = useState('');
    const [timer, setTimer] = useState(0);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     
    useEffect(() => {
        setDevice(state => state = window.innerWidth < 768 ? 'mobile' : 'desktop');
    }, []);

    

    const verifyAccount = (type) => {
        if(!fullName || !email || !username || !password) {
            return mySwal.fire({
                icon: 'error',
                html: (
                    <div className="">
                        <h1 className="font-bold font-nunito text-rose-400 text-2xl">
                            Gagal Memproses
                        </h1>
                        <p className="text-white font-quicksand">
                            Anda perlu mengisi formulir data yang sudah disediakan terlebih dahulu dengan benar.
                        </p>
                    </div>
                ),
                showConfirmButton: false,
                timer: 3000
            })
        }

        if(!email.includes('@')) {
            return mySwal.fire({
                icon: 'error',
                html: (
                    <div className="">
                        <h1 className="font-bold font-nunito text-rose-400 text-2xl">
                            Gagal Memproses
                        </h1>
                        <p className="text-white font-quicksand">
                            Anda perlu mengisi data email dengan benar.
                        </p>
                    </div>
                ),
                showConfirmButton: false,
                timer: 3000
            })
        }

        if(type === 'user') {
            return mySwal.fire({
                html: (
                    <div className="">
                        <h1 className="font-bold font-nunito text-white text-2xl">
                            Sedang Memproses..
                        </h1>
                        <p className="font-quicksand text-white">
                            Tunggu Sebentar, kami sedang memproses data anda.
                        </p>
                    </div>
                ),
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: async () => {
                    try {
                        const dataBody = {
                            fullName: fullName,
                            email: email,
                            username: username,
                            password: password
                        }

                        const response = await axios.post('https://api.skillshift.my.id/api/register', dataBody, {
                            withCredentials: true
                        });
                        setToken(response.data.data.token);
                        console.log(response.data.data.code);
                        return mySwal.fire({
                            icon: 'info',
                            input: 'text',
                            inputLabel: 'Kode Verifikasi',
                            inputAttributes: {
                                autocapitalize: 'off',
                                autoComplete: 'off'
                            },
                            showLoaderOnConfirm: true,
                            html: (
                                <div className="">
                                    <h1 className="font-nunito font-bold text-yellow-600 text-2xl">
                                        Verifikasi Akun Anda
                                    </h1>
                                    <p className="font-quicksand text-white">
                                        Sistem kami telah memberikan kode verifikasi ke email anda di <b>{email}</b>. <br />
                                        <br />
                                        Silahkan cek email anda dan <span className="text-yellow-400">Kode Verifikasi</span> yang kami berikan dibawah ini. <br />
                                    </p>
                                </div>
                            ),
                            confirmButtonText: 'Verifikasi',
                            timer: timer * 1000,
                            preConfirm: async (code) => {
                                try {
                                    const dataBody = {
                                        userVerificationCode: code,
                                        email: email
                                    }
                                    console.log(dataBody);
                                    const response = await axios.post('https://api.skillshift.my.id/api/verifyUser', dataBody, {
                                        withCredentials: true,
                                        headers: {
                                            'Accept': '/',
                                            'Content-Type': 'application/json',
                                            'Cache-Control': 'no-cache'
                                        }
                                    });
                                    return response;
                                } catch (error) {
                                    return error.response;
                                }
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const {data} = result.value;
                                mySwal.fire({
                                    icon: data.status === 'fail' ? 'error' : 'success',
                                    html: (
                                        <div className="">
                                            { data.status === 'fail' ? (
                                                <div>
                                                    <h1 className="text-rose-600 font-bold font-nunito text-2xl">
                                                        Verifikasi Gagal
                                                    </h1>
                                                    <p className="text-white font-quicksand">
                                                        Gagal memverifikasi kode, Silahkan coba Lagi!
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h1 className="text-green-600 font-bold font-nunito text-2xl">
                                                        Verifikasi Berhasil
                                                    </h1>
                                                    <p className="text-white font-quicksand">
                                                        Verifikasi Kode berhasil dilakukan, silahkan masuk ke akun anda!
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })
                            }
                        })
                    } catch (error) {
                        mySwal.fire({
                            icon: 'error',
                            html: (
                                <div className="">
                                    <h1 className="font-bold font-nunito text-rose-400 text-2xl">
                                        Gagal Memproses
                                    </h1>
                                    <p className="text-white font-quicksand">
                                        {error.response.data.message}
                                    </p>
                                </div>
                            ),
                            showConfirmButton: false,
                        })
                    }
                }
            })
        } else {
            return mySwal.fire({
                html: (
                    <div className="">
                        <h1 className="font-bold font-nunito text-white text-2xl">
                            Sedang Memproses..
                        </h1>
                        <p className="font-quicksand text-white">
                            Tunggu Sebentar, kami sedang memproses data anda.
                        </p>
                    </div>
                ),
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: async () => {
                    try {
                        const dataBody = {
                            fullName: fullName,
                            email: email,
                            username: username,
                            password: password
                        }

                        const response = await axios.post('https://api.skillshift.my.id/api/registerFreelancer', dataBody, {
                            withCredentials: true
                        });
                        setToken(response.data.data.token);
                        console.log(response.data.data.code);
                        return mySwal.fire({
                            icon: 'info',
                            input: 'text',
                            inputLabel: 'Kode Verifikasi',
                            inputAttributes: {
                                autocapitalize: 'off',
                                autoComplete: 'off'
                            },
                            showLoaderOnConfirm: true,
                            html: (
                                <div className="">
                                    <h1 className="font-nunito font-bold text-gray-400 text-2xl">
                                        Verifikasi Akun Anda
                                    </h1>
                                    <p className="font-quicksand text-white">
                                        Sistem kami telah memberikan kode verifikasi ke email anda di <b>{email}</b>. <br />
                                        <br />
                                        Silahkan cek email anda dan <span className="text-gray-400">Kode Verifikasi</span> yang kami berikan dibawah ini. <br />
                                    </p>
                                </div>
                            ),
                            confirmButtonText: 'Verifikasi',
                            timer: timer * 1000,
                            preConfirm: async (code) => {
                                try {
                                    const dataBody = {
                                        userVerificationCode: code,
                                        email: email
                                    }
                                    const response = await axios.post('https://api.skillshift.my.id/api/verifyFreelancer', dataBody, {
                                        withCredentials: true,
                                        headers: {
                                            'Accept': '/',
                                            'Content-Type': 'application/json',
                                            'Cache-Control': 'no-cache'
                                        }
                                    });
                                    return response;
                                } catch (error) {
                                    return error.response;
                                }
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const {data} = result.value;
                                mySwal.fire({
                                    icon: data.status === 'fail' ? 'error' : 'success',
                                    html: (
                                        <div className="">
                                            { data.status === 'fail' ? (
                                                <div>
                                                    <h1 className="text-rose-600 font-bold font-nunito text-2xl">
                                                        Verifikasi Gagal
                                                    </h1>
                                                    <p className="text-white font-quicksand">
                                                        Gagal memverifikasi kode, Silahkan coba Lagi!
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h1 className="text-green-600 font-bold font-nunito text-2xl">
                                                        Verifikasi Berhasil
                                                    </h1>
                                                    <p className="text-white font-quicksand">
                                                        Verifikasi Kode berhasil dilakukan, silahkan masuk ke akun anda!
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })
                            }
                        })
                    } catch (error) {
                        mySwal.fire({
                            icon: 'error',
                            html: (
                                <div className="">
                                    <h1 className="font-bold font-nunito text-rose-400 text-2xl">
                                        Gagal Memproses
                                    </h1>
                                    <p className="text-white font-quicksand">
                                        {error.response.data.message}
                                    </p>
                                </div>
                            ),
                            showConfirmButton: false,
                        })
                    }
                }
            })
        }
    }

    if(device === 'desktop') {
        return (
            <div className="relative w-full h-screen overflow-hidden font-quicksand">
                <img className="absolute top-0 right-0 h-full -z-40" src="https://img.freepik.com/free-photo/smart-attractive-positive-asian-business-male-wearing-glasses-work-remote-new-normal-lifestyle-hand-use-laptop-tele-conference-onlive-videocall-meeting-remote-business-ideas-concept_609648-1157.jpg?w=1060&t=st=1702548505~exp=1702549105~hmac=ddd728390417a0859b20d8e3d5e1149f2a843ffa36684de82bafa23ef660c0b1" alt="" />
                <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-gray-900 via-gray-900/80 from-30% via-70% -z-30"></div>
                <div className="absolute top-0 left-0 w-full h-screen p-10 z-10">
                    <h1 className="flex items-center gap-5 font-quicksand font-bold text-white text-2xl">
                        <img className="w-12" src="/skillshift-logo.png" alt="" />
                        Skill Shift
                    </h1>
                    <hr className="my-2 opacity-0" />
                    <div className="p-5 w-full">
                        <h1 className="text-white text-2xl font-extralight">
                            Ayo, Gratis!
                        </h1>
                        <hr className="my-2 opacity-0" />
                        <h1 className="font-nunito font-extrabold text-white text-[100px] -mt-7">
                            Buat akun baru<span className="text-yellow-500">.</span>
                        </h1>
                        <p className="text-white text-2xl font-extralight">
                            Sudah punya akun? <Link to={'/signin'} className="text-yellow-500 cursor-pointer" >
                                Masuk sekarang juga.
                            </Link>
                        </p>
                        <hr className="my-5 opacity-0" />
                        <form action="" className="space-y-5 w-full">
                            <div className="relative p-2 py-4 rounded-2xl bg-gray-800 w-1/3 hover:shadow-lg  transition-all duration-300">
                                <input type="text" id='nama' onChange={e => setFullName(state => state = e.target.value)} className="cursor-text w-full px-3 bg-transparent outline-none text-white font-bold peer mt-2" placeholder="" autoComplete="off" />
                                <label htmlFor="nama" className="cursor-text text-white absolute font-thin top-0 left-0 px-7 translate-y-1 scale-75 origin-left peer-placeholder-shown:translate-y-5 peer-focus:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:scale-75  transition-all duration-300">Masukkan Nama Lengkap Anda</label>
                                <div className="absolute top-0 right-0 w-12 h-full flex items-center justify-center text-gray-400">
                                    <FontAwesomeIcon icon={faUser} size="lg"/>
                                </div>
                            </div>
                            <div className="relative p-2 py-4 rounded-2xl bg-gray-800 w-1/3 hover:shadow-lg  transition-all duration-300">
                                <input type="email" id='email' onChange={e => setEmail(state => state = e.target.value)}   className="cursor-text w-full px-3 bg-transparent outline-none text-white font-bold peer mt-2" placeholder="" autoComplete="off" />
                                <label htmlFor="email" className="cursor-text text-white absolute font-thin top-0 left-0 px-7 translate-y-1 scale-75 origin-left peer-placeholder-shown:translate-y-5 peer-focus:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:scale-75  transition-all duration-300">Masukkan Email Anda</label>
                                <div className="absolute top-0 right-0 w-12 h-full flex items-center justify-center text-gray-400">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 gap-5 items-center">
                                <div className="relative p-2 py-4 rounded-2xl bg-gray-800 w-1/2 hover:shadow-lg  transition-all duration-300">
                                    <input type="text" id='username' onChange={e => setUsername(state => state = e.target.value)}   className="cursor-text w-full px-3 bg-transparent outline-none text-white font-bold peer mt-2" placeholder="" autoComplete="off" />
                                    <label htmlFor="username" className="cursor-text text-white absolute font-thin top-0 left-0 px-7 translate-y-1 scale-75 origin-left peer-placeholder-shown:translate-y-5 peer-focus:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:scale-75  transition-all duration-300">Username anda</label>
                                    <div className="absolute top-0 right-0 w-12 h-full flex items-center justify-center text-gray-400">
                                        <FontAwesomeIcon icon={faUserCheck} size="lg"/>
                                    </div>
                                </div>
                                <div className="relative p-2 py-4 rounded-2xl bg-gray-800 w-1/2 hover:shadow-lg  transition-all duration-300">
                                    <input type="text" id='password' onChange={e => setPassword(state => state = e.target.value)} className="cursor-text w-full px-3 bg-transparent outline-none text-white font-bold peer mt-2" placeholder="" autoComplete="off" />
                                    <label htmlFor="password" className="cursor-text text-white absolute font-thin top-0 left-0 px-7 translate-y-1 scale-75 origin-left peer-placeholder-shown:translate-y-5 peer-focus:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:scale-75  transition-all duration-300">Password anda</label>
                                    <div className="absolute top-0 right-0 w-12 h-full flex items-center justify-center text-gray-400">
                                        <FontAwesomeIcon icon={faCog} size="lg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/3 gap-5 items-center">
                                <button type="button" onClick={() => verifyAccount('user')} className="font-nunito w-1/2 h-16 rounded-2xl text-zinc-900 bg-yellow-600 font-extrabold hover:shadow-lg hover:shadow-yellow-600 duration-300 focus:bg-yellow-700 focus:shadow-lg focus:shadow-yellow-600">
                                    Daftar sebagai Konsumen
                                </button>
                                <button type="button" onClick={() => verifyAccount('freelancer')} className="font-nunito w-1/2 h-16 rounded-2xl text-zinc-900 bg-gray-400 font-extrabold hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 focus:bg-gray-500 focus:shadow-lg focus:shadow-gray-400">
                                    Daftar sebagai Freelancer
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