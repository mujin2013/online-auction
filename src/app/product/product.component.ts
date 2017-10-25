import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private imgUrl = 'http://placehold.it/320x150';
    private products: Array<Product>;
    constructor() { }

    ngOnInit() {
        this.products = [
            new Product(1, '第一个商品', 12.30, 2.5, '这是第一个商品，是我在angular4课程中创建的', ['电子产品', '儿童']),
            new Product(2, '第二个商品', 12.30, 1.5, '这是第二个商品，是我在angular4课程中创建的', ['电子产品', '儿童']),
            new Product(3, '第三个商品', 12.30, 4.5, '这是第三个商品，是我在angular4课程中创建的', ['电子产品', '儿童']),
            new Product(4, '第四个商品', 12.30, 3.5, '这是第四个商品，是我在angular4课程中创建的', ['电子产品', '儿童']),
            new Product(5, '第五个商品', 12.30, 2.5, '这是第五个商品，是我在angular4课程中创建的', ['电子产品', '儿童']),
            new Product(6, '第六个商品', 12.30, 5.0, '这是第六个商品，是我在angular4课程中创建的', ['电子产品', '儿童']),
        ];
    }

}

export class Product{
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ){}
}