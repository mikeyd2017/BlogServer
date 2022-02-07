import axios from 'axios';
import {devKeys} from '../keys/dev';

const BLOG = {
    addBlog: async (blog) => {
        try {
            return await axios.post(`${devKeys.api}/blog/create`, {
                blog: {
                    owner: blog.owner,
                    title: blog.title,
                    content: blog.content,
                    datePosted: blog.datePosted,
                    dateEdited: blog.dateEdited
                }
            }).then((response) => response.data);
        } catch (err) {
            console.log(err);
        }
    },

    getBlogs: async () => {
        try {
            return await axios.get(`${devKeys.api}/blog/all`, {}).then((response) => response.data);
        } catch (err) {
            console.log(err);
        }
    }
}

export default BLOG;