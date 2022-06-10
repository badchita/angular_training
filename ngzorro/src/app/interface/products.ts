export interface Products {
}

export interface ProductsDetail {
  data:{
    addresses          : Array<[]>,
    addresses_detail   : Object,
    carts              : Array<[]>,
    category           : string,
    description        : string,
    id                 : number,
    name               : string,
    price              : number,
    product_location   : string,
    product_location_id: number,
    product_ratings    : Array<[]>,
    product_status     : string,
    quantity           : number,
    seller             : Object,
    status             : string,
    thumbnail_name     : string,
    user_id            : number
  }
}
