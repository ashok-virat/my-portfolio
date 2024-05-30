import { memo } from 'react'
import { useSelector } from 'react-redux'

export const ProductView = memo(({ removeProduct }) => {
    const product = useSelector((state) => state.product);
    console.log('render')
    return (<><h2>Products</h2><ul style={{ listStyle: 'none' }}>
        {product.map((item, index) => <li key={index}><span>{item.name}</span><button onClick={() => {
            removeProduct(item.name)
        }}>delete</button></li>)}
    </ul></>)
})