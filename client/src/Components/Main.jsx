import { useState, useEffect } from 'react';
import { FaPlusSquare, FaSearch, FaCog } from 'react-icons/fa';
import Menu from './Menu.jsx';

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
                <div className='main-background'></div>
                <Menu name={userState.name}></Menu>
                <div className='main-content'>
                    <Blogs showModal={showModal} setShowModal={setShowModal}></Blogs>
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