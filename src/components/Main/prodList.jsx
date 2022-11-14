import {Prod} from './prod'

export const ProdList = ({products}) => {
    return (
        <>
            {products.map((products, index)=>{
                return <Prod key={index} produ={products}/>
            })}
        </>
    )
}