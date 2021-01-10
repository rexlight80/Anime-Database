import React from "react";
import AnimeCard from "./AnimeCard.js"

const MainContent = ({HandleSearch,search,animeList,setSearch}) => {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={HandleSearch}>
          <input type="search" placeholder="Search for an anime..." required onChange={(e)=>setSearch(e.target.value)} value={search} />
        </form>
      </div>
      <div className="anime-list">
      {
        animeList.map(anime=>(
          <AnimeCard anime={anime} key={anime.mal_id}/>
        ))
      }
      </div>
    </main>
  );
};

export default MainContent;
