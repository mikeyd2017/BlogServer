import { useState, useEffect } from 'react'

function BlogCard(props) {

    return (
        <div className='blog-card' key={props.key}>
            <div className='info'>
                <p className='owner'>{props.blog.owner}</p>
                <p className='date-posted'>{props.blog.datePosted}</p>
            </div>
            <h3 className='title'>{props.blog.title}</h3>
            <p className='content'>{props.blog.content}</p>
        </div>
    )
}

export default BlogCard