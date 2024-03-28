import { PriceModel } from "./price.model";

export class BookModel{
    public id:number;
    public title:string;
    public totalPages:number;
    private _author:string;
    public price:PriceModel;

    public set author(value:string){
        this._author=value;
    }

    public get author(){
       return 'Author :'+this._author;
    }
}