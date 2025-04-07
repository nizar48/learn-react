/*
*   - `id`: string
  - `name`: string
  - `description`: string
  - `price`: number
  - `imageUrl`: string
  - `category`: string (optional)
*
* */

export type Product = {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    category?: string,
};