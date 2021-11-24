import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState , useEffect} from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { NavLink,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
// import login from '../../images/login.png';

const Register = () => {
const [error,setError] = useState([])
    const {registerUser,isLoading,authError} = useAuth();
    const [loginData,setLoginData] = useState([]);
    const location = useLocation();
    const history = useHistory();
    useEffect(()=>{
setError(authError);
    },[authError])
   
   
    
    const handleOnChange = (e)=>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field , value);

}

const handleLoginSubmit = (e)=>{
    e.preventDefault();
    if(loginData.password!== loginData.password2)
    {
        alert("Your password didn't match !!!")
        return
    }
     registerUser(loginData.email,loginData.password,loginData.name,location,history);

}
    return (
        <>
        <Navbar/>
        <Container>  
        <Grid container spacing={2}>

            <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>SignUp</Typography>

               
                {
                    (error==="Firebase: Error (auth/email-already-in-use).")?
                     <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="warning">User Exsists With this Email !</Alert>
                    </Stack>   
                    :
                       <> </>
                    

                }

               
                {
                    isLoading?
                    <CircularProgress />
                    
                    :
                    <form onSubmit={handleLoginSubmit}>

                <TextField id="standard-basic" 
                    sx={{width:'75%' ,m:1}} label="Your Name" name="name"
                    onBlur={handleOnChange} 
                    variant="standard" />

                    <TextField id="standard-basic" 
                    sx={{width:'75%' ,m:1}} label="Your Email" name="email"
                    type="email"
                    onBlur={handleOnChange} 
                    variant="standard" />
           
                    <TextField id="standard-basic" 
                     sx={{width:'75%' ,m:1}}label="PassWord" name="password" 
                     onBlur={handleOnChange}
                     type="password" variant="standard" />

                <TextField id="standard-basic" 
                     sx={{width:'75%' ,m:1}}label="Retype PassWord" name="password2" 
                     onBlur={handleOnChange}
                     type="password" variant="standard" />
                    
                     <Button sx={{width:'75%' ,m:1}} 
                     type="submit"
                     variant="contained">Register</Button>
                      <NavLink 
                     style={{textDecoration:'none'}}
                     to="/login">
                         <Button varient="text">
                             EXISTING USER ? PLEASE LOGIN
                         </Button>
                     </NavLink>

                </form>
                }
                </Grid>

                <Grid className="mt-5" item xs={12} md={6}>
                    <img style={{width:'100%'}} src="https://static.vecteezy.com/system/resources/thumbnails/000/160/721/small_2x/free-unique-join-us-vectors.jpg" alt=""/>
                </Grid>

        </Grid>
    </Container>
    <Footer/>
    </>
    );
};

export default Register;