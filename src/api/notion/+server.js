// @ts-nocheck
/** @type {import('./$types').RequestHandler} */

import { Client } from "@notionhq/client";

const NOTION_API_KEY = process.env.YOUR_NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.YOUR_NOTION_DATABASE_ID;

const notion = new Client({
    auth: NOTION_API_KEY,
  });

export async function POST() {
    return new Response();
};