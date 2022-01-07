import { useRouter } from 'next/router'
import { getProduct, buyProduct } from '../../util/api'


export const getServerSideProps = async (context) => {
    const id = context.query.id || context.params.id
    const data = await getProduct(id)

    return {
        props: {
            product: data,
        }
    }
}

const Product = ({ product }) => {
    const router = useRouter()

    const handleCheckout = async () => {
        const cart = await buyProduct(product)
        router.replace(cart.webUrl)
    }

    return (
        <div>
            <p>{ product.id }</p>
            <p>{ product.title }</p>
            <p>{ product.description }</p>
            <p>{ product.variants[0].price }</p>
            <input type = "button" onClick = { handleCheckout } />
        </div>
    )
}

export default Product