import { useState, useEffect } from 'react';
import '../Styles/signupModal.scss';
import { TextField } from '@mui/material';

export default function SignupModal() {

    return (
        <div className='userModal'>
            <div className='modal'>
                <h2>Create Account</h2>
                <div className='form'>
                    <form>
                        <TextField className='textbox' label="Name" variant='outlined'></TextField>
                        <TextField className='textbox' label="Name" variant='outlined'></TextField>
                        <TextField className='textbox' label="Name" variant='outlined'></TextField>
                    </form>
                </div>
            </div>
        </div>
    );
}