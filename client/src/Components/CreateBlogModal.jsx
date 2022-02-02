import { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import BLOG from '../utilities/Blog';
import { IoPersonCircleSharp, IoCalendarSharp } from 'react-icons/io5';

import '../Styles/createblogModal.scss';

function CreateBlogModal(props) {

    const currentDate = new Date(Date.now()).toLocaleString().split(',')[0];

    const [isSaving, setSaving] = useState(false);
    const [blogAdded, setBlogAdded] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
        <div className='createblog'>
            <div className='background'>
            </div>
            <div className='modal'>
                <div className='modal-top'>
                    <h2>Create Blog</h2>
                </div>
                <div className='modal-middle'>
                    <div className='form'>
                        <form>
                            <TextField className='textbox title' onChange={(e) => setTitle(e.target.value)} label='Title' variant='standard'></TextField>
                            <TextField className='textbox content' onChange={(e) => setContent(e.target.value)} label='Content' variant='outlined' multiline={true} minRows={'8'}></TextField>
                            <div className='btn-container'>
                                <Button className='cancel-btn' onClick={() => props.setShowModal(false)} variant='contained'>Cancel</Button>
                                <LoadingButton className='save-btn' loading={isSaving} variant='contained' onClick={() => submitBlog()}>Submit</LoadingButton>
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
    )
}

export default CreateBlogModal;