import { Landing } from "../Main/landing"
import { Main } from "../Main/main"
import { Footer } from "../generics/footer"

export const MainLayout = () => {
    return (
        <>
            <Landing/>
            <Main/>
            <Footer/>
        </>
    )
}