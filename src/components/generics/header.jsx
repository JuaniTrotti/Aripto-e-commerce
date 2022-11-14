import { useEffect, useState, useContext } from "react"
import { userContext } from "../../context/userContext"

export const Header = () => {

    const [sesState, setSession] = useState(false)
    const [user, setuser] = useState({})
    const [load, setLoad] = useState(true)
    const { sessionState, mailSes, getSessionState, getEmailSession } = useContext(userContext)

    useEffect(()=>{

        const session = async () => {
            setSession(getSessionState())
            console.log(sesState + " adentro de session")
        }
        session()

        if (sesState == true) {
            const proxy = 'https://api.allorigins.win/raw?url='
            const url = 'https://ariptosv.onrender.com/users/get-user/hernan@gmail.com'
            fetch(proxy+url)
                .then((response)=>response.json())
                .then((data)=>{
                    console.log(data)
                    setuser(data)
                })
                .catch((err)=>console.log(err))
                .finally(()=>{
                    setLoad(false)
                })
        }

        // console.log(getSessionState())
        // console.log(getEmailSession())

        return( () => {
            setuser({})
            setSession(false)
        })
    }, [])

    return (
        <>
            <div className="headerContainer cFlex">
                <h1>Header</h1>
                {sesState ? <h2>{user.user}</h2> : <h2>sign up</h2>}
                {/* <button onClick={()=>{clearUser()}}>logout</button> */}
            </div>
        </>
    )
}