import React,{createContext,useState} from 'react';


const AppContext = createContext()

export const  AppContextProvider = ({children}) => { 

    const [tabActive, setTabActive] = useState(0)

return (
    <AppContext.Provider value={{tabActive, setTabActive}}>
        {children}
    </AppContext.Provider>
)

}

export default AppContext
