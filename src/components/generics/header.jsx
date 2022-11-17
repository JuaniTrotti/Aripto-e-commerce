import { useEffect, useState, useContext } from "react"
import { Context, userContext } from "../../context/userContext"
import { HeaderLog } from "../headerLayout/headerLog"
import { HeaderSign } from "../headerLayout/headerSign"

export const Header = () => {

    // const [sesState, setSession] = useState(false)
    // const [user, setuser] = useState({})
    // const [load, setLoad] = useState(true)
    const [respuesta, setRespuesta] = useState()
    const {
        setterSessionState, 
        getterSessionState,
        setterEmailSession,
        setterUserObject
    } = useContext(userContext)

    const ses = async() => {
        const proxy = 'https://api.allorigins.win/raw?url='
        const url = "https://ariptosv.onrender.com/users/session-use"
        let fetchData = await fetch(proxy+url)
            .then((response)=>response.json())
            .then((data)=>{
                return data
            })
            .catch((err)=>console.log(err))

        return fetchData
    }

    const awaitSession = async () => {
        const response = await ses()
        if(response !== 'no-active-session') {
            console.log('hay session logeada')
            setterSessionState(true)
            setterEmailSession(response.email)
            setterUserObject(response)
        } else {
            console.log('no hay session logeada')
            setterSessionState(false)
        }
    }
    
    
    useEffect(()=>{
        awaitSession()
    }, [])
    
    return (
        <>
            <div className="headerContainer cFlex">
                {getterSessionState() ? <HeaderLog/> : <HeaderSign/>}
            </div>
        </>
    )
}