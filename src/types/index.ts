export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface OrderDetails {
  product: Product;
  quantity: number;
}
