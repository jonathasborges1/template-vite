import React from 'react';
import { useSnackbar } from 'notistack';

import { Grid, Typography } from '@mui/material';
import Layout from '@components/Layout';

const Home: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('This is a snack success!', { variant: 'success' });
    enqueueSnackbar('This is a snack error!', { variant: 'error' });
    enqueueSnackbar('This is a snack warning!', { variant: 'warning' });
    enqueueSnackbar('This is a snack info!', { variant: 'info' });
    enqueueSnackbar('This is a snack default!', { variant: 'default' });
  }
  
  return (
    <Layout>
      <Grid container>
        <Typography variant='h1'>Home Page</Typography>
         
         <button onClick={handleClick}>Show Snackbar</button>
         <br />
      </Grid>
    </Layout>
      
  );
};

export default Home;