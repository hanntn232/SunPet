export class Cart{
    _id: string;
    customerID: string;
    productList: [{
        productID: string;
        quantity: number
    }];
    CreatedAt: any;
    updatedAt: any
    constructor(){
        this._id = "";
        this.customerID = "";
        this.productList = [
            {
                productID: "",
                quantity: 0
            }
        ];
    }
}