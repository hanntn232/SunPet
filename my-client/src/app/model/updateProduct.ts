import { IDproduct } from "./product";
export class updateProduct{
    product: IDproduct;
    formImg: FormData
    constructor (){
        this.product = new IDproduct();
        this.formImg = new FormData();
    }
}