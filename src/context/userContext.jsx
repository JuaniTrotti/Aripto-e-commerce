import { useEffect } from "react";
import { createContext, useState } from "react";

export const userContext = createContext()
const { Provider } = userContext

export const Context = ({children}) => {


    const [sessionState, setSessionState] = useState(false)
    const [sessionMail, setMail] = useState('')
    const [objectUser, setObjUser] = useState({})

    //setters
    const setterSessionState = (data) => {setSessionState(data)}
    const setterEmailSession = (data) => {setMail(data)}
    const setterUserObject = (data) => {setObjUser(data)}
    
    //getters
    const getterSessionState = () => {return sessionState }
    const getterEmailSession = () => {return sessionMail}
    const getterUserObject = () => {return objectUser}

    const valorContexto = {
        setterEmailSession: setterEmailSession,
        setterSessionState: setterSessionState,
        setterUserObject: setterUserObject,
        getterEmailSession: getterEmailSession,
        getterSessionState: getterSessionState,
        getterUserObject: getterUserObject
    }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}