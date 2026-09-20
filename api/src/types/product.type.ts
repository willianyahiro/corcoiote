export type Product = {
  id : number;
  name: string;
  price: number;
  description: string | null ;
}

export type CreateProduct = Omit<Product, 'id'> ;
export type UpdateProduct = Partial<CreateProduct>;