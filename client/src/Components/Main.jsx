import { useState, useEffect } from 'react';
import { FaPlusSquare, FaSearch, FaCog } from 'react-icons/fa';
import MobileMenu from './MobileMenu.jsx';

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

    const [showModal, setShowModal] = useState(false);

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
                <MobileMenu name={userState.name}></MobileMenu>
                <div className='bg'></div>
                <div className='bg bg2'></div>
                <div className='bg bg3'></div>
                <div className='main-background'></div>
                <div className='main-content'>
                    <Blogs></Blogs>
                </div>
                <div className='bottom'>
                    <div className='icons-left'>
                        <div className='search-icon'>
                            <FaSearch></FaSearch><span>Search</span>
                        </div>
                    </div>
                    <div className='icons-middle'>
                        <FaPlusSquare className='add-blog' onClick={() => setShowModal(!showModal)}></FaPlusSquare>
                    </div>
                    <div className='icons-right'>
                        <div className='settings-icon'>
                            <span>Settings</span><FaCog></FaCog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main