import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo.model';

@Component({
  selector: 'app-t0-do',
  templateUrl: './t0-do.component.html',
  styleUrls: ['./t0-do.component.css']
})
export class T0DoComponent implements OnInit {

  todos?:any;
  constructor() { 
    this.todos = [
      {
        sno:3,
        title: "this is title",
        desc: "detail description you can added its displayed",
        active: true
      },
      {
        sno:2,
        title: "this is title",
        desc: "detail description you can added its displayed",
        active: true
      },
      {
        sno:1,
        title: "this is title",
        desc: "detail description you can added its displayed",
        active: true
      },
      {
        sno:4,
        title: "this is title",
        desc: "detail description you can added its displayed",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
