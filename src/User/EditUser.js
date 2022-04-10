import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button';
import Input from '../UI/Input';
import './EditUser.css';

const EditUser = () => {

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);

    const [userData, setUserData] = useState(userDetails)

    const inputHandler = (event, prop) => {
        setUserData({...userData, [prop]: event.target.value})
    }

    const submitUserForm = (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_USER_DATA", data: userData})
    }

    return (
        <div className='UserForm'>
            <form id='UserForm' onSubmit={(e) => submitUserForm(e)}>
                <h2>Edit User</h2>
                <Input type="text" inputHandler={(e) => inputHandler(e, "name")} name="name" label="Name" value={userData.name}></Input>
                <Input type="text" inputHandler={(e) => inputHandler(e, "username")} name="username" label="Username" value={userData.username}></Input>
                <Input type="email" inputHandler={(e) => inputHandler(e, "email")} name="email" label="Email" value={userData.email}></Input>
                <Input type="text" inputHandler={(e) => inputHandler(e, "phone")} name="phone" label="Phone" value={userData.phone}></Input>
                <Input type="text" inputHandler={(e) => inputHandler(e, "website")} name="website" label="Website" value={userData.website}></Input>
                <Button name="Submit"></Button>
            </form>
        </div>
    )
}

export default EditUser;