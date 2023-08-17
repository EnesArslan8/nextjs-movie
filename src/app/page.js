import Movies from "@/components/Movies";
import React from "react";
export default async function Home({ searchParams }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=c822fda16959348dcc164adaed2d503b&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();

  console.log(searchParams.genre);
  return (
    <div className="flex justify-center items-center flex-wrap gap-y-20 gap-x-5 ">
      
        {data?.results?.map((item, id) => (
          <Movies key={id} item={item} />
        ))}
      </div>
    
  );
}
