import { createContext, useState } from "react";

export const userContext = createContext()
const { Provider } = userContext

export const Context = ({children}) => {

    const [sessionState, setSessionState] = useState(false)
    const [sessionMail, setMail] = useState('no-user-logon')

    const sessionActive = () => {
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                if(data !== 'no-active-session') {
                    setSessionState(true)
                    setMail(data)
                } else{
                    setSessionState(false)
                    setMail('no-user-logon')
                }
            })
            .catch((err)=>console.log(err))

        return sessionState
    }

    
    const logOutSession = () => {
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>console.log(err))
        
    }
    
    const getSessionState = () => {
        return sessionState
    }

    const getEmailSession = () => {
        return sessionMail
    }
    
    const valorContexto = {
        getSessionState: getSessionState,
        getEmailSession: getEmailSession,
        sessionActive: sessionActive
    }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}