import { useState, useEffect } from 'react';
import CreateBlogModal from './CreateBlogModal.jsx';
import MobileMenu from './MobileMenu.jsx';
import BlogCard from './BlogCard.jsx';
import { FaPlusSquare, FaThList, FaTh, FaSearch, FaCog } from 'react-icons/fa';

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
            <MobileMenu name={props.name}></MobileMenu>
            <CreateBlogModal getBlogs={getBlogs} setShowModal={setShowModal} showModal={showModal} name={props.name}></CreateBlogModal>
            <div className='top'>
                <div className='blog-cards'>
                    {displayBlogs()}
                </div>
            </div>
            <div className='bottom'>
                <div className='icons-left'>
                    <div className='search-icon'>
                        <FaSearch></FaSearch><span>Search</span>
                    </div>
                </div>
                <div className='icons-middle'>
                    <FaPlusSquare className='add-blog' onClick={() => setShowModal(!showModal)}></FaPlusSquare>
                </div>
                <div className='icons-right'>
                    <div className='settings-icon'>
                        <span>Settings</span><FaCog></FaCog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;