import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import SignupModal from './SignupModal';
import USER from '../utilities/User';
import '../Styles/sidebar.scss';

function Sidebar(props) {

    const [showSignup, setShowSignup] = useState(false);

    const [userState, setUserState] = useState({
        userName: props.name || '',
        age: props.age || '',
        email: props.email || ''
    });

    useEffect(() => {
        USER.getUser('61e089ba0efd05850c62590d').then(data => {
            setUserState((userState) => ({
                ...userState,
                userName: data.user.name,
                age: data.user.age,
                email: data.user.email
            }));
        });
    }, []);

    return (
        <>
            {showSignup && <SignupModal></SignupModal>}
            <div className='sidebar'>
                <p>Name: {userState.userName}</p>
                <p>Age: {userState.age}</p>
                <p>Email: {userState.email}</p>
                <Button onClick={() => setShowSignup(!showSignup)}>Sign Up</Button>
            </div>
        </>
    );
}

export default Sidebar