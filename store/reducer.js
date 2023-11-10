const initialState = {
    authToken:null
}

const authReducer = (state= initialState, action)=>{
    switch (action.type) {
        case 'REGISTER_USER':
            return{
                ...state,
                authToken:action.payload
            }
            
        case 'LOGIN_USER':
            return{
                ...state,
                authToken:action.payload
            }
        case 'LOGOUT_USER':
            return{
                ...state,
                authToken:action.payload
            }
    }

}

export default authReducer