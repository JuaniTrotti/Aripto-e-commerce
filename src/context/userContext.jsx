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
    
    const logOutSession = () => {
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>console.log(err))
        
    }

    // const userObject = (email) => {
    //     const proxy = 'https://api.allorigins.win/raw?url='
    //     const url = `https://ariptosv.onrender.com/users/get-user/${email}`
    //     fetch(proxy+url)
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //             console.log(data + 'estoy en el context')
    //             setObjUser(data)
    //         })
    //         .catch((err)=>console.log(err))
    // }

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


    // async function ses() {
    //     const proxy = 'https://api.allorigins.win/raw?url='
    //     const url = "https://ariptosv.onrender.com/users/session-use"
    //     await fetch(proxy+url)
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //         //     if(data !== 'no-active-session') {
    //         //         setSessionState(true)
    //         //         setMail(data.email)
    //         //         userObject(data)
    //         //     } else{
    //         //         setSessionState(true)
    //         //         setMail('no-user-loggon')    
    //         //     }
    //             setRespuesta(data)
    //             console.log(data)
    //         })
    //         .catch((err)=>console.log(err))
    // }


    // async function manageSes() {
    //     await ses()
    //     console.log(respuesta)
    //     if (respuesta !== 'no-active-session') {
    //         console.log('hay session activa')
    //     } else {
    //         console.log('no hay session activa')
    //     }
    //     // console.log(data + ' manageSes')
    //     // if(data !== 'no-active-session') {
    //     //     setSessionState(true)
    //     //     setMail(data.email)
    //     //     userObject(data)
    //     // } else{
    //     //     console.log(data + ' estoy aqui')
    //     //     setSessionState(true)
    //     //     setMail('no-user')    
    //     // }

    //     // return sessionState

    //     // console.log(await ses())
    //     return sessionState
    // }