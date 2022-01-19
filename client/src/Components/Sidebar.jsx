import { useState } from 'react';
import { Button } from '@mui/material';
import SignupModal from './SignupModal';
import '../Styles/sidebar.scss';

function Sidebar(props) {

    const [showSignup, setShowSignup] = useState(false);

    return (
        <>
            {showSignup && <SignupModal></SignupModal>}
            <div className='sidebar'>
                <div className='user-info'>
                    <img src="https://via.placeholder.com/200x200" class="user" />
                    <p>{props.user.name}</p>
                </div>
                {/* <Button onClick={() => setShowSignup(!showSignup)}>Sign Up</Button> */}
            </div>
        </>
    );
}

export default Sidebar