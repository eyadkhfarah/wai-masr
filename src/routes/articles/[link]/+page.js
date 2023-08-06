import {categories} from "../../../utils/categories"

export async function load({ params}) {
    
    const res = categories.find((item) => {
        return item.link.toString() === params.link;
    })

    return {
        menu: res
    };
};