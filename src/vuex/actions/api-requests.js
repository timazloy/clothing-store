import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('https://62f2672bb1098f15081212c2.mockapi.io/items', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products
            })
            .catch((error) => {
                console.log(error)
                return error
            })
    },
}