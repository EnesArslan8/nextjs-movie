import React from "react";

import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=c822fda16959348dcc164adaed2d503b`
  );
  return await res.json();
};
const page = async ({ params }) => {
  const id = params.id;

  const movieDetail = await getMovie(id);
  console.log(movieDetail);
  return (
    <div className="relative p-7 min-h-screen ">
      <Image
        fill
        style={{objectFit:'cover'}}
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.poster_path || movieDetail?.backdrop_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">{movieDetail?.release_date} - {movieDetail?.vote_average }  </div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black hover:transition-all duration-300 p-2 rounded-md text-center text-lg cursor-pointer">
            Trailer
        </div>
      </div>
    </div>
  );
};

export default page;
