import { useState, useEffect } from 'react';

import Blogs from './Blogs';

import '../Styles/main.scss';
import USER from '../utilities/User';
import $ from 'jquery';

function Main() {
    const [userState, setUserState] = useState({
        name: '',
        age: '',
        email: ''
    });

    $(function () {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    useEffect(() => {
        USER.getUser('61e0d941486e029487f69c72').then(data => {
            setUserState((userState) => ({
                ...userState,
                name: data.user.name,
                age: data.user.age,
                email: data.user.email
            }));
        });
    }, []);

    return (
        <div className='main-container'>
            <div className='main'>
                <Blogs name={userState.name}></Blogs>
            </div>
        </div>
    )
}

export default Main