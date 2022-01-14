import { useState, useEffect } from 'react';

import { FaPlusSquare } from 'react-icons/fa';

import '../Styles/blogs.scss';

function Blogs() {
    return (
        <div className='blogs'>
            <div className='top'>

            </div>
            <div className='bottom'>
                <FaPlusSquare className='add-blog'></FaPlusSquare>
            </div>
        </div>
    )
}

export default Blogs;