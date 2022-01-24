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
                <Sidebar user={userState}></Sidebar>
                <Blogs name={userState.name}></Blogs>
            </div>
        </div>
    )
}

export default Main