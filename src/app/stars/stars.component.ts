import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
    @Input() //该装饰器使得其下rating的值是由其父组件传递给它的
    private rating: number = 0; //用来接收产品组件传给它的评分值
    
    private stars: boolean[]; //声明一个变量stars，它是boolean类型的数组
    constructor() { }

    ngOnInit() {
        this.stars = [];
        for (let i=1;i<=5;i++){  //因为最多5颗星，所以循环终止条件为5
            this.stars.push(i>this.rating); //当this.stars的元素的值为true时显示空星，反之显示实星
        }
    }

}
