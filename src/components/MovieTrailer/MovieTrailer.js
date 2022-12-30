import { React, useEffect } from 'react'
import movieStyle from './MovieTrailer.module.css'

const MovieTrailer = ({ trailername, _id, TrailerURL, EventGenre, csCount, ImageUrl }) => {
    TrailerURL = TrailerURL.replace('watch?v=', 'embed/')
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
            </div>
        </div>
    )
}

export default MovieTrailer