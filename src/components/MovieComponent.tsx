import { useState } from "react";
import { IMAGE_URL } from "../data/Constants"
import { MovieType } from "../data/MovieType"
import Image from "next/image"

interface MovieComponentProp {
    movie : MovieType
}

export default function MovieComponent({movie} : MovieComponentProp) {

  return (
    <a className="hover:scale-105 transition-all rounded-lg" href={`/movies/${movie.id}`}>
      <div className=" border rounded-lg shadow bg-gray-800 border-gray-700 h-full">
            <object className="rounded-t-lg w-full" data={`${IMAGE_URL}/w500/${movie.backdrop_path}`}>
              <img className="aspect-[1.78] " src="/imgPlaceholder.jpg" alt="default img" />
            </object>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{movie.title}</h5>
            <p className="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>
    </a>
  )
}


