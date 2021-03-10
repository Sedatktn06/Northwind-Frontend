import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductPesponseModel extends ResponseModel
{
    data:Product[],
}