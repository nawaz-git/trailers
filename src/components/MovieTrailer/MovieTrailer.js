import { React, useEffect } from 'react'
import movieStyle from './MovieTrailer.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MovieTrailer = ({ trailername, _id, TrailerURL, ImageUrl, language, EventGenre, ShowDate, ratings }) => {
    TrailerURL = TrailerURL.replace('watch?v=', 'embed/')
    EventGenre = EventGenre.split('|')
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
                <div className={movieStyle.stats}>
                    <div className={movieStyle.upvotes}>
                        <div className={movieStyle.upcount}>
                            <ThumbUpIcon fontSize='large' /> &nbsp;
                            <div className={movieStyle.statscount}>
                                <span className={movieStyle.perc}>{ratings.wtsPerc}%</span>
                                <span className={movieStyle.count}> {ratings.wtsCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className={movieStyle.date}>
                        <CalendarMonthIcon fontSize='large' /> &nbsp;&nbsp;
                        {ShowDate.split(',')[0]}<br />&nbsp;
                        {ShowDate.split(',')[1]}
                    </div>
                </div>
                <div className={movieStyle.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer rutrum, augue in posuere porttitor, mauris leo vulputate tortor, id ornare erat nunc sit amet sapien. Aenean fringilla vehicula nibh sed consectetur.
                    Suspendisse efficitur ornare lorem, sit amet semper neque dictum sed. Nulla porta suscipit quam
                </div>
            </div>
        </div>
    )
}

export default MovieTrailer