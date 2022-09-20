import { FETCH_PRODUCTS } from "../../hooks/types";

export const fetchProducts = () => async(dispatch) => {
    const res = await fetch("/pub/product/list_all_product");
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res.data.data,
        });
};