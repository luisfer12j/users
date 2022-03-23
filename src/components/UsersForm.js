import React, { useEffect, useState } from 'react';

const UsersForm = ({addUser,userEdit,updateUser,setUserEdit}) => {
    const[first_name,setFirst_name]=useState('');
    const[last_name,setLast_name]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[birthday,setBirthday]=useState('');

    useEffect(()=>{
        if(userEdit){
            setFirst_name(userEdit.first_name);
            setLast_name(userEdit.last_name);
            setEmail(userEdit.email);
            setPassword(userEdit.password);
            setBirthday(userEdit.birthday);
        }else{
            reset()
        }
    },[userEdit])

    const reset=()=>{
        setFirst_name('');
        setLast_name('');
        setEmail('');
        setPassword('');
        setBirthday('');
      }

    const submit=e=>{
        e.preventDefault()
        const user={
            first_name,
            last_name,
            email,
            password,
            birthday
        }
        if(userEdit){
            user.id=userEdit.id
            updateUser(user);
            reset();
            setUserEdit(null)
        }else{
            addUser(user);
            reset();
        }
    }
    return (
        <div className='form-container'>
            <form onSubmit={submit}>
                {userEdit?
                    <>
                        <h2 className='form-title'>Edit user</h2>
                    </>
                    :
                    <h2 className='form-title'>New user</h2>}
                <div className='input-container'>
                    <label htmlFor="">First name</label>
                    <input type="text" placeholder='First name' onChange={e=>{setFirst_name(e.target.value)}} value={first_name}/>
                </div>
                <div className='input-container'>
                    <label htmlFor="">Last name</label>
                    <input type="text" placeholder='Last name' onChange={e=>{setLast_name(e.target.value)}} value={last_name}/>
                </div>
                <div className='input-container'>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={e=>{setEmail(e.target.value)}} value={email}/>
                </div>
                <div className='input-container'>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={e=>{setPassword(e.target.value)}} value={password}/>
                </div>
                <div className='input-container'>
                    <label htmlFor="">Birthday</label>
                    <input type="date" onChange={e=>{setBirthday(e.target.value)}} value={birthday}/>
                </div>
                {userEdit?
                    <>
                        <button >Update user</button>
                        <button type='button' onClick={()=>setUserEdit(null)}>Cancel</button>
                    </>
                    :
                    <button>Add user</button>}
                

            </form>
        </div>
    );
};

export default UsersForm;