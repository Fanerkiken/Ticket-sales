import './App.css'
import axios from 'axios'
import styles from './App.module.scss'
import Navigation from './components/navigation/Navigation'
import SearchTicket from './components/searchTicket/SearchTicket'
import React, { useState, useEffect, useRef } from 'react'
import Footer from './components/footer/Footer'

export type CityType = {
  id: number
  name: string
  code: string
}

function App() {
  const [city, setCity] = useState<CityType[]>([])
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/city/')
      .then(res => {
        setCity(res.data.cities)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className={styles.header}>
        <Navigation />
        <div className={styles.container}>
          <div className={styles.slogan}>
            <span className={styles.title}>С Ветерком всегда по пути!</span>
          </div>
        </div>
        <div className={styles.container}>
          <SearchTicket cityList={city} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
