import React from 'react';

import { Grid, Typography } from '@mui/material';
import Layout from '@components/Layout';

interface Props {
   children?: React.ReactNode;
}

const Login: React.FC<Props> = ({ children }) => {
   return (
      <Layout> 
         <Grid container>
            <Typography variant='h1'>Login Page</Typography>
         </Grid>
         {children}
      </Layout>
   )
}

export default Login;