import { getMovieDetail } from '@/apiRequests/getMovieDetail';
import { IMAGE_URL } from '@/data/Constants';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {

    const movie = await getMovieDetail(params.id);

  return (
    <>
      <div className="mx-auto mt-32 flex flex-col items-center border rounded-lg px-6 py-4 shadow md:flex-row md:max-w-3xl border-gray-700 bg-gray-800/80">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`${IMAGE_URL}/w500/${movie.poster_path}`} alt={movie.title} />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{movie.title}</h5>
            <p className="mb-3 font-normal text-gray-400">{movie.overview}</p>
        </div>
      </div>
      <img className="w-screen h-screen absolute inset-0 -z-10 opacity-60" src={`${IMAGE_URL}/original/${movie.backdrop_path}`} />
    </>
  )
}
