import { Header } from "../generics/header"
import { Outlet } from "react-router-dom"

export const HeaderLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}