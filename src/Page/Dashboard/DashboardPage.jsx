import { faClock, faCogs, faDoorOpen, faFile, faFileCirclePlus, faPeopleArrows, faTrash, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function DashboardPage() {
    document.body.classList.add('bg-zinc-100');
    return (
        <div className="flex justify-center w-full">
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
                        <Link to={'/project/new'} className="flex rounded-2xl p-2 hover:bg-zinc-600 gap-4 w-1/2">
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
                        </Link>
                        <Link to={'/project'} className="flex rounded-2xl p-2 hover:bg-zinc-600 gap-4 w-1/2">
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
                        </Link>
                    </div>
                    <h1 className="font-nunito font-bold text-zinc-700 text-2xl flex items-center gap-5">
                        <div className="flex items-center justify-center w-10 h-10 bg-zinc-700 rounded-full">
                            <FontAwesomeIcon icon={faFile} className="text-white w-4 h-4" />
                        </div>
                        Daftar Proyek
                    </h1>
                    <div>
                        <div className="w-full flex rounded-lg p-2 items-center hover:bg-zinc-200 gap-5 group">
                            <p className="flex items-center gap-2 w-1/6 font-quicksand text-sm text-zinc-700">
                                <FontAwesomeIcon icon={faClock} />
                                20/11/2021
                            </p>
                            <p className="font-bold text-zinc-700 font-nunito text-sm w-3/6">
                                Joki Mobile Legends
                            </p>
                            <p className="w-1/6 font-bold text-zinc-700 font-nunito text-sm">
                                Moba
                            </p>
                            <div className="w-1/6 flex justify-center items-center opacity-0 group-hover:opacity-100">
                                <Link to={'/project/edit'} className="hover:bg-zinc-300 rounded-lg p-1 w-10 h-10 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCogs} className="text-yellow-600 w-6 h-6" />
                                </Link>
                                <Link to={'project/delete'} className="hover:bg-zinc-300 rounded-lg p-1 w-10 h-10 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faTrash} className="text-red-600 w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 p-5 bg-zinc-800 rounded-2xl h-fit">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="flex items-center text-white font-nunito mb-5">
                            <img className="w-10 mr-3" src="/skillshift-logo-nobg.png" alt="" />
                            Skill <span className="text-yellow-500">Shift</span>
                        </h1>
                        <img className="w-32 h-32 object-cover rounded-full" src="https://fahum.umsu.ac.id/wp-content/uploads/2023/11/biografi-lengkap-ibu-megawati-sukarnoputri-presiden-kelima-indonesia.jpg" alt="" />
                        <h1 className="font-quicksand text-yellow-500 font-bold text-2xl">
                            Ziyad Jahizh K
                        </h1>
                        <p className="text-zinc-400 font-quicksand">
                            kakangtea74@gmail.com
                        </p>
                        <p className="px-2 py-1 rounded-lg bg-zinc-700 font-nunito font-bold text-sm text-cyan-100">
                           1000 Exp 
                        </p>
                        <hr className="my-5 border-zinc-500 w-full" />
                        <div className="flex justify-center items-center">
                            <Link className="flex items-center gap-2 text-yellow-500 hover:bg-zinc-700 px-2 py-1 rounded-lg font-nunito">
                                <FontAwesomeIcon icon={faUserCog} />
                                Ubah Profile
                            </Link>
                            <Link className="flex items-center gap-2 text-rose-500 hover:bg-zinc-700 px-2 py-1 rounded-lg font-nunito">
                                <FontAwesomeIcon icon={faDoorOpen} />
                                Keluar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}