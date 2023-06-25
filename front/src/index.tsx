import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Faq from './components/faq/Faq'
import Contacts from './components/contacts/Contacts'
import AboutUs from './components/aboutUs/AboutUs'
import Timetable from './components/timetable/Timetable'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<Layout>*/}
      {/*<Navigation />*/}
      <Routes>
        <Route path={''} element={<App />} />
        <Route path={'/timetable'} element={<Timetable />} />
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/contacts'} element={<Contacts />} />
        <Route path={'/FAQ'} element={<Faq />} />
      </Routes>
      {/*</Layout>*/}
    </BrowserRouter>
  </React.StrictMode>,
)
