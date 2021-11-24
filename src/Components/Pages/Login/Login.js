import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState , useEffect} from 'react';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import useAuth from '../../../Hooks/useAuth';
import { NavLink ,useLocation,useHistory} from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
// import login from '../../images/login.png';



const Login = () => {
    const {LogInUser,isLoading,authError,GoogleSignIn} = useAuth();
    const [loginData,setLoginData] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const [error,setError] = useState([]);
    useEffect(()=>{
        setError(authError);
    },[authError])
   
    
        const handleOnChange = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        LogInUser(loginData.email,loginData.password,location,history)
    
    }
    return (
        <>
        <Navbar/>
        <Container>
           
            <Grid container spacing={2}>

            <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src="https://static.vecteezy.com/system/resources/thumbnails/002/737/799/small_2x/online-registration-illustration-concept-free-vector.jpg" alt=""/>
                    </Grid>

                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>


                {
                    (error==="Firebase: Error (auth/user-not-found).")?
                    <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="warning">No User found with this email ! ! !</Alert>
                    </Stack>   
                    :
                    <> 
                    {
                    (error==="Firebase: Error (auth/wrong-password).")?
                    <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="warning"> Wrong Password  ! ! !</Alert>
                    </Stack> 
                    :
                    <> </>
                    }
                    </>   

                }
                    <form onSubmit={handleLoginSubmit}>
                        <TextField id="standard-basic" 
                        sx={{width:'75%' ,m:1}} label="Your Email" name="email"
                        type="email"
                        onChange={handleOnChange} 
                        variant="standard" />
                        
                        <TextField id="standard-basic" 
                         sx={{width:'75%' ,m:1}}label="PassWord" name="password" 
                         onChange={handleOnChange}
                         type="password" variant="standard" />
                        
                         <Button sx={{width:'75%' ,m:1}} 
                         type="submit"
                         variant="contained">Login</Button>
                         <Button sx={{width:'75%' ,m:1}} 
                         onClick={()=>GoogleSignIn(location,history)}
                         variant="contained">Google</Button>
                          <NavLink 
                         style={{textDecoration:'none'}}
                         to="/register">
                             <Button varient="text">
                                 NEW USER ? PLEASE REGISTER
                             </Button>
                         </NavLink>

                    </form>
                    </Grid>

            </Grid>
        </Container>
       <Footer/>
        </>
    );
};

export default Login;