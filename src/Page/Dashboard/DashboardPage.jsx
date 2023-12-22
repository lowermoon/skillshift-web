import { faDoorOpen, faFile, faFileCirclePlus, faPeopleArrows, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ProjectList from "../../Components/ProjectList";
import NewProject from "./NewProject";
import OffersPage from "./OffersPage";

const mySwal = withReactContent(Swal);
export default function DashboardPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [project, setProject] = useState()
    const [newPage, setNewPage] = useState(false);
    const [offerPage, setOfferPage] = useState(false);
    document.body.classList.add('bg-zinc-100');

    const logOut = async () => {
        mySwal.fire({
            icon: 'warning',
            html: (
                <h1 className="text-zinc-700 font-bold font-nunito text-2xl">
                    Apakah Anda Yakin?
                </h1>
            ),
            confirmButtonText: 'Ya, Saya Yakin',
            confirmButtonColor: '#FBBF24',
            showCancelButton: true,
            cancelButtonColor: '#EF4444',
            cancelButtonText: 'Batal',
        }).then(async (result) => {
            if(result.isConfirmed){
                try {
                    await axios.post('https://api.skillshift.my.id/api/logout', {
                        withCredentials: true
                    })
                    localStorage.removeItem('token');
                    navigate('/login');
                } catch (error) {
                    console.log(error.response);
                }
            }
        })
    }

    const getUser = async () => {
        try {
            const { data } = await axios.get('https://api.skillshift.my.id/api/profile', {
                withCredentials: true
            })
            console.log(data);
            setUser(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    const getProject = async () => {
        try {
            const { data } = await axios.get('https://api.skillshift.my.id/api/projectUser', {
                withCredentials: true
            })
            setProject(state => state = data.result.project);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        if(!localStorage.getItem('token')) navigate('/login');
        
        getProject();
        getUser();
    }, [])

    return (
        <div className="flex justify-center w-full">
            <NewProject newPage={newPage} setNewPage={setNewPage} getProject={getProject} />
            <OffersPage offerPage={offerPage} setOfferPage={setOfferPage} getProject={getProject} projects={project}/>
            <div className="w-2/3 p-10 flex gap-5 ">
                <div className="w-4/6 relative overflow-auto h-auto max-h-[650px] space-y-5">
                    <div className="w-full rounded-2xl p-5 border flex items-center gap-5">
                        <div className="w-3/4">
                            <div className="flex gap-5 w-full">
                                <div className="flex w-16 h-16 rounded-lg bg-zinc-200 items-center justify-center">
                                    <FontAwesomeIcon icon={faPeopleArrows} className="text-zinc-700 w-8 h-8 m-auto" />
                                </div>
                                <article className="w-5/6">
                                    <h1 className="font-nunito font-bold text-xl text-zinc-600">
                                        Tidak ada Proyek Aktif
                                    </h1>
                                    <hr className="my-3 opacity-0" />
                                    <p className="text-zinc-700 font-quicksand">
                                        Tampaknya anda belum memiliki <span className="font-bold">
                                            Proyek yang dikerjakan oleh Freelancer.
                                        </span>. <br />
                                        Silahkan <b>Buat proyek baru atau pilih Freelancer</b> untuk mengerjakan proyek anda.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="w-1/4 border"></div>
                    </div>
                    <div className="my-5 w-full rounded-2xl bg-zinc-700 p-5 flex justify-center">
                        <button type="button" onClick={() => setNewPage(state => !state)} className="flex rounded-2xl p-2 hover:bg-zinc-600 gap-4 w-1/2">
                            <div className="flex items-center justify-center w-1/6 h-10 rounded-lg bg-zinc-900 text-yellow-400">
                                <FontAwesomeIcon icon={faFileCirclePlus} />
                            </div>
                            <article className="w-5/6">
                                <h1 className="font-nunito font-bold text-yellow-400">
                                    Buat Project Baru
                                </h1>
                                <p className="font-quicksand text-zinc-300">
                                    Buatlah proyek baru anda untuk memulai
                                </p>
                            </article>
                        </button>
                        <button type="button" onClick={() => setOfferPage(state => !state)}  className="flex rounded-2xl p-2 hover:bg-zinc-600 gap-4 w-1/2">
                            <div className="flex items-center justify-center w-1/6 h-10 rounded-lg bg-zinc-900 text-yellow-400">
                                <FontAwesomeIcon icon={faPeopleArrows} />
                            </div>
                            <article className="w-5/6">
                                <h1 className="font-nunito font-bold text-yellow-400">
                                    Daftar Tawaran
                                </h1>
                                <p className="font-quicksand text-zinc-300">
                                    Daftar Tawaran dari Proyek-proyek yang sudah anda buat.
                                </p>
                            </article>
                        </button>
                    </div>
                    <h1 className="font-nunito font-bold text-zinc-700 text-2xl flex items-center gap-5">
                        <div className="flex items-center justify-center w-10 h-10 bg-zinc-700 rounded-full">
                            <FontAwesomeIcon icon={faFile} className="text-white w-4 h-4" />
                        </div>
                        Daftar Proyek
                    </h1>
                    <ProjectList projects={project} getProject={getProject} />
                </div>
                <div className="w-2/6 p-5 bg-zinc-800 rounded-2xl h-fit">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="flex items-center text-white font-nunito mb-5">
                            <img className="w-10 mr-3" src="/skillshift-logo-nobg.png" alt="" />
                            Skill <span className="text-yellow-500">Shift</span>
                        </h1>
                        <img className="w-32 h-32 object-cover rounded-full" src={user ? user.profile : 'https://akcdn.detik.net.id/visual/2023/12/17/presiden-jokowi-bersama-perdana-menteri-jepang-fumio-kishida-dan-para-pemimpin-negara-asia-tenggara-dalam-ktt-perayaan-50-tahu-1_169.jpeg?w=400&q=90'} alt="" />
                        <h1 className="font-quicksand text-yellow-500 font-bold text-2xl">
                            {user ? user.name : 'No Full Name'}
                        </h1>
                        <p className="text-zinc-400 font-quicksand">
                            {user ? user.email : 'No Email'}
                        </p>
                        <p className="px-2 py-1 rounded-lg bg-zinc-700 font-nunito font-bold text-sm text-cyan-100">
                           {user ? user.point : '0'} Special Points 
                        </p>
                        <hr className="my-5 border-zinc-500 w-full" />
                        <div className="flex justify-center items-center">
                            <Link className="flex items-center gap-2 text-yellow-500 hover:bg-zinc-700 px-2 py-1 rounded-lg font-nunito">
                                <FontAwesomeIcon icon={faUserCog} />
                                Ubah Profile
                            </Link>
                            <button type="button" onClick={() => logOut()} className="flex items-center gap-2 text-rose-500 hover:bg-zinc-700 px-2 py-1 rounded-lg font-nunito">
                                <FontAwesomeIcon icon={faDoorOpen} />
                                Keluar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}