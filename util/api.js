import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: process.env.API_URL,
    storefrontAccessToken: process.env.ACCESS_TOKEN,
});

export const getData = async () => {
    const products = await client.product.fetchAll();
    
    return JSON.parse(JSON.stringify(products))
}