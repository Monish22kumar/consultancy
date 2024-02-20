import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography><br></br>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to Paradise multicuisine</Typography>
      <Typography component='p'>Welcome to Paradise Multi Cuisine Restaurant! Our journey began with a simple vision of bringing together diverse flavors from around the world under one roof, creating a culinary haven for our customers. Since our inception, we have been on a delectable journey, serving mouthwatering dishes to satisfy the cravings of food enthusiasts. Here at Paradise, we pride ourselves on offering a wide range of exquisite cuisines to tantalize your taste buds and provide an unforgettable dining experience.</Typography>    </Container>
  )
}

export default About