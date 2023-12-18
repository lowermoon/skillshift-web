import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

export default function HomePage({ title }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});
    const [hoverActive, setHoverActive] = useState(false);
    const mouseOver = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect();
        const x = Math.round(e.clientX - buttonRect.left);
        const y = Math.round(e.clientY - buttonRect.top);   
        setMousePosition(state => ({ ...state, x, y }));
    }
    document.body.classList.add('bg-zinc-900');

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="relative w-full overflow-hidden">
            <div className="fixed top-0 left-0 backdrop-blur-lg w-full h-20 z-50 flex justify-between items-center px-20">
                <div className="flex gap-10 items-center w-1/3">
                    <Link to="/about" className=" font-quicksand font-extralight text-white transition-all duration-300">
                        Tentang Kami
                    </Link>
                    <Link to="/about" className="font-quicksand font-extralight text-white">
                        F A Q
                    </Link>
                </div>
                <h1 className="flex w-1/3 items-center justify-center gap-2 font-quicksand text-white text-2xl">
                    <img className="w-16" src="/skillshift-logo-nobg.png" alt="" />
                    Skill Shift
                </h1>
                <div className="flex w-1/3 gap-10 items-center justify-end">
                    <button className="text-white p-2 rounded-2xl border border-white/50 hover:border-white px-2 font-extralight transition-all duration-300">
                        Dashboard
                    </button>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden p-5">
                <img className="opacity-70 absolute top-0 left-0 w-full h-full object-cover -z-50" src="/bg/grid-pattern-2.png" alt="" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-yellow-500 blur-[200px] opacity-20 translate-x-60 -translate-y-60"></div>
                <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-full bg-white -translate-x-[400px] translate-y-[300px] blur-[150px]"></div>                
                <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-white blur-[200px] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                    <div className="w-1/2 pl-40">
                        <h1 className="font-nunito text-white font-extrabold text-6xl">
                            Bergabunglah <span className="text-yellow-200">Sekarang</span>, dan raih <span className="text-blue-200">Peluang tanpa Batas!</span>
                        </h1>
                        <hr className="my-5 border border-zinc-700 w-1/5" />
                        <p className="text-white font-quicksand">
                        Temukan ribuan proyek freelance, bangun portofolio menarik.. Dengan sistem penawaran yang adil dan fokus pada reputasi, <span className="text-yellow-300">Skillshift </span> adalah kunci sukses perjalanan freelance Anda. Bergabunglah sekarang dan raih peluang tanpa batas!
                        </p>
                    </div> 
                    <div className="w-1/2 flex justify-center">
                        <img src="/skillshift-logo-nobg.png" alt="" />
                    </div> 
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <img className="absolute top-0 left-0 w-full -z-50 opacity-50" src="/bg/grid-pattern-2.png" alt="" />
                
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <img className="absolute top-0 left-0 w-full -z-50 opacity-50" src="/bg/grid-pattern-2.png" alt="" />
                <div data-aos='fade-up' className="absolute top-0 left-0 w-full h-full z-10 flex items-center gap-5">
                    <div className="w-1/2 pl-40">
                        <div className="flex gap-5 items-center">
                            <img className="w-24" src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png" alt="" />
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-700 font-nunito font-bold w-fit text-6xl">
                                Cloud Computing
                            </h1>
                        </div>
                        {/* <hr className="my-3 opacity-0" /> */}
                        <div className="pl-10 pt-5">
                            <div className=" border-l border-zinc-600 relative space-y-5">
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Deploying an API to Google Cloud Platform
                                </p>
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Deploying Machine Learning Model to Google Cloud
                                </p>
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Handling a Storage such as Google Cloud Storage and Cloud Sql
                                </p>
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Handling backend and reserve endpoints for Mobile Application
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pl-20 space-y-5 pr-20">
                        <div className="w-full flex gap-10 justify-between">
                            <div className="article flex gap-10">
                                <h1 className="text-zinc-700 font-nunito font-bold text-2xl">
                                    01
                                </h1> 
                                <article>
                                    <h1 className="font-bold text-white font-nunito text-2xl">
                                        M. Adryan
                                    </h1>
                                    <p className="text-zinc-500 font-quicksand">
                                        Cloud Computing Cohort
                                    </p>
                                    <hr className="my-1 opacity-0" />
                                    <div className="flex items-center gap-5">
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                                        </Link>
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" alt="" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                            <img className="w-40 h-40 rounded-full object-cover" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2023/10/10/prabowo-subianto-3-3202899213.jpg" alt="" />
                        </div>
                        <div className="w-full flex gap-10 justify-between">
                            <div className="article flex gap-10">
                                <h1 className="text-zinc-700 font-nunito font-bold text-2xl">
                                    02
                                </h1> 
                                <article>
                                    <h1 className="font-bold text-white font-nunito text-2xl">
                                        Ziyad Jahizh Kartiwa
                                    </h1>
                                    <p className="text-zinc-500 font-quicksand">
                                        Cloud Computing Cohort
                                    </p>
                                    <hr className="my-1 opacity-0" />
                                    <div className="flex items-center gap-5">
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                                        </Link>
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" alt="" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                            <img className="w-40 h-40 rounded-full object-cover" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2023/10/10/prabowo-subianto-3-3202899213.jpg" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <img className="absolute top-0 left-0 w-full -z-50 opacity-50" src="/bg/grid-pattern-2.png" alt="" />
                <div data-aos='fade-up' className="absolute top-0 left-0 w-full h-full z-10 flex items-center gap-5">
                    <div className="w-1/2 pl-40">
                        <div className="flex gap-5 items-center">
                            <img className="w-24" src="https://cdn-icons-png.flaticon.com/128/888/888839.png?ga=GA1.1.1610299679.1689303514&semt=ais" alt="" />
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-700 font-nunito font-bold w-fit text-6xl">
                                Mobile Development
                            </h1>
                        </div>
                        {/* <hr className="my-3 opacity-0" /> */}
                        <div className="pl-10 pt-5">
                            <div className=" border-l border-zinc-600 relative space-y-5">
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Handling UI / UX for Mobile App
                                </p>
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Reserves all the functions for endpoints
                                </p>
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Handling backend for Mobile Application
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pl-20 space-y-5 pr-20">
                        <div className="w-full flex gap-10 justify-between">
                            <div className="article flex gap-10">
                                <h1 className="text-zinc-700 font-nunito font-bold text-2xl">
                                    03
                                </h1> 
                                <article>
                                    <h1 className="font-bold text-white font-nunito text-2xl">
                                        Baharudin Zaelani
                                    </h1>
                                    <p className="text-zinc-500 font-quicksand">
                                        Mobile Development Cohort
                                    </p>
                                    <hr className="my-1 opacity-0" />
                                    <div className="flex items-center gap-5">
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                                        </Link>
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" alt="" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                            <img className="w-40 h-40 rounded-full object-cover" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2023/10/10/prabowo-subianto-3-3202899213.jpg" alt="" />
                        </div>
                        <div className="w-full flex gap-10 justify-between">
                            <div className="article flex gap-10">
                                <h1 className="text-zinc-700 font-nunito font-bold text-2xl">
                                    04
                                </h1> 
                                <article>
                                    <h1 className="font-bold text-white font-nunito text-2xl">
                                        Jihaan Jasmine Jahroo
                                    </h1>
                                    <p className="text-zinc-500 font-quicksand">
                                        Mobile Development Cohort
                                    </p>
                                    <hr className="my-1 opacity-0" />
                                    <div className="flex items-center gap-5">
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                                        </Link>
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" alt="" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                            <img className="w-40 h-40 rounded-full object-cover" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2023/10/10/prabowo-subianto-3-3202899213.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <img className="absolute top-0 left-0 w-full -z-50 opacity-50" src="/bg/grid-pattern-2.png" alt="" />
                <div data-aos='fade-up' className="absolute top-0 left-0 w-full h-full z-10 flex items-center gap-5">
                    <div className="w-1/2 pl-40">
                        <div className="flex gap-5 items-center">
                            <img className="w-24" src="https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png" alt="" />
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-700 font-nunito font-bold w-fit text-6xl">
                                Machine Learning
                            </h1>
                        </div>
                        {/* <hr className="my-3 opacity-0" /> */}
                        <div className="pl-10 pt-5">
                            <div className=" border-l border-zinc-600 relative space-y-5">
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Creating Model for Face ID Scanner
                                </p>
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Creating Model for Recommendations
                                </p>
                                <p className="text-white font-quicksand text-2xl flex items-center gap-10 -translate-x-4">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" />
                                    Creating Model for ID Card Scanner
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pl-20 space-y-5 pr-20">
                        <div className="w-full flex gap-10 justify-between">
                            <div className="article flex gap-10">
                                <h1 className="text-zinc-700 font-nunito font-bold text-2xl">
                                    05
                                </h1> 
                                <article>
                                    <h1 className="font-bold text-white font-nunito text-2xl">
                                        Ridwan Hidayatullah
                                    </h1>
                                    <p className="text-zinc-500 font-quicksand">
                                        Machine Learning Cohort
                                    </p>
                                    <hr className="my-1 opacity-0" />
                                    <div className="flex items-center gap-5">
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                                        </Link>
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" alt="" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                            <img className="w-40 h-40 rounded-full object-cover" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2023/10/10/prabowo-subianto-3-3202899213.jpg" alt="" />
                        </div>
                        <div className="w-full flex gap-10 justify-between">
                            <div className="article flex gap-10">
                                <h1 className="text-zinc-700 font-nunito font-bold text-2xl">
                                    06
                                </h1> 
                                <article>
                                    <h1 className="font-bold text-white font-nunito text-2xl">
                                        Ramadhania Humaira
                                    </h1>
                                    <p className="text-zinc-500 font-quicksand">
                                        Mobile Development Cohort
                                    </p>
                                    <hr className="my-1 opacity-0" />
                                    <div className="flex items-center gap-5">
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                                        </Link>
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" alt="" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                            <img className="w-40 h-40 rounded-full object-cover" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2023/10/10/prabowo-subianto-3-3202899213.jpg" alt="" />
                        </div>
                        <div className="w-full flex gap-10 justify-between">
                            <div className="article flex gap-10">
                                <h1 className="text-zinc-700 font-nunito font-bold text-2xl">
                                    07
                                </h1> 
                                <article>
                                    <h1 className="font-bold text-white font-nunito text-2xl">
                                        Fachrur Rozi
                                    </h1>
                                    <p className="text-zinc-500 font-quicksand">
                                        Machine Learning Cohort
                                    </p>
                                    <hr className="my-1 opacity-0" />
                                    <div className="flex items-center gap-5">
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                                        </Link>
                                        <Link to={''}>
                                            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" alt="" />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                            <img className="w-40 h-40 rounded-full object-cover" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2023/10/10/prabowo-subianto-3-3202899213.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-60 overflow-hidden flex items-center justify-center">
                <img className="absolute top-0 left-0 w-full -z-50 opacity-50" src="/bg/grid-pattern-2.png" alt="" />
                <div className="absolute top-0 left-0 w-full flex justify-center">
                    <div className="w-[1000px] h-[400px] rounded-full bg-rose-500 translate-y-[300px] blur-[100px]"></div>
                </div>
                <div className="flex gap-10 items-center">
                    <img src="https://lh3.googleusercontent.com/W7tbJACxk87bqcJTyOpnb_bN8YkinnVdymXeDHlZpoR9IGuYqBCIX9SckYwU-GNkpkVxANv6HfbJfV99GW72tSugR5t2sjC8-BCzXQ=w600" alt="" />
                    <img src="https://lh3.googleusercontent.com/kiohg3T6ccSMpQ_YXCkSWvjlanIgvXgqpFhOLGhFFrA7D3L9udIy-41618GxASYVv2I52E3rXYuynHGMTj3wJqKZUTn20XPkzUL14rdPh_g_Chyj5HQ=w600" alt="" />
                    <img src="https://lh3.googleusercontent.com/-jSul-Vi92DmUBazZSfzSx1aG4QA623quEOW6dBXldYbkV3b6KSgp12LDoN7XYEL5W78usVmVknRviz8dYpskapNA9FHwiRPU9uAIBA=w600" alt="" />
                    <img className="w-72" src="https://lh3.googleusercontent.com/NtORZkpsdeRJDkdA4DdUYwMUdpL1pNNO1HOVby1F6Qst1jwx6yVRkDmHJeaOtWzFLQWMPZxU_XFurb3646KdxYX8n7cYNoJeC0kpiVOhPWhayI5Z6e0X=w600" alt="" />
                </div>
            </div>

        </div>
    )
}