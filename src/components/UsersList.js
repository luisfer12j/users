import React from 'react';

const UsersList = ({users,deleteUser,updateUser,setUserEdit}) => {

    return (
            <ul className='list-users-container'>
                {users.map(user=>(
                    <li className='user-container' key={user.id}>
                        <ul className='user-info'>
                            <h2 className='user-name'><b>{`${user.first_name} ${user.last_name}`}</b></h2>
                            <li className='user-info__border'>
                                <p>EMAIL</p>
                                <li className='user-email'>{user.email}</li>
                                <p>BIRTHDAY</p>
                                <li className='user-birthday'>{user.birthday}</li>
                            </li>
                        </ul>
                        <button className='button-delete' onClick={()=>{deleteUser(user.id)}}><i className="fa-solid fa-trash-can"></i></button>
                        <button className='button-edit' onClick={()=>{setUserEdit(user)}}><i className="fa-solid fa-pen"></i></button>
                    </li>
                ))}
            </ul>
    );
};

export default UsersList;