import { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import BLOG from '../utilities/Blog';
import { IoPersonCircleSharp, IoCalendarSharp } from 'react-icons/io5';
import $ from 'jquery';

import '../Styles/createblogModal.scss';

function CreateBlogModal(props) {

    const currentDate = new Date(Date.now()).toLocaleString().split(',')[0];

    const [isSaving, setSaving] = useState(false);
    const [blogAdded, setBlogAdded] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    $(function () {
        let title = document.getElementById('title');
        if (title) {
            title.addEventListener("input", function () {
                setTitle(title.innerText);
            })
        }
    });

    const submitBlog = () => {
        setSaving(true);

        const blog = {
            owner: props.name,
            title: title,
            content: content,
            datePosted: currentDate,
            dateEdited: currentDate
        }

        BLOG.addBlog(blog).then(() => {
            //maybe set timeout here
            setSaving(false);
            setBlogAdded(true);
            props.getBlogs();
            props.setShowModal(false);
        });
    }

    return (
        <div className={props.showModal ? 'createblog show' : 'createblog'}>
            <div className={props.showModal ? 'background blur' : 'background'}>
            </div>
            <div className='modal-animation-container'>
                <div className={props.showModal ? 'modal modal-animation-up' : 'modal'}>
                    <div className='modal-top'>
                        {title ? <h2>{title}</h2> : <h2 style={{ textTransform: 'uppercase' }}>New Post</h2>}
                    </div>
                    <div className='modal-middle'>
                        <div className='form'>
                            <form>
                                <div className='label-container'><span className='label'>Title</span></div>
                                <div className='textbox' id='title' label='Title' contentEditable='true'></div>
                                <div className='label-container'><span className='label'>Content</span></div>
                                <textarea className='textbox' id='content' onChange={(e) => setContent(e.target.value)} label='Content'></textarea>
                                <div className='btn-container'>
                                    <Button className='cancel-btn' onClick={() => props.setShowModal(false)} variant='contained'>Cancel</Button>
                                    <LoadingButton className='save-btn' loading={isSaving} variant='contained' onClick={() => submitBlog()}>Done</LoadingButton>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='modal-bottom'>
                        <div className='left-icons'><IoPersonCircleSharp></IoPersonCircleSharp><span>{props.name}</span></div>
                        <div className='right-icons'><IoCalendarSharp></IoCalendarSharp><span>{currentDate}</span></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateBlogModal;