import Layout from '@components/Layout';
import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const About: React.FC<Props> = ({ children, ...props }) => {
   return (
      <Layout>
         <Grid container>
            <Typography variant='h1'>About Page</Typography>
         </Grid>
         {children}
      </Layout>
   )
}

export default About;