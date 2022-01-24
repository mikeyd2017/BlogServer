import { useState, useEffect } from 'react';
import CreateBlogModal from './CreateBlogModal.jsx';
import BlogCard from './BlogCard.jsx';
import { FaPlusSquare, FaThList, FaTh } from 'react-icons/fa';

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
                <div className='blog-cards'>
                    {displayBlogs()}
                </div>
            </div>
            <div className='bottom'>
                <div className='icons-left'>
                    <div className='list-view'>
                        <FaThList></FaThList>
                    </div>
                    <div className='card-view'>
                        <FaTh></FaTh>
                    </div>
                </div>
                <div className='icons-middle'>
                    <FaPlusSquare className='add-blog' onClick={() => setShowModal(!showModal)}></FaPlusSquare>
                </div>
                <div className='icons-right'>

                </div>
            </div>
        </div>
    )
}

export default Blogs;