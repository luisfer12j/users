import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';


function App() {
  const [users,setUsers]=useState([])
  const [userEdit,setUserEdit]=useState(null)

  useEffect(()=>{
    getUsers();
  },[])

  const getUsers=()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res=>setUsers(res.data))
  }

  const addUser=user=>{
    axios.post('https://users-crud1.herokuapp.com/users/',user)
      .then(()=>getUsers())
  }

  const deleteUser=(id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=>getUsers())
  }

  const updateUser=(userEdited)=>{
    axios.put(`https://users-crud1.herokuapp.com/users/${userEdited.id}/`,userEdited)
      .then(()=>getUsers())
  }

  return (
    <div className="App">
      <Header/>
      <UsersList users={users} deleteUser={deleteUser} updateUser={updateUser} setUserEdit={setUserEdit}/>
      <UsersForm addUser={addUser} userEdit={userEdit} updateUser={updateUser} setUserEdit={setUserEdit}/>
    </div>
  );
}

export default App;
