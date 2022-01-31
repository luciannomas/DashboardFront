import Box  from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import React from 'react'
import DataTable from './DataTable'

const Container = () => {
    
    
    
    return (
        <Box sx={{ flexGrow: 1, padding: "2pc" }}>
            <Grid container spacing={2}>
                <Grid item xs = {12} sm = { 12 } lg = { 12} >   {/*  TODO: ATRIBUTO ITEM  */}
                     <DataTable/>
               </Grid>
           </Grid>
       </Box>
    )
}

export default Container
