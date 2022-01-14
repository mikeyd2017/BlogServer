import axios from 'axios';
import { devKeys } from '../keys/dev';

const USER = {
    getUser: async (userID) => {
        try {
            return await axios.get(`${devKeys.devAPI}/users/${userID}`).then((response) => response.data);
        } catch(err) {
            console.log(err);
        }
    },

    createUser: async (user) => {
        try {
            return await axios.post(`${devKeys.devAPI}/users/createuser`, {
                user: {
                    name: user.name,
                    age: user.age,
                    email: user.email
                }
            }).then((response) => response.data);
        } catch(err) {
            console.log(err);
        }
    }
}

export default USER;