import { useState, useEffect } from 'react';
import CreateBlogModal from './CreateBlogModal.jsx';
import BlogCard from './BlogCard.jsx';

import BLOG from '../utilities/Blog';

import '../Styles/blogs.scss';
import '../Styles/blogCard.scss';

function Blogs(props) {

    const [showModal, setShowModal] = useState(false);

    const [blogs, setBlogs] = useState([]);

    const getBlogs = () => {
        BLOG.getBlogs().then(data => {
            setBlogs(data.blogs);
        });
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const displayBlogs = () => {
        return (
            blogs.map(function (blog, i) {
                return (
                    <BlogCard blog={blog} key={i}></BlogCard>
                );
            })
        );
    }

    return (
        <div className='blogs'>
            <CreateBlogModal getBlogs={getBlogs} setShowModal={setShowModal} showModal={showModal} name={props.name}></CreateBlogModal>
            <div className='blog-cards'>
                {displayBlogs()}
            </div>
        </div>
    )
}

export default Blogs;