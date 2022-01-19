import { useState, useEffect } from 'react'

function BlogCard(props) {

    return (
        <div className='blog-card'>
            <div className='info'>
                <p className='owner'>{props.blog.owner}</p>
                <p className='date-posted'>{props.blog.datePosted.substring(0, 10)}</p>
            </div>
            <h3 className='title'>{props.blog.title}</h3>
            <p className='content'>{props.blog.content}</p>
        </div>
    )
}

export default BlogCard