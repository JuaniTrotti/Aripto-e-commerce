import { useEffect, useState } from "react"
import { ProdList } from "./prodList"

export const Main = () => {

    const [produ, setProducts] = useState([])
    const [loading, setLoad] = useState(true)

    async function fetchProducts() {
        try {
            const proxy = 'https://api.allorigins.win/raw?url='
            const url = 'https://aripto.herokuapp.com/product/get-product/all'
            const res = await fetch(proxy+url)
            return await res.json()
        } catch(err) {console.log(err)}
    }

    async function productUpdate(res) {
        setProducts(res)
    }
    
    useEffect(()=>{
        setProducts([])
        const getProd = async () => {
            const res = await fetchProducts()
            await productUpdate(res)
            setLoad(false)
        }
        getProd()

        return() => {
            setProducts([])
        }
    }, []) 

    return (
        <>
            <div className="mainContainer cFlex">
                <h1>Main</h1>

                {/* aca vamos a iterar los productos */}
                <div className="productListContainer cFlex">
                    {loading ? <h1>Cargando</h1> : <ProdList products={produ}/>}
                </div>
            </div>
        </>
    )
}

// export default memo(Main)