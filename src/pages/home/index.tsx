import React from 'react';
import { useSnackbar } from 'notistack';


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
      </>
  );
};

export default Home;