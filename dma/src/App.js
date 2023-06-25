import {useState} from "react";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import styles from './App.module.scss'
import CityList from "./components/CityList";

function App() {
    const [users, setUsers] = useState([]) // full db
    const {register, handleSubmit} = useForm()
    const [name, setName] = useState()
    const [mail, setMail] = useState()


    const postNewUser = (d) => {
        const data = JSON.stringify(d)
        console.log(data)
        // fetch('http://localhost:3001/usersList', {
        //     method: 'post',
        //     body: data,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then(response => response)
    }
    //
    // useEffect(() => {
    //     fetch('http://localhost:3001/users')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             const items = data.map((user, index) => (
    //                 <li key={index}>
    //                     {user.name}, {user.email}
    //                 </li>
    //             ));
    //             setUsers(items)
    //         })
    // }, [])

  return (
      <>
          <form onSubmit={handleSubmit(postNewUser)}>
              <CityList register={register}/>
              <label>
                  Дата
                  <input type="date" {...register('timeTable')} name={'timeTable'}/>
              </label>
              <label>
                  Имя
                  <input {...register('name')} name={'name'}/>
              </label>
              <label>
                  Телефон
                  <input {...register('phone')} name={'phone'}/>
              </label>
              <input type="submit" value="Заказать"/>
          </form>
          {/*<ul>{users}</ul>*/}
      </>
  );
}

export default App;
