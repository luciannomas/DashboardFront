import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, makeStyles, List,
    IconButton, Drawer, Divider, ListItem,
    ListItemIcon } from '@material-ui/core' 

import { Link, animateScroll as Scroll } from 'react-scroll'

import {Link as L} from '@mui/material'

import { Link as Lk } from 'react-router-dom';

//Icons
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone'
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone'
import ContactMailTwoTone  from '@material-ui/icons/ContactMailTwoTone' 
import MenuIcon from '@material-ui/icons/Menu'light
import CancelIcon from '@material-ui/icons/Cancel'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AppsIcon from '@mui/icons-material/Apps';

import { useState, useEffect } from 'react'


const Navbar = () => {

const classes = useStyles();

// state
const [open, setOpen] = useState(false)
const [user, setUser] = useState(null)

const links = [
   { 
       id: '/',
       text: 'Home',/* 'About me' */
       icon: <AppsIcon fontSize="large" />
   },
   {
       id: 'DataTable',
       text: 'Add',
       icon: <EmojiObjectsTwoToneIcon fontSize="large" className = { classes.light } />
   }
]

const scrollToTop = () => {
   Scroll.scrollToTop();
}

useEffect(() => {
    
    const signIn = localStorage.getItem('signIn')
    //TODO: Parseo string a objeto
    if(signIn){
      const user =  JSON.parse(signIn)
      const e = JSON.parse(user.config.data)
      console.log("user: ", e.email)
      setUser(e)
      //setToken(user.data.token) 
    }    
}, [])

return (
   <>
   <AppBar position = "sticky" className = {classes.root}> {/* sticky para que la barra se quede fija al subir el scroll */}
       <Toolbar className = {classes.toolbar}> 
           <IconButton edge="end" className = { classes.menubutton } onClick = { () => setOpen(! open)}>
               <MenuIcon  fontSize = 'large' /> {/* barra hamburguesa */}
           </IconButton>
           <div className = { classes.grow } />
           <Typography color = "textPrimary" variant="h6" component="p" sx={{ flexGrow: 1 }}>
            Hello <>{ user ? user.email : 'Guest'}</> ! 
            </Typography>
       </Toolbar>
   </AppBar>
   <Drawer anchor ="top" open = { open } onClose = { () => setOpen(false) } > {/* menu lateral / @materail-ui */}
        <IconButton onClick = { () => setOpen(false) }  className = { classes.cancelicon}> 
            <LogoutOutlinedIcon/>
        </IconButton>
        <Button href="/DataTable" color="inherit">Login</Button>
        <Divider />
        {   
               links.map ( ({ id, text, icon }, index ) => (
                   <Lk key = { index } 
                    style={{ textDecoration: 'none' }} // out subrallado
                    className = { classes.sidebar }
                    to = { id } /* lleva a la seccion de es id */
                    spy = { true } /* activa los links acivo */
                    activeClass = 'active' /*  */
                    smooth = { true } /* hace al scroll suave */
                    duration = { 500 } 
                    offset = { -70 } /*  extra padding que sirve para que el titulo inicio arriba cuando se lo clikea */
                   >
                       <ListItem component = "h5" >
                           <spam>
                               <ListItemIcon>
                                   { icon }    
                               </ListItemIcon>
                           </spam> 
                           { text }
                       </ListItem>
                   </Lk>
               ))
           }
           
   </Drawer>
   </>
)
}

const useStyles = makeStyles( (theme) => ({
root: {
   background: '#e0d4d4!important',
   top: 0, /* siempre arriba con sticky */
   left: 0,
   right: 0,
   zIndex: 999,

},
toolbar:{
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: "center"
},
logo: {
   height: '3.2rem', /* x defecto 1.5*/
   objectFit: 'contain', /* asegura que la img no se alarge o se achique */
   borderRadius: "10px", //redondea image
   '&:hover': {
       cursor: 'pointer' /* espera una accion */
   }
},
light:{
   color: "#ffcc00"
},
menu: {
   [theme.breakpoints.down('sm')]:{ // En todas las pantallas que sean sm (regla)
       display: 'none'
   }, /* cuando este en smoll nmenu desaparece */

   "& a": { /* Ancla */
       color: '#333',
       fontSize: '1.4rem',
       fontWeight: 'bold',
       marginLeft: theme.spacing(3) /* separa las palabras */

   },
   "& a:hover":{
       cursor: "pointer",
       color: "tomato",
       /* borderBottom: "3px solid tomato" */ /* subrallado */
   }
},
menubutton: {
    //display: "block", // cuando es grande no
   [theme.breakpoints.down('sm')]:{
       display: "block",
       color : "pink",
       //position: "absolute", //a la derecha
       top: 0,
       right: 10,

   }
},
cancelicon:{
   color: "blue",
   position: "absolute",
   top: 0 ,
   right: 10
},
sidebar: {
   width: "40vw",
   [theme.breakpoints.down('sm')]:{
       width: "60vw",
   },
   "& h5":{
       margin: theme.spacing(4,0,0,4), //Espacio entre los h5
       fontSize: "1.4rem",
       color: "#333",
       fontWeight: "bold",
   },
   "& h5:hover":{
       color: "tomato",
       cursor:"pointer",

   },   
},
grow: {
    flexGrow: 7,

},


}))
export default Navbar
