import React, { useContext } from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Authenticate } from './AuthContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 270,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

// ... (previous imports)

const Signup = () => {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAuth } = useContext(Authenticate);

  const FormValidate = async (formData) => {
    const { Email, Psw } = formData;

    if (Email === '' || Psw === '') {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Email,
            Psw,
          }),
        });

        if (response.ok) {
          const result = await response.json();

          if (result.success) {
            alert('Registration Successful');
            // navigate('/signin');
          } else {
            alert('Registration Failed');
          }
        } else {
          alert('Error during registration');
        }
      } catch (error) {
        console.error(error);
        alert('An unexpected error occurred');
      }
    }
  }

  return (
    <Container className='Auth'>
      <Typography className='first-title' variant='h6'>
        Sign Up
      </Typography>
      <Typography className='second-title' variant='h4'>
        Join Our Community!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 550,
        }}
      >
        <form
          action=''
          method='post'
          onSubmit={handleSubmit(FormValidate)}
        >
          <Card className='card' variant='outlined'>
            <TextField
              {...register('Email', { required: 'Enter Email' })}
              error={errors.Email ? true : false}
              variant='standard'
              label='Enter Email'
              type='email'
            />
            <TextField
              {...register('Psw', { required: 'Enter Password' })}
              error={errors.Psw ? true : false}
              variant='standard'
              label='Enter Password'
              type='password'
            />
            <Button
              sx={{
                alignSelf: 'flex-start',
                marginLeft: 3,
                color: 'gray',
              }}
              className='hint-btn'
              onClick={() => setOpen(true)}
            >
              Check Hint
            </Button>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Link to='/'>
                <Button variant='text'>Cancel</Button>
              </Link>
              <Button
                variant='contained'
                type='submit'
                endIcon={<ArrowForward />}
              >
                Sign Up
              </Button>
            </Box>
          </Card>
        </form>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby='modal-modal-title'>
        <Card sx={style}>
          <Typography id='modal-modal-title' variant='h6'>
            Hint: Provide a strong password
          </Typography>
        </Card>
      </Modal>
    </Container>
  );
};

export default Signup;

