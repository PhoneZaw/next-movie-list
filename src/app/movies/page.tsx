"use client";

import { ReturnType } from "@/data/ReturnType";
import Navigator from "@/components/Navigator";
import MovieComponent from "@/components/MovieComponent";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMoviesResult } from "@/apiRequests/getMovieList";

export default function Movies({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const router = useRouter();

  const currentPageNo = parseInt(searchParams?.p || "1");

  const searchTerm = searchParams?.search || "";

  const [moviesResult, setMoviesResult] = useState<ReturnType | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    updateData();

    async function updateData() {

      setIsLoading(true);

      const result = await getMoviesResult(currentPageNo, searchTerm);
      setMoviesResult(result);

      setIsLoading(false);
    }

  }, [searchParams]);

  if(isLoading){
    return <p className="w-full text-center mt-10">Loading...</p>
  }

  if (!moviesResult) {
    return;
  }

  const navigateBackwardPage = () => {
    if (currentPageNo > 1) {
      router.push(`/movies?search=${searchTerm}&p=${currentPageNo - 1}`);
    }
  };

  const navigateForwardPage = () => {
    if (currentPageNo < moviesResult.total_pages) {
      router.push(`/movies?search=${searchTerm}&p=${currentPageNo + 1}`);
    }
  };

  const navigateToPage = (pageNo: Number) => {
    if (currentPageNo < moviesResult.total_pages) {
      router.push(`/movies?search=${searchTerm}&p=${pageNo}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Navigator
        navigateBackwardPage={navigateBackwardPage}
        navigateForwardPage={navigateForwardPage}
        navigateToPage={navigateToPage}
        currentPageNo={currentPageNo}
        totalPageNo={moviesResult.total_pages}
      />

      {searchTerm.trim().length > 0 && (
        <p className="text-xl font-semibold mb-5">
          Search result for - {searchTerm}
        </p>
      )}

      {currentPageNo > 1 && (
        <p className="text-xl font-semibold mb-5">
          Current Page - {currentPageNo}
        </p>
      )}

      {moviesResult.results.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl">
          {moviesResult.results.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}
