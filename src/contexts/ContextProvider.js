import React, {Children, createContext, useContext, useState} from 'react';
/**
 * 
 * Accepts a context object (the value returned from React.createContext) 
 * and returns the current context value for that context. The current context
 * value is determined by the value prop of the nearest 
 * <MyContext.Provider> above the calling component in the tree.
 * 
 */

// create context
const StateContext = createContext();

// initial state object
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
};




// UseCOntext provider to apply in our index application
export const ContextProvider = ({children}) => {
    // state to share in our application
    const [activeMenu, setActiveMenu] = useState(true);

    // return a context provider passing state throw the value
    return (
        <StateContext.Provider value={{ activeMenu ,setActiveMenu }}>
            {children}
        </StateContext.Provider>
    )
};

// context to access to the state inside the provider
export const useStateContext = () => useContext(StateContext);