import {categories } from "../../utils/categories"

export async function GET() {
    return new Response(
        JSON.stringify(categories)
    );
};