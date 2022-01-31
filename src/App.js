
import './App.css'
import { useEffect, useState} from 'react'

import Container from './components/Container'
import Dashboard from './components/dashboard/Dashboard'
import Create from './components/Create'

import { Switch , BrowserRouter as R, Route } from 'react-router-dom'
import DataTable from './components/DataTable';
import Navbar from './components/Navbar2';
import { createTheme, makeStyles, MuiThemeProvider } from '@material-ui/core'; 
import SignIn from './components/user/SignIn';

import { useStateValue } from './UseContext/StateProvider'

import { setToken } from './Service'

function App() {

  const classes = useStyles()
  /* const [ { user } , dispatch ] = useStateValue() */

  useEffect( ()=> {
    console.log("dentro de app")
     
    
  },[])

/* //////
  //TODO: Carga el local storage
  const [user, setUser] = useState(null)
  useEffect(() => {
    const signIn = localStorage.getItem('signIn')
    //TODO: Parseo string a objeto
    if(signIn){
      const user =  JSON.parse(signIn)
      setUser(user)
      setToken(user.data.token)
      //agregar al servio el token

    }

  }, []) // [] => ARRAY DE DEPENDECIA VACIO = SE EJECUTA LA PRIMERA VEZ QUE CARGA EL COMPONENTE
///// */
  return (
     
    <R> 
      <div>
         <Navbar /> 
        <Switch>
          
          {/* <Route exact path ="/">
            <Dashboard /> 
          </Route>
        */}
          <Route exact path = "/">
            <SignIn />
          </Route> 
          

          <Route path = '/DataTable'>
            <Container />
          </Route>
          
        </Switch>
     </div>
    </R>
    
  );
}

const useStyles = makeStyles( (theme) => ({
  root: {

  } 
}))


export default App;
