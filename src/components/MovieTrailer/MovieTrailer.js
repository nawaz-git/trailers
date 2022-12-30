import { React, useEffect } from 'react'
import movieStyle from './MovieTrailer.module.css'

const MovieTrailer = ({ trailername, _id, TrailerURL, ImageUrl, language, EventGenre, ShowDate, ratings }) => {
    TrailerURL = TrailerURL.replace('watch?v=', 'embed/')
    EventGenre = EventGenre.split('|')
    console.log(EventGenre, ShowDate, ratings);
    useEffect(() => {
    }, []);


    return (
        <div className={movieStyle.main}>
            <div className={movieStyle.left}>
                <iframe
                    width="90%"
                    height="420"
                    frameBorder='0'
                    src={TrailerURL}
                ></iframe>
            </div>
            <div className={movieStyle.right} >
                <div className={movieStyle.name}>
                    {trailername}
                </div>
                <div className={movieStyle.language}>
                    {language}
                </div>
                <div className={movieStyle.genres}>
                    {EventGenre.map(genre => <div className={movieStyle.genre}>
                        {genre}
                    </div>)}

                </div>
            </div>
        </div>
    )
}

export default MovieTrailer