import React, { useContext } from 'react'
import { Box, Button, Card, Container, Modal, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form"
import './auth.css'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Authenticate } from './AuthContext'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 270,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const Login = () => {
  //User Details View
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  //auth function
  const { setAuth } = useContext(Authenticate);
  //form validation
  const FormValidate = async (e) => {
    if (e.Email === "nihasinips@gmail.com") {
      if (e.Psw === "12345") {
        //auth change value and page navigate to home screen
        setAuth(true);
        toast.success("Login Successfully!");
        navigate("/booking");
      } else {
        toast.error("Invalid Password");
      }
    } else {
      toast.error("Invalid UserName");
    }
    // e.preventDefault();
    // if(e.Email || e.Psw){
    //   toast.error("Fill all the fields");
    //   return;
    // }

    // try{
    //   const response = await fetch('/coachlog', {
    //     method :'POST',
    //     headers : {
    //       'Content-Type' : 'application/json',
    //     },
    //     body : JSON.stringify({Email: e.Email, Psw: e.Psw}),
    // });
    // if(response.ok){
    //   const data=await response.json();
    //   localStorage.setItem('token',data.token);
    //   const loginTime=Date.now();
    //   localStorage.setItem('isLoggedIn','true');
    //   localStorage.setItem('loginTime',loginTime);

    //   setAuth(true);
    //   toast.success('Login Successfully');
    //   // ('/booking');
    // }else{
    //   toast.error('Invalid email or password');
    // }
    // }
    // catch (error){
    //   console.error(error);
    //   toast.error('An error occurred during login');
    // }
  };

  return (
    <Container className='Auth'>
      <Typography className='first-title' variant='h6'>Sign In</Typography>
      <Typography className='second-title' variant='h4'>Discover Our Flavorful Symphony!</Typography>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: 550 }}>
        <form  onSubmit={handleSubmit(FormValidate)}>
          <Card className='card' variant='outlined'>
            <TextField {...register("Email", { required: "Enter Email" })} error={errors.Email ? true : false} variant='standard' label="Enter Email" type='email' />
            <TextField {...register("Psw", { required: "Enter Password" })} error={errors.Psw ? true : false} variant='standard' label="Enter Password" type='password' />
            <Button sx={{ alignSelf: 'flex-start', marginLeft: 3, color: 'gray' }} className="hint-btn" onClick={() => setOpen(true)}>
              Check Hint{" "}
            </Button>
            <Box sx={{ width: "100%", display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
              <Link to='/'><Button variant='text'>Cancel</Button></Link>
              <Button variant='contained' type='submit' endIcon={<ArrowForward />} >Login</Button>
            </Box>
          </Card>
        </form>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
      >
        <Card sx={style}>
          <Typography id="modal-modal-title" variant="h6">
            UserName
          </Typography>
          <Typography component="p">nihasinips@gmail.com</Typography>
          <Typography id="modal-modal-title" variant="h6" marginTop={5}>
            Password
          </Typography>
          <Typography component="p">12345</Typography>
        </Card>
      </Modal>
    </Container>
  )
}
export default Login
