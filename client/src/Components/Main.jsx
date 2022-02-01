import { useState, useEffect } from 'react';

import Blogs from './Blogs';

import '../Styles/main.scss';
import Sidebar from './Sidebar';
import USER from '../utilities/User';

function Main() {
    const [userState, setUserState] = useState({
        name: '',
        age: '',
        email: ''
    });

    useEffect(() => {
        USER.getUser('61e711cb9139f4b16c893b0b').then(data => {
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
                <Sidebar user={userState}></Sidebar>
                <Blogs name={userState.name}></Blogs>
            </div>
        </div>
    )
}

export default Main