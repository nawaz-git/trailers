import { React, useState, useEffect } from 'react'
import styles from './Home.module.css'
import Movie from '../Movie/Movie'
import MovieTrailer from '../MovieTrailer/MovieTrailer'
import getFirstItemofRow from '../Helpers/getFirstRow'
import axios from 'axios'
import Header from '../Header/Header'

const Home = () => {
  let length = 0
  let [movies, setMovies] = useState([])
  const [apiItems, setApiItems] = useState([])
  let filters = {
    language: '',
    genre: ''
  }
  const [langList, setLangList] = useState([])

  const getRowLength = () => {
    const grid = Array.from(document.querySelector("#grid").children);
    const baseOffset = grid[0].offsetTop;
    const breakIndex = grid.findIndex(item => item.offsetTop > baseOffset);
    const numPerRow = (breakIndex === -1 ? grid.length : breakIndex);
    return numPerRow
  }

  useEffect(() => {
    axios.get('https://in.bmscdn.com/m6/static/interview-mock/data.json').then(async (response) => {
      let arr = []
      for (const key in response.data.moviesData) {
        arr.push({ _id: key, ...response.data.moviesData[key] })
      }
      setApiItems(arr)
      setLangList(response.data.languageList)

      setMovies(arr.map((item) => {
        return <Movie name={item?.EventTitle}
          ImageUrl={item?.EventImageUrl}
          TrailerURL={item?.TrailerURL}
          language={item?.EventLanguage}
          id={item?._id}
          handleClick={handleClick}
          movies={arr}
          key={item?._id}
        ></Movie >
      }))

      console.log(arr);
      setTimeout(() => {
        length = getRowLength()
      })

    })
  }, [])

  const handleClick = async (item) => {
    console.log(item);
    let allmovies = []
    let movie = {
      name: item.name,
      id: 'trailer' + item.id,
      flag: true, TrailerURL: item.TrailerURL,
      EventGenre: item.EventGenre,
      csCount: item.csCount,
      ImageUrl: item.ImageUrl,
      EventLanguage: item.language
    }
    console.log(movie);
    allmovies = item.movies
    allmovies = allmovies.filter((e) => {
      return e.flag === undefined
    })

    const insert = (arr, index, newItem) => [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index)
    ]

    let index;
    allmovies.forEach((ele, i) => {
      if (item.id === ele._id) {
        index = i + 1
      }
    })

    length = getRowLength()
    let number = getFirstItemofRow(index, length, allmovies.length)
    allmovies = insert(allmovies, number - 1, movie)
    setMovies(allmovies.map((item) => {
      if (item.flag) {
        return <MovieTrailer trailername={item?.name} id={item?._id} handleClick={handleClick} TrailerURL={item?.TrailerURL}
          EventGenre={item?.EventGenre} csCount={item?.csCount} ImageUrl={item?.ImageUrl}
          language={item?.EventLanguage}
          key={'trailer' + item._id} />
      } else {
        return <Movie name={item?.EventTitle} ImageUrl={item?.EventImageUrl} id={item?._id} handleClick={handleClick}
          TrailerURL={item?.TrailerURL}
          language={item?.EventLanguage}
          key={item._id} movies={allmovies} />
      }
    }))
  }


  const handleChange = (value) => {
    if (value !== '') {
      let arr = apiItems.filter((item) => {
        if (item.EventLanguage === value) {
          return item
        }
      })
      setMovies(arr.map((item) => {
        return <Movie name={item?.EventTitle}
          ImageUrl={item?.EventImageUrl}
          EventLanguage={item?.EventLanguage}
          TrailerURL={item?.TrailerURL}
          id={item?._id}
          handleClick={handleClick}
          movies={arr}
          key={item?._id}
        ></Movie >
      }))
    } else {
      setMovies([])
    }
  }

  return (<>
    <Header list={langList} filterChanged={handleChange} />
    <div className={styles.main}>
      <div className={styles.items} id="grid">
        {movies}
      </div>
    </div>
  </>
  )
}

export default Home