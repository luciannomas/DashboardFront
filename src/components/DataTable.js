
import React from 'react'
import {Modal, TextField, Button} from '@material-ui/core'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles }  from '@material-ui/core'
import MaterialTable from 'material-table'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

//Conexion Backend
import * as Service from '../Service'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const DataTable = () => {
    
    const styles  = useStyles()
    const history = useHistory()

    const colums = [
        { title: "Name", field: 'name', cellStyle: {
         backgroundColor: '#039be5',
         color: '#FFF'
       },
       headerStyle: {
         backgroundColor: 'pink',
       }},
        { title: 'Img', field: 'img'},
        { title: 'Price', field: 'price', type: "numeric"},
        { title: 'Description', field: 'description'}
     ]

    //Get
    const [data, SetData] = React.useState([])

    const loadProducts = async () => {
        const res = await Service.getProducts()
        SetData(res.data)
    }
    //console.log(Service.getProducts())
    
    //modal hook
    const [modalInsert, SetModalInsert] = React.useState(false) // cuando abre el componente esta cerrada la ventana de modal 

    const HandleOpen = () => {
        SetModalInsert(true)
    }

    const handleClose = () => {
        SetModalInsert(false)
    }

    const bodyInsert = (
        <Box className = { styles.modal}>
             <h3>Add new-products</h3>
            <TextField className = { styles.inputMaterial} label = "name">  
                <br/>
            </TextField>
             <br/>
            <TextField className = { styles.inputMaterial} label = "title">  
                <br/>
            </TextField>
            <br/>
            <TextField className = { styles.inputMaterial} label = "img">  
                <br/>
            </TextField>
            <TextField className = { styles.inputMaterial} label = "price">  
                <br/>
            </TextField>
            <br/><br/>
            <div align = "right">
                <Button color = "primary" >Insert</Button>
                <Button>Cancel</Button>
            </div> 
        </Box>
    )

    // init
    
    const initialState = { 
        name: "",
        img: "",
        price: "",
        description: "",
    }
    
    const [product , setProduct] = React.useState(initialState)
    
    // Status Change
    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({
            ...product,
            [name]:value
        })
        //console.log(product)
    }

    //Post
    const handleAdd = async (e) => {
        e.preventDefault()
        ////
        //const userData = localStorage.getItem('signIn')
        //console.log("llegaaaaaaaaaaaaa:", userData)
        ////
        await Service.createProduct(product)
        //toast.success('new product added')
        setProduct(initialState)
        SetModalInsert(false)
        loadProducts()
        //window.location.replace('') // reload(true)
        
        //history.push('/DataTable')
    }

    //Edit
    const [modalEdit, setModalEdit] = React.useState(false)

    const handleEdit = async (product) => {
        setProduct(product)
        //console.log(product._id)
        setModalEdit(true)
         
    }

    const handleEditClose = () => {
        setModalEdit(false)
    }

    const handleUpdated = async () => {
        await Service.updateProduct(product._id, product)
        setModalEdit(false)
        //window.location.replace('')
        loadProducts()
    }

    //Delete
    const [modalDelete, setModalDelete] = React.useState(false)

    const handleDelete = (product) => {
        setProduct(product)
        //console.log("delete:" , product)
        setModalDelete(true)
    }

    const handleDeleteClose = () => {
        setModalDelete(false)
    }

    const handleDeleted = async () => {
        await Service.deleteProduct(product._id)
        setModalDelete(false)
       // window.location.replace('')
        loadProducts()
    }
   
    /* const handleDelete = async (product) => {
        //setProduct(product)
        console.log(product._id)
        await Service.deleteProduct(product.id)
        loadProducts()
        //window.location.replace('')
    } */

    React.useEffect( () => {
        loadProducts()
    },[])

    ////
    React.useEffect( () => {
        const userData = JSON.parse(localStorage.getItem('signIn'))
        try {
            const { token } = userData.data
            Service.setToken(token)
        } catch (error) {
            console.log("not-Session")
        }

    },[])
    ////

    return (
        <div>
            <br/>
            <Button onClick = { () =>  HandleOpen()  }>Add+</Button>
            <br/> 
            <MaterialTable 
                columns = { colums }
                data = { data }
                title = "CRUD Products"
                actions = {[
                    {
                        icon: 'edit',
                        tooltip: 'Edit',
                        onClick: (e,row) => handleEdit(row, 'edit') /* row = 'procuct' alert (' Editar Producto: ' + row.name ) */
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete',
                        onClick: (e,row) => handleDelete(row)
                    },
                ]}
                options = {{
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                      }
                }}
            />

            <Modal styles = {styles.modal}
                open = { modalInsert }
                onClose = {handleClose}
            >
                <Box sx={style}>
                <h3>Add new-products</h3>
                <TextField 
                  name = "name"
                  onChange = { handleChange }
                  className = { styles.inputMaterial} 
                  label = "name"
                >
                    <br/>
                </TextField>
                <br/>
                <TextField 
                  name = "img"
                  onChange = { handleChange }
                  className = { styles.inputMaterial} 
                  label = "img"
                 >  
                    <br/>
                </TextField>
                <br/>
                <TextField
                  name = "description"
                  onChange = { handleChange  }
                  className = { styles.inputMaterial} 
                  label = "description"
                >  
                    <br/>
                </TextField>
                <TextField 
                  name = "price"
                  onChange = { handleChange }
                  className = { styles.inputMaterial} 
                  label = "price"
                >  
                    <br/>
                </TextField>
                <br/><br/>
                <div align = "right">
                    <Button onClick = { handleAdd } color = "primary" >Insert</Button>
                    <Button onClick = { handleClose } >Cancel</Button>
                </div> 
                </Box>
                {/* {bodyInsert} */}
            </Modal>

            {/*  MODAL EDIT */}
            <Modal styles = {styles.modal}
                open = { modalEdit }
                onClose = {handleEditClose}
                
            >
                <Box sx={style}>
                <h3>Edit-products</h3>
                <TextField 
                  name = "name"
                  onChange = { handleChange }
                  value = { product.name } 

                  className = { styles.inputMaterial} 
                  label = "name"
                >
                    <br/>
                </TextField>
                <br/>
                <TextField 
                  name = "img"
                  onChange = { handleChange }
                  value = { product&&product.img}

                  className = { styles.inputMaterial} 
                  label = "img"
                 >  
                    <br/>
                </TextField>
                <br/>
                <TextField
                  name = "description"
                  onChange = { handleChange  }
                  value = { product&&product.description}

                  className = { styles.inputMaterial} 
                  label = "description"
                >  
                    <br/>
                </TextField>
                <TextField 
                  name = "price"
                  onChange = { handleChange }
                  value = { product&&product.price}

                  className = { styles.inputMaterial} 
                  label = "price"
                >  
                    <br/>
                </TextField>
                <br/><br/>
                <div align = "right">
                    <Button  onClick = { handleUpdated } color = "primary" >Update</Button>
                    <Button onClick = { handleEditClose } >Cancel</Button>
                </div> 
                </Box>
                {/* {bodyInsert} */}
            </Modal>

            {/* Delete */}
            <Modal styles = {styles.modal}
                open = { modalDelete }
                onClose = {handleDeleteClose}
                
            >
                <Box sx={style}>
                    <p> Estas Seguro que quieres eleminar el articulo <b> {product && product.name} ? </b></p>
                    <div align = "right">
                        <Button onClick = { handleDeleted } color ="secondary" >yes</Button>
                        <Button onClick = { handleDeleteClose }>no</Button>
                    </div>
                </Box>

            </Modal>

        </div>
    )
}

const useStyles = makeStyles( (theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #400',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50% -50%)'
        
    },
    iconos:{
        cursor: 'poiter'
    },
    inputMaterial:{
        width: '100%'
    }
}))



export default DataTable
