
export interface CartItems {
    title : string,
    price : number,
    imageURL : string,
    qty : number,
    onIncreasePress : () => void,
    onDecreasePress : () => void,
    onDeletePress : () => void
}


export interface TotalView {
    itemsPrice : number,
    orderTotal : number
}
