import { React, useState, useEffect } from 'react'
import styles from './Header.module.css'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


const Header = ({ list, filterChanged }) => {
  const [comingsoon, setcomingsoon] = useState(true)
  useEffect(() => {
  }, [])

  const handleChange = (event) => {
    filterChanged(event.target.value)
  }


  return (
    <>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <span>Movie Trailers</span>
            </div>
            <div className={styles.types}>
              <div className={comingsoon ? styles.active : undefined}>
                <button onClick={() => { setcomingsoon(!comingsoon) }}>COMING SOON</button>
              </div>
              <div className={!comingsoon ? styles.active : undefined}>
                <button onClick={() => { setcomingsoon(!comingsoon) }}>NOW SHOWING</button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.filters}>
              <select>
                <option>Popular</option>
                <option>Fresh</option>
              </select>
              <select onChange={handleChange}>
                {list.map(item => {
                  return <option value={item}>{item}</option>
                })
                }
              </select>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles['bottom-title']}>Applied Filters: &nbsp;</span>
          <div className={styles.filter}>English
            <CloseIcon fontSize='small' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header