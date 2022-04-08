import React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '../components/Link';
import Dashboard from '../components/dashboard/Dashboard';

const Home: NextPage = () => {
  // return (
  //   <Container maxWidth="lg">
  //     <Box
  //       sx={{
  //         my: 4,
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <Typography variant="h4" component="h1" gutterBottom>
  //         TS Nextjs MUI
  //       </Typography>
  //       <Link href="/about" color="secondary">
  //         Go to the about page
  //       </Link>
  //     </Box>
  //   </Container>
  // );
  return (
    <Dashboard></Dashboard>
  )
};

export default Home;
