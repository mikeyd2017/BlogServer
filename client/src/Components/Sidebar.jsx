import { useState, useEffect } from 'react';

import { Button, responsiveFontSizes } from '@mui/material';

import axios from 'axios';
import { devKeys } from '../keys/dev';

import '../Styles/sidebar.scss';

function Sidebar(props) {

    const [userState, setUserState] = useState({
        userName: props.name || '',
        age: props.age || '',
        email: props.email || ''
    });

    const getUser = (userID) => {
        axios.get(`${devKeys.devAPI}/users/${userID}`).then(function (response) {
            setUserState((userState) => ({
                ...userState,
                userName: response.name,
                age: response.age,
                email: response.email
            }));
        }).catch(function (error) {

        }).then(function () {

        });
    }

    return (
        <div className='sidebar'>
            <p>Name: {userState.userName}</p>
            <p>Age: {userState.age}</p>
            <p>Email: {userState.email}</p>
            <Button onClick={() => getUser('61e0d941486e029487f69c72')}>Show me the user!</Button>
        </div>
    );
}

export default Sidebar