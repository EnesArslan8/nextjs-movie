import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c822fda16959348dcc164adaed2d503b&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = res.json();
  console.log(data?.results);
  return (
    <div>
      {!data?.results ? <div>Böyle bir film bulunamadı!</div> :
        <div className="flex items-center flex-wrap gap-3">
            {
                data?.results?.map((item,id)=>(
                    <Movies key={id} item={item}/>
                ))
            }
        </div>
      }
    </div>
  );
};

export default Page;
