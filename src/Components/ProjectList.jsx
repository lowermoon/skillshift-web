import React from 'react';
import { faClock, faCogs, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ProjectList({projects}) {
    console.log(typeof(projects));
    return projects ? (
        <>
            {projects.map((item, index) => (
                <div key={index} className="w-full flex rounded-lg p-2 items-center hover:bg-zinc-200 gap-5 group">
                    <p className="flex items-center gap-2 w-1/6 font-quicksand text-sm text-zinc-700">
                        <FontAwesomeIcon icon={faClock} />
                        {item.deadline}
                    </p>
                    <p className="font-bold text-zinc-700 font-nunito text-sm w-3/6">
                        {item.project_name}
                    </p>
                    <p className="w-1/6 font-bold text-zinc-700 font-nunito text-sm">
                        {item.project_category}
                    </p>
                    <div className="w-1/6 flex justify-center items-center opacity-0 group-hover:opacity-100">
                        <Link to={'/project/edit'} className="hover:bg-zinc-300 rounded-lg p-1 w-10 h-10 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCogs} className="text-yellow-600 w-6 h-6" />
                        </Link>
                        <Link to={`/api/deleteProject?project_id`} className="hover:bg-zinc-300 rounded-lg p-1 w-10 h-10 flex items-center justify-center">
                            <FontAwesomeIcon icon={faTrash} className="text-red-600 w-5 h-5" />
                        </Link>
                    </div>
                </div>
             ))} 
        </>
    ) : (
        <div className="flex justify-center w-full">
            <h1 className="text-zinc-500">
                Kamu belum memiliki proyek.
            </h1>
        </div>
    )
}