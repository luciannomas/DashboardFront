//Table with hooks not search

import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core'


const DataTable2 = () => {


    const data = [
        {
            name: 'tv',
            img: '/dasda.png',
            price: 50,
            description: 'olo current quarte tear end send tend'

        },
        {
            name: 'tdsaddssdv',
            img: '/dasda.png',
            price: 50,
            description: 'otear end send tenddd'

        },
        {
            name: 'vvvvvvv',
            img: '/dasddda.png',
            price: 56,
            description: 'olo current quarte tear end send tend'

        },
    ]

    //hook de carga de datos 
    //usseEffect para llamada de ese contralodr

    return (
        <div >
           <TableContainer>
               <Table>
                   <TableHead>
                       <TableRow>
                           <TableCell>Name</TableCell>
                           <TableCell>Img</TableCell>
                           <TableCell>Price</TableCell>
                           <TableCell>Description</TableCell>
                       </TableRow>
                   </TableHead>

                   <TableBody>
                       {
                           data.map( e => (
                            <TableRow>
                                <TableCell>{e.name}</TableCell>
                                <TableCell>{e.img}</TableCell>
                                <TableCell>{e.price}</TableCell>
                                <TableCell>{e.description}</TableCell>
                            </TableRow>
                           ))
                       }
                   </TableBody>
               </Table>
           </TableContainer>
            
        </div>
    )
}

export default DataTable2