
export interface CartItem {
    id : number | string,
    price : number,
    qty : number,
    title : string,
    sum : number
}

export interface CartState {
    items : CartItem[]
}

export interface Product {
  id: number;
  title: string;
  price: number;
  imageURL: string;
}