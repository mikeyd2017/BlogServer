import { useState, useEffect } from 'react';

import Blogs from './Blogs';

import '../Styles/main.scss';

function Main(props) {

    return (
        <div className='main'>
            <Blogs name={props.name}></Blogs>
        </div>
    )
}

export default Main