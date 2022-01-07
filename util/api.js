import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: process.env.API_URL,
    storefrontAccessToken: process.env.ACCESS_TOKEN,
});

export const getProducts = async () => {
    const products = await client.product.fetchAll();

    return JSON.parse(JSON.stringify(products))
}

export const getProduct = async (id) => {
    const product = await client.product.fetch(id)
    return JSON.parse(JSON.stringify(product))
}

export const buyProduct = async (product) => {
    const checkout = await client.checkout.create()

    const cart = await client.checkout.addLineItems(checkout.id, {
        variantId: product.variants[0].id,
        quantity: 1
    })
    
    return cart 
}