import {PAYPAL_CLIENT_SERCET} from "$env/static/private"

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    let env = PAYPAL_CLIENT_SERCET
    
    return {
        env
    };
};