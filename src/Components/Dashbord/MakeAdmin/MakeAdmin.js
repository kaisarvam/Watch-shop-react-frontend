import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';

const MakeAdmin = () => {
    const {user} = useAuth();
const userEmail = user.email;
 
    const [email,setEmail] = useState('');


    const handleOnBlur = (e)=>{
        
        const value = e.target.value;
        setEmail(value);
    }
    const handleAdminSubmit = (e)=>{
        e.preventDefault();
const url =`https://afternoon-sea-57536.herokuapp.com/users/admin`;
        axios.put(url,{email,userEmail})
        .then((res)=>{
            console.log("response from adding admin",res.data);
            if(res.data.matchedCount > 0){
            alert("user added as admin");

            }else{
                alert("this user doesn,t exsist in  This site !!! ")
            }
        })
    }
    return (
        <div>
            <h1 className="fw-bold"> Admin Making Page</h1>
           <form onSubmit={handleAdminSubmit}>
           <TextField id="standard-basic" onBlur={handleOnBlur} label="email here..." variant="standard" name="email" />
           <Button className="mt-4 ms-2" variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;