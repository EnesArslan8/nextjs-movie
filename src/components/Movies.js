"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Movies({ item }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${item.id}`)}
      className="min-w-[500px] relative max-h-[300px] cursor-pointer imgContainer"
    >
      <Image
        style={{ objectFit: "cover" }}
        width={500}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          item?.poster_path || item?.backdrop_path
        }`}
      />
      <div className="absolute bottom-0 p-3  w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity ">
        <div className="text-2xl font-bold">{item?.title}</div>
        <div className="">
          {" "}
          {item?.release_date} -{item?.vote_average}{" "}
        </div>
      </div>
    </div>
  );
}

export default Movies;
