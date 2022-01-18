import { useState, useEffect } from 'react';
import CreateBlogModal from './CreateBlogModal.jsx';
import BlogCard from './BlogCard.jsx';
import { FaPlusSquare } from 'react-icons/fa';
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
            {showModal && <CreateBlogModal getBlogs={getBlogs} setShowModal={setShowModal} name={props.name}></CreateBlogModal>}
            <div className='top'>
                {displayBlogs()}
            </div>
            <div className='bottom'>
                <FaPlusSquare className='add-blog' onClick={() => setShowModal(!showModal)}></FaPlusSquare>
            </div>
        </div>
    )
}

export default Blogs;