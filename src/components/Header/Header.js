import { React, useState, useEffect } from 'react'
import styles from './Header.module.css'
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ list, filterChanged }) => {
  const [comingsoon, setcomingsoon] = useState(true)
  const [appliedFilters, setAppliedFilters] = useState('')
  const [selected, setSelected] = useState('');
  useEffect(() => {
  }, [])

  const handleChange = (event) => {
    filterChanged(event.target.value)
    setAppliedFilters(event.target.value)
  }

  const clear = () => {
    filterChanged('')
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
              <select onChange={handleChange} >
                <option>All Languages</option>
                {list.map(item => {
                  return <option value={item}>{item}</option>
                })
                }
              </select>
            </div>
          </div>
        </div>
        {appliedFilters &&
          < div className={styles.bottom} >
            <span className={styles['bottom-title']}>Applied Filters: &nbsp;</span>
            <div className={styles.filter}>{appliedFilters}
              <CloseIcon fontSize='small' onClick={() => {
                setAppliedFilters('')
                clear()
              }} />
            </div>
          </div>
        }

      </div>
    </>
  )
}

export default Header