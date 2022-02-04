import { useState, useEffect } from 'react'
import { IoPersonCircleSharp, IoCalendarSharp } from 'react-icons/io5';

function BlogCard(props) {

    return (
        <div className='blog-card'>
            <div className='card-top'>
                <h3 className='title'>{props.blog.title}</h3>
                <p className='content'>{props.blog.content}</p>
            </div>
            <div className='card-bottom'>
                <div className='owner'><IoPersonCircleSharp></IoPersonCircleSharp><span>{props.blog.owner}</span></div>
                <div className='date-posted'><IoCalendarSharp></IoCalendarSharp><span>{props.blog.datePosted.substring(0, 10)}</span></div>
            </div>
        </div>
    )
}

export default BlogCard