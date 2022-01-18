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
                <p>Name: {props.user.name}</p>
                <p>Age: {props.user.age}</p>
                <p>Email: {props.user.email}</p>
                {/* <Button onClick={() => setShowSignup(!showSignup)}>Sign Up</Button> */}
            </div>
        </>
    );
}

export default Sidebar