import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, List, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core' 
import { Link, animateScroll as Scroll } from 'react-scroll'
import CancelIcon from '@material-ui/icons/Cancel'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { Link as L } from 'react-router-dom';

export default function Navbar() {

    const [open, setOpen] =  React.useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            
          <IconButton
            onClick = { () => setOpen(! open)}

            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor ="bottom" open = { open } onClose = { () => setOpen(false) } >
             <IconButton onClick = { () => setOpen(false) } > 
                 {/* <CancelIcon fontWeight = "large"  /> */}
                 <LogoutOutlinedIcon/>
             </IconButton>
             <Divider />
             {   
                    
                <Link 
                    to = { 5 } 
                    spy = { true } /* activa los links acivo */
                    activeClass = 'active' /*  */
                    smooth = { true } /* hace al scroll suave */
                    duration = { 500 } 
                    offset = { -70 } /*  extra padding que sirve para que el titulo inicio arriba cuando se lo clikea */
                >
                    <ListItem component = "h5" >
                        <spam>
                            <ListItemIcon>
                                <InfoTwoToneIcon fontSize="large" />  
                            </ListItemIcon>
                        </spam> 
                        { "Inicio" }
                    </ListItem>
                </Link>
                    
                }
        </Drawer>
    </Box>
  );
}