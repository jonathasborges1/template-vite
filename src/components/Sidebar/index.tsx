import { ROUTES } from '@config/routes';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
   children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({}) => {

   const menuList = [
      {
         title: "Home",
         icon:"",
         to: ROUTES.HOME,
      },
      {
         title: "Sobre",
         icon:"",
         to: ROUTES.ABOUT,
      },
      {
         title: "login",
         icon:"",
         to: ROUTES.LOGIN,
      },
   ]

   return (
      <Grid container className='Sidebar-container'>
         <List sx={{display:"flex", gap:2, textAlign:"center" }}>
            {menuList.map((item,index) => (
               <ListItem  
                  key={index}
                  component={Link}
                  to={item.to}
                  sx={{ border:"1px solid black"}}
               >
                  {item.icon && (<ListItemIcon>{item.icon}</ListItemIcon>)}
                  <ListItemText>{item.title}</ListItemText>
               </ListItem>
            )
         )}
         </List>
      </Grid>
   )
}

export default Sidebar;