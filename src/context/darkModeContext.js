import {createContext ,useReducer} from 'react'
import {ColorModeReducer} from './darkModeReducer'

const intialColor = {
    darkMode:false
}

export const DarkContext = createContext(intialColor)

const DarkModeContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(ColorModeReducer,intialColor)

    return(
        <DarkContext.Provider value={{darkMode:state.darkMode,dispatch}}>
            {children}
        </DarkContext.Provider>
    )

}


export default DarkModeContextProvider