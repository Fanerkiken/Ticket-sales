import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import logo from '../../assets/lillogoTransp.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import BaseInput from '../shared/controls/BaseInput/BaseInput'
import axios from 'axios'

type Inputs = {
  login: string
  password: string
}

type LogInResponse = {
  token: string
}
const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSignIn: SubmitHandler<Inputs> = data => {
    axios.post<LogInResponse>('http://localhost:3001/api/user/login/', data).then(response => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('login', data.login)
      closeModal()
    })
  }

  const onSignUp: SubmitHandler<Inputs> = data => {
    axios.post('http://localhost:3001/api/user/registration/', data).then(response => {
      onSignIn(data)
    })
  }

  const openModal = () => {
    setIsModalOpen(true)
    setTimeout(() => {
      setIsModalVisible(true)
    }, 100)
  }

  const closeModal = () => {
    setIsModalVisible(false)
    setTimeout(() => {
      setIsModalOpen(false)
    }, 300)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true)
    }
  }, [])
  return (
    <>
      <nav className={styles.navbar}>
        <span>
          <Link className={styles.title} to={'/'}>
            <img className={styles.title_logo} src={logo} alt="logo" />
          </Link>
        </span>

        <span className={styles.link}>
          <Link className={styles.links} to={'/'}>
            Главная
          </Link>
          <Link className={styles.links} to={'/timetable'}>
            Расписание
          </Link>
          <Link className={styles.links} to={'/about'}>
            О нас
          </Link>
          <Link className={styles.links} to={'/contacts'}>
            Контакты
          </Link>
          <Link className={styles.links} to={'/FAQ'}>
            FAQ
          </Link>
          <div>
            {isAuth ? (
              <div className={styles.links}>Выйти</div>
            ) : (
              <div className={styles.links} onClick={openModal}>
                Войти
              </div>
            )}
          </div>
        </span>
      </nav>
      {isModalOpen && (
        <div className={`${styles.modal} ${isModalVisible ? styles.visible : ''}`}>
          <form className={styles.modalContent}>
            <span className={styles.closeModal} onClick={closeModal}>
              &times;
            </span>
            <div className={styles.modalTitle}>Вход в аккаунт</div>
            <div className={styles.modalContainerWithInputs}>
              <BaseInput
                register={register('login', {
                  validate: value => {
                    if (!value.includes('@')) {
                      return 'Поле должно быть Email'
                    }
                  },
                })}
                error={errors.login?.message}
                type="text"
                placeholder="Email"
              />
              <BaseInput
                register={register('password', {
                  minLength: {
                    value: 5,
                    message: 'Пароль должен содержать более 5 символов',
                  },
                })}
                error={errors.password?.message}
                type="password"
                placeholder="Пароль"
              />
            </div>
            <div className={styles.modalContainerWithButtons}>
              <button className={styles.modalButton} onClick={handleSubmit(onSignIn)}>
                Войти
              </button>
              <button className={styles.modalButton} onClick={handleSubmit(onSignUp)}>
                Создать аккаунт
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Navigation
