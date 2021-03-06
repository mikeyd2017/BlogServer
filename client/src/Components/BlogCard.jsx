import { useState, useEffect } from 'react'
import { IoPersonCircleSharp, IoCalendarSharp } from 'react-icons/io5';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import { MdComment } from 'react-icons/md';
import { FaComments } from 'react-icons/fa';

function BlogCard(props) {

    return (
        <div className='blog-card'>
            <div className='card-top'>
                <div className='card-fade'></div>
                <h3 className='title'>{props.blog.title}</h3>
                <p className='content'>{props.blog.content}</p>
            </div>
            <div className='card-bottom'>
                <div className='card-left-icons'>

                </div>
                <div className='card-right-icons'>
                    <div className='voting'>
                        <ImArrowUp></ImArrowUp>
                        <span>1423</span>
                        <ImArrowDown></ImArrowDown>
                        <span>927</span>
                    </div>
                    <div className='comments'>
                        <FaComments></FaComments>
                        <span>129</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard