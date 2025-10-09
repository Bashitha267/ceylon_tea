export interface Product {
  id: number;
  name: string;
  
  price: number;
  image: string;
  category: string;
  shortDescription:string;
  details:string;
  ingredients:string[];
   howToUse:string;
}

export interface OrderDetails {
  product: Product;
  quantity: number;
}
