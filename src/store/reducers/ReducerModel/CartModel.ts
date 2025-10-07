
export interface CartItem {
    id : number | string,
    price : number,
    qty : number,
    title : string,
    sum : number
}

export interface CartState {
    itemsByUser : object,
    currentUserId : string | null
}

export interface Product {
  id: number;
  title: string;
  price: number;
  imageURL: string;
}