import http from  "../http-common";

const getProducts = () =>
{
    return http.get(`/products/getProducts`);
}

const ProductService = {
    getProducts,
}

export default ProductService;