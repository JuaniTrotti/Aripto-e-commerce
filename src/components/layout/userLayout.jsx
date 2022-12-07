import { Outlet } from "react-router-dom"
export const UserLayout = () => {
    return (
        <>
            {/* <h1>Seccion usuarios</h1> */}

            {/* aca podria tener una logica para enviar el usuario al login o
            redirigir al inicio */}
            <Outlet/>
        </>
    )
}
