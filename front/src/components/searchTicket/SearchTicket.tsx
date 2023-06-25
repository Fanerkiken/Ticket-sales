import React, { useState, useEffect } from 'react'
import styles from './SearchTicket.module.scss'
import { CityType } from '../../App'
import imgFrom from '../../assets/from.svg'
import imgTarget from '../../assets/target.svg'
import imgCalendar from '../../assets/calendar.svg'
import axios from 'axios'
import { useForm } from 'react-hook-form'

type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined

type fromCity = {
  id: number
  name: string
  code: string
}

type tyCity = {
  id: number
  name: string
  code: string
}

type IdOfPath = {
  cityFrom: string
  cityTo: string
  fromCity: fromCity
  toCity: tyCity
  name: string
  price: number
  published: boolean
}

export type TimetableType = {
  everyDay: boolean
  id: number
  idOfPath: IdOfPath
  pathId: number
  timeFrom: string
  timeTo: string
  weekday?: Weekday
}

const SearchTicket: React.FC<{ cityList: CityType[] }> = ({ cityList }) => {
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [formattedDate, setFormattedDate] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isContainerVisible, setIsContainerVisible] = useState(true)
  const [timetable, setTimetable] = useState<TimetableType[]>([])
  const [paths, setPaths] = useState<TimetableType[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = (data: any) => {
    const login = localStorage.getItem('login')
    const phone = data.phone
    axios
      .post('http://localhost:3001/api/usersPhone/addNumber', { login, phone })
      .then(response => {
        closeModal()
      })
      .catch(error => {
        console.error(error)
      })
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleFromCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value
    setFromCity(selectedCity)

    if (selectedCity !== 'Москва') {
      setToCity('Москва')
    } else {
      setToCity('')
    }
  }

  const handleToCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value
    setToCity(selectedCity)

    if (selectedCity !== 'Москва') {
      setFromCity('Москва')
    } else {
      setFromCity('')
    }
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value)
  }

  const searchTimetableByCityToAndCityFrom = () => {
    const fromCityObject = cityList.find(city => city.name === fromCity)
    const toCityObject = cityList.find(city => city.name === toCity)

    if (fromCityObject && toCityObject) {
      const cityFromId = fromCityObject.id
      const cityToId = toCityObject.id

      axios
        .get(`http://localhost:3001/api/timetable/city/p?cityFrom=${cityFromId}&cityTo=${cityToId}`)
        .then(response => {
          setPaths(response.data.timetable)
        })
        .catch(err => console.log(err))
    }
  }

  const handleSubmitSearch = () => {
    if (isFormValid) {
      const formattedDate = formatDate(selectedDate)
      setFormattedDate(formattedDate)
      searchTimetableByCityToAndCityFrom()
    }
  }

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }
    const date: Date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', options)
  }

  const isFormValid = fromCity && toCity && selectedDate

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/timetable/')
      .then(res => {
        setTimetable(res.data.timetables)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.container}>
          <div className={styles.containerWithFlightDetails}>
            <div className={styles.svgBgc}>
              <img src={imgFrom} alt="icon FROM" />
            </div>
            <div className={styles.titleWithDetails}>
              <div className={styles.title_fromAndTo}>Откуда</div>
              <select name="from" id="from" value={fromCity} onChange={handleFromCityChange}>
                <option value="">Из города...</option>
                {cityList.map(city => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.containerWithFlightDetails}>
            <div className={styles.svgBgc}>
              <img src={imgTarget} alt="icon TO" />
            </div>
            <div className={styles.titleWithDetails}>
              <div className={styles.title_fromAndTo}>Куда</div>
              <select name="to" id="to" value={toCity} onChange={handleToCityChange}>
                <option value="">В город...</option>
                {cityList.map(city => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.containerWithFlightDetails}>
            <div className={styles.svgBgc}>
              <img src={imgCalendar} alt="icon WHEN" />
            </div>
            <div className={styles.titleWithDetails}>
              <div className={styles.title}>Дата</div>
              <input type="date" name="date" value={selectedDate} onChange={handleDateChange} />
            </div>
          </div>
          <div>
            <div>
              <button type="submit" onClick={handleSubmitSearch} disabled={!isFormValid}>
                Найти
              </button>
            </div>
          </div>
        </div>

        {paths.length > 0 && (
          <div className={styles.timetables}>
            {formattedDate}
            {paths.map((path, index) => (
              <div key={index} className={styles.order}>
                <div className={styles.timetable}>
                  <div className={styles.from}>
                    Отправление {path.idOfPath.fromCity.name} {path.timeFrom}
                  </div>
                  <div className={styles.borderBetweenFromTo}></div>
                  <div className={styles.to}>
                    Прибытие {path.idOfPath.toCity.name} {path.timeTo}
                  </div>
                </div>
                <div className={styles.priceWithButton}>
                  <div className={styles.price}>{path.idOfPath.price} Br</div>
                  <button onClick={openModal} type="submit">
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {isModalOpen && (
          <div className={styles.containerToModal}>
            <div className={`${styles.modal} ${isModalVisible ? styles.visible : ''}`}>
              <div className={styles.modalContent}>
                <div className={styles.closeModal} onClick={closeModal}>
                  &times;
                </div>
                <div className={styles.modalTitle}>Введите номер телефона:</div>
                <form className={styles.formInModal} onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="tel"
                    className={styles.modalInput}
                    placeholder="Введите телефон с кодом"
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && <span>Введите номер телефона</span>}
                  <button type="submit">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SearchTicket
