import React from 'react'
import { useState } from 'react'
import movieStyle from './Movie.module.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import NoImage from '../../assets/No-Image.png'


const Movie = ({ name, ImageUrl, id, handleClick, movies, TrailerURL, language }) => {
    const [img, setImg] = useState(ImageUrl)

    const handleError = (err) => {
        setImg(NoImage)
    }

    return (
        <>
            <div className={movieStyle.main} onClick={() => handleClick({ name, ImageUrl, id, movies, TrailerURL, language })}>
                {img ? <img src={img} onError={handleError}></img> : undefined}
                <span className={movieStyle.name}>{name}</span>
                {(!img) ? <PlayCircleOutlineIcon className={movieStyle.icon} /> : undefined}
            </div>
        </>
    )
}

export default Movie