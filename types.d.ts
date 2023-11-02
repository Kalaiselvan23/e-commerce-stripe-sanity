type ProductType={
    _id:string,
    slug:{
        current:string,
    }
    likes:number,
    stock:number,
    price:number,
    category:{
        _ref:string,
    },
    imageUrls:string[],
    name:string,
    sale:boolean,
    details:string,
}