import React from 'react';
import { useSnackbar } from 'notistack';
import { Typography } from '@mui/material';


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
      <>
         Home Page
         <button onClick={handleClick}>Show Snackbar</button>
         <br />
         <h1>Apresentacao dos Typography</h1>
         <Typography variant='sectionTitle' sx={{fontSize: "10rem "}}  >SectionTitle Example</Typography>
         <Typography variant='sectionSubtitle'>SectionSubTitle Example</Typography>
         <br />
         <Typography variant='h1'>H1</Typography>
         <Typography variant='h2'>H2</Typography>
         <Typography variant='h3'>H3</Typography>
         <Typography variant='h4'>H4</Typography>
         <Typography variant='h5'>H5</Typography>
         <Typography variant='h5'>H6</Typography>

      </>
  );
};

export default Home;