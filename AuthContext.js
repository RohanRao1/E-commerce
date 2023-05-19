import React, {  useReducer } from "react";


const AuthContext = React.createContext({
  items : [],
  totalAmount : 0,
  token: localStorage.getItem('token'),
  login: (token) => {},
  logout: () => {},
  addToCart : () => {},
  email : localStorage.getItem('email')
});

const defaultState = {
    items : [],
    totalAmount : 0,
    token : localStorage.getItem('token'),
    email : localStorage.getItem('email')
}

const cartReducer = (state,action) => {
    if (action.type === "login"){
        localStorage.setItem('token',action.token)
        localStorage.setItem('email',action.email)

        return {
          ...state , 
          email : action.email,
          token : action.token
        }

    }

     if (action.type === "logout") {
       localStorage.removeItem('token');
       localStorage.removeItem('email');

       return {
         ...state,
         email: '',
         token: '',
         items : [],
         totalAmount : 0
       };
     }

    if (action.type === 'ADD'){
        const updatedAmount = state.totalAmount + action.item.price * action.item.quantity

        const existingCartitemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartitem = state.items[existingCartitemIndex]

        let updateditems 

        if(existingCartitem){
            const updatedItem = {
                ...existingCartitem,
                quantity : existingCartitem.quantity + action.item.quantity
            }
            updateditems = [...state.items]
            updateditems[existingCartitemIndex] = updatedItem
        } else {
            updateditems = state.items.concat(action.item)
        }

        return { ...state,
            items : updateditems,
            totalAmount : updatedAmount
        }
    } 

    if (action.type === 'REMOVE') {
        const existingCartIndex = state.items.findIndex(item => 
            item.id === action.id
        )
        
        const existingItems = state.items[existingCartIndex]
        const updateTotAmount = state.totalAmount - existingItems.price
        let updateItems ;
        if (existingItems.quantity === 1) {
            updateItems = state.items.filter(item => item.id !== action.id)
        } else {
            let updatedItem = {
                ...existingItems,
                quantity : existingItems.quantity - 1
            }

            updateItems = [...state.items]
            updateItems[existingCartIndex] = updatedItem
        }

        return {
            ...state,
            items : updateItems,
            totalAmount : updateTotAmount
        }

    }

    return defaultState
}




export const AuthContextProvider = (props) => {


    const [state, dispatch] = useReducer(cartReducer,defaultState)

    const addItemHandler = (item) => {
        dispatch({type : 'ADD', item : item})
    }

  const loginHandler = (token , email) => {
    // setToken(token);
    // localStorage.setItem('token',token)
    // localStorage.setItem('email', email)
    dispatch({type : 'login', token : token , email: email})

  };

  const logoutHandler = () => {
    // setToken(null);
    // localStorage.removeItem('token')
    // localStorage.removeItem('email')
    dispatch({type : 'logout'})
  };

  const authContext = {
    token: state.token,
    login: loginHandler,
    logout: logoutHandler,
    addToCart : addItemHandler ,
    email : state.email,
    items : state.items,
    totalAmount : state.totalAmount
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
