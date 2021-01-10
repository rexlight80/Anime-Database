import React from 'react'

const AnimeCard = ({anime,key}) => {
    return (
        <article className="anime-card" key={key}>
        <a href={anime.url}>
        <figure>
        <img src={anime.image_url} alt="Anime image"/>
        </figure>
        <h3>{anime.title}</h3>
        </a>
        </article>
    )
}

export default AnimeCard
