import { useState, useEffect } from 'react';

import Blogs from './Blogs';

import '../Styles/main.scss';

function Main(props) {

    return (
        <div className='main'>
            <Blogs></Blogs>
        </div>
    )
}

export default Main