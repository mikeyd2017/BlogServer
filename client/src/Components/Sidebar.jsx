import { useState } from 'react';
import SignupModal from './SignupModal';
import { IoLayers } from 'react-icons/io5';
import '../Styles/sidebar.scss';

function Sidebar(props) {

    const [showSignup, setShowSignup] = useState(false);

    return (
        <>
            {showSignup && <SignupModal></SignupModal>}
            <div className='sidebar'>
                <div className='user-info'>
                    <img src="https://via.placeholder.com/200x200" />
                    <p>{props.user.name}</p>
                </div>
                <div className='middle'>

                </div>
                <div className='bottom'>
                    <IoLayers></IoLayers>
                    <span>Apps</span>
                </div>
                {/* <Button onClick={() => setShowSignup(!showSignup)}>Sign Up</Button> */}
            </div>
        </>
    );
}

export default Sidebar