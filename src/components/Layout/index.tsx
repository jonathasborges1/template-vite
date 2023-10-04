import React from 'react';

import { Grid } from '@mui/material';
import Sidebar from '@components/Sidebar';

interface LayoutProps {
   children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {

   const SidebarContainer: React.FC = ({}) => {
      return(
         <Grid container className='SidebarContainer' sx={{border:"1px solid blue", height:"10vh", justifyContent:"center", alignItems:"center"}}>
            <Grid item><Sidebar></Sidebar></Grid>
         </Grid>
      )
   }

   const Body: React.FC = ({}) => {
      return(
         <Grid container className='body-container' sx={{border:"1px solid black", height:"80vh", justifyContent:"center", alignItems:"center"}}>
            <Grid item> {children} </Grid>
         </Grid>
      )
   }

   const Footer: React.FC = ({}) => {
      return(
         <Grid container className='footer-container' sx={{border:"1px solid black", height:"10vh", justifyContent:"center", alignItems:"center"}}>
            <Grid item>Footer</Grid>
         </Grid>
      )
   }

   return (
      <Grid container className='layout-container' sx={{border:"1px solid red"}}>
         <Grid item xs={12}> <SidebarContainer></SidebarContainer> </Grid>
         <Grid item xs={12}> <Body></Body> </Grid>
         <Grid item xs={12}> <Footer></Footer> </Grid>
         {/* {children} */}
      </Grid>
   )
}

export default Layout;