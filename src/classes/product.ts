import { ProductItem } from "./interfaces/productItem";

export class Product implements ProductItem {
  constructor(public name: string, public price: number) {}
}
