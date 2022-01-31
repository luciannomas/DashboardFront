export const initialState = {
    user: null
}

export const actionTypes = {
    SET_USER: "SET_USER"
   
}

//TODO: SEGUN LA ACCION CAMBIA EL ESTADO INICIAL.
//TODO: "action.type" ESCUCHA Y MODIFICA EL ESTADO, CUANDO ESTA EN "ADD_TO_BACKET" LO AGREGA EN EL ARRAY AUTOMATICAMENTE
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        
        default: return state; 
    }
}

export default reducer


